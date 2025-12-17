// Bangladesh Map SVG Generator from GeoJSON
// Converts real geographical coordinates to SVG paths

let geojsonData = null;
let selectedDistrictName = null;

// Name mapping: GeoJSON name -> data.js name
// Fixes spelling differences between the two sources
const districtNameMap = {
  "Chittagong": "Chattogram",
  "Comilla": "Cumilla",
  "Jhalokati": "Jhalakathi",
  "Khagrachhari": "Khagrachari",
  "Maulvibazar": "Moulvibazar",
  "Nawabganj": "Chapai Nawabganj",
  "Netrakona": "Netrokona",
  "Brahamanbaria": "Brahmanbaria"
};

// Get the correct name for data.js lookup
function getDataName(geojsonName) {
  return districtNameMap[geojsonName] || geojsonName;
}

// Load and render the map
async function initMap() {
  try {
    const response = await fetch('data/districts.geojson');
    geojsonData = await response.json();
    renderMap();
  } catch (error) {
    console.error('Error loading map data:', error);
  }
}

// Project geographic coordinates to SVG coordinates
function projectCoords(lon, lat, bounds, width, height) {
  const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * width;
  const y = height - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * height;
  return [x, y];
}

// Calculate bounds of all coordinates
function calculateBounds(features) {
  let minLon = Infinity, maxLon = -Infinity;
  let minLat = Infinity, maxLat = -Infinity;

  features.forEach(feature => {
    const coords = feature.geometry.coordinates;
    processCoords(coords, (lon, lat) => {
      minLon = Math.min(minLon, lon);
      maxLon = Math.max(maxLon, lon);
      minLat = Math.min(minLat, lat);
      maxLat = Math.max(maxLat, lat);
    });
  });

  // Add some padding
  const padLon = (maxLon - minLon) * 0.02;
  const padLat = (maxLat - minLat) * 0.02;

  return {
    minLon: minLon - padLon,
    maxLon: maxLon + padLon,
    minLat: minLat - padLat,
    maxLat: maxLat + padLat
  };
}

// Process nested coordinate arrays
function processCoords(coords, callback) {
  if (typeof coords[0] === 'number') {
    callback(coords[0], coords[1]);
  } else {
    coords.forEach(c => processCoords(c, callback));
  }
}

// Convert coordinates to SVG path
function coordsToPath(coords, bounds, width, height) {
  const paths = [];

  function processRing(ring) {
    const points = ring.map(coord => {
      const [x, y] = projectCoords(coord[0], coord[1], bounds, width, height);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return `M ${points.join(' L ')} Z`;
  }

  function processPolygon(polygon) {
    polygon.forEach(ring => {
      paths.push(processRing(ring));
    });
  }

  if (coords[0] && coords[0][0] && typeof coords[0][0][0] === 'number') {
    // Polygon
    processPolygon(coords);
  } else {
    // MultiPolygon
    coords.forEach(polygon => processPolygon(polygon));
  }

  return paths.join(' ');
}

// Render the SVG map
function renderMap() {
  const svg = document.getElementById('bangladesh-map');
  if (!svg || !geojsonData) return;

  const width = 500;
  const height = 600;
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const bounds = calculateBounds(geojsonData.features);

  // Clear existing
  svg.innerHTML = '';

  // Create paths for each district
  geojsonData.features.forEach(feature => {
    const districtName = feature.properties.ADM2_EN;
    const divisionName = feature.properties.ADM1_EN;

    const pathData = coordsToPath(feature.geometry.coordinates, bounds, width, height);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('class', 'district');
    path.setAttribute('data-name', districtName);
    path.setAttribute('data-division', divisionName);

    // Event handlers
    path.addEventListener('click', () => selectDistrict(districtName, divisionName));
    path.addEventListener('mouseenter', (e) => showTooltip(e, districtName));
    path.addEventListener('mouseleave', hideTooltip);

    svg.appendChild(path);
  });

  // Add tooltip element if not exists
  if (!document.getElementById('tooltip')) {
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    tooltip.className = 'map-tooltip';
    document.body.appendChild(tooltip);
  }
}

// Show tooltip
function showTooltip(event, name) {
  const tooltip = document.getElementById('tooltip');
  const dataName = getDataName(name);
  const district = genocideData.districts.find(d => d.name === dataName);
  const displayName = currentLang === 'bn' && district ? district.nameBn : dataName;

  tooltip.textContent = displayName;
  tooltip.style.left = (event.pageX + 10) + 'px';
  tooltip.style.top = (event.pageY - 30) + 'px';
  tooltip.classList.add('visible');
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  if (tooltip) tooltip.classList.remove('visible');
}

// Select district and show info
function selectDistrict(name, division) {
  // Remove previous selection
  document.querySelectorAll('.district').forEach(d => d.classList.remove('active'));

  // Add active class
  const selected = document.querySelector(`.district[data-name="${name}"]`);
  if (selected) selected.classList.add('active');

  selectedDistrictName = name;

  // Find district data using mapped name
  const dataName = getDataName(name);
  const district = genocideData.districts.find(d => d.name === dataName);

  if (district) {
    showDistrictInfo(district);
  } else {
    showPlaceholderInfo(name, division);
  }
}

// Show district information
function showDistrictInfo(district) {
  const infoDefault = document.getElementById('infoDefault');
  const infoContent = document.getElementById('infoContent');
  const districtName = document.getElementById('districtName');
  const siteCount = document.getElementById('siteCount');
  const sitesList = document.getElementById('sitesList');

  infoDefault.style.display = 'none';
  infoContent.style.display = 'block';

  const name = currentLang === 'bn' ? district.nameBn : district.name;
  districtName.textContent = name;

  const countText = currentLang === 'bn'
    ? `${district.siteCount}টি বধ্যভূমি নথিভুক্ত`
    : `${district.siteCount} documented killing fields`;
  siteCount.textContent = countText;

  sitesList.innerHTML = '';

  district.sites.forEach(site => {
    const siteItem = document.createElement('div');
    siteItem.className = 'site-item';

    const siteName = document.createElement('div');
    siteName.className = 'site-name';
    siteName.textContent = currentLang === 'bn' ? site.nameBn : site.name;

    const siteLocation = document.createElement('div');
    siteLocation.className = 'site-location';
    siteLocation.textContent = currentLang === 'bn' ? site.locationBn : site.location;

    siteItem.appendChild(siteName);
    siteItem.appendChild(siteLocation);

    if (site.casualties) {
      const casualties = document.createElement('span');
      casualties.className = 'site-casualties';
      casualties.textContent = currentLang === 'bn'
        ? `${site.casualties} শহীদ`
        : `${site.casualties} martyred`;
      siteItem.appendChild(casualties);
    }

    sitesList.appendChild(siteItem);
  });
}

// Placeholder for districts not yet in data
function showPlaceholderInfo(name, division) {
  const infoDefault = document.getElementById('infoDefault');
  const infoContent = document.getElementById('infoContent');
  const districtNameEl = document.getElementById('districtName');
  const siteCount = document.getElementById('siteCount');
  const sitesList = document.getElementById('sitesList');

  infoDefault.style.display = 'none';
  infoContent.style.display = 'block';

  // Use mapped name for display
  const dataName = getDataName(name);
  districtNameEl.textContent = dataName;
  siteCount.textContent = division + ' Division';
  sitesList.innerHTML = `<p class="placeholder-text">${currentLang === 'bn'
      ? 'এই জেলার তথ্য শীঘ্রই যুক্ত হবে...'
      : 'Data for this district coming soon...'
    }</p>`;
}

// Deselect currently selected district
function deselectDistrict() {
  if (!selectedDistrictName) return;

  document.querySelectorAll('.district').forEach(d => d.classList.remove('active'));
  selectedDistrictName = null;

  const infoDefault = document.getElementById('infoDefault');
  const infoContent = document.getElementById('infoContent');

  if (infoDefault && infoContent) {
    infoDefault.style.display = 'block';
    infoContent.style.display = 'none';
  }
}

// Handle global clicks to deselect when clicking outside map and info panel
document.addEventListener('click', (e) => {
  const isDistrict = e.target.closest('.district');
  const isInfoPanel = e.target.closest('.info-panel');
  const isLangBtn = e.target.closest('.lang-btn'); // Also ignore lang button

  if (!isDistrict && !isInfoPanel && !isLangBtn) {
    deselectDistrict();
  }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initMap);
