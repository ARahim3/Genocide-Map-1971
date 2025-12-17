// Simple app initialization

let currentLang = 'bn'; // Default to Bangla

document.addEventListener('DOMContentLoaded', function() {
  // Language toggle
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
});

function toggleLanguage() {
  currentLang = currentLang === 'bn' ? 'en' : 'bn';

  const langBtn = document.getElementById('langToggle');
  const header = document.querySelector('.header h1');
  const subtitle = document.querySelector('.subtitle');
  const statLabels = document.querySelectorAll('.stat-label');
  const infoDefault = document.getElementById('infoDefault');

  if (currentLang === 'en') {
    langBtn.textContent = 'বাংলা';
    header.textContent = '1971 Genocide Map of Bangladesh';
    subtitle.textContent = '550+ killing fields across 64 districts';
    statLabels[0].textContent = 'Districts';
    statLabels[1].textContent = 'Killing Fields';
    statLabels[2].textContent = 'Martyrs';

    if (infoDefault.style.display !== 'none') {
      infoDefault.innerHTML = '<p>Click any district on the map</p>';
    }
  } else {
    langBtn.textContent = 'English';
    header.textContent = '১৯৭১ সালের গণহত্যার মানচিত্র';
    subtitle.textContent = 'বাংলাদেশের ৬৪ জেলায় ৫৫০+ বধ্যভূমি';
    statLabels[0].textContent = 'জেলা';
    statLabels[1].textContent = 'বধ্যভূমি';
    statLabels[2].textContent = 'শহীদ';

    if (infoDefault.style.display !== 'none') {
      infoDefault.innerHTML = '<p>মানচিত্রে যেকোনো জেলায় ক্লিক করুন</p><p class="info-en">Click any district on the map</p>';
    }
  }

  // Refresh displayed district info if any
  const activeDistrict = document.querySelector('.district.active');
  if (activeDistrict) {
    const id = parseInt(activeDistrict.getAttribute('data-id'));
    const district = genocideData.districts.find(d => d.id === id);
    if (district) {
      showDistrictInfo(district);
    }
  }
}
