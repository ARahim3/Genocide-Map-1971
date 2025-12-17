# Scars of a Nation: 1971 Bangladesh Genocide Interactive Map

An interactive web map documenting 550+ mass killing sites across Bangladesh during the 1971 Liberation War genocide.

## Features

- ✅ **Interactive Leaflet Map** - Zoomable, pannable map of Bangladesh
- ✅ **District-based Navigation** - Click any district to see genocide sites
- ✅ **Bilingual Support** - Toggle between English and বাংলা
- ✅ **Search Functionality** - Search for districts or specific sites
- ✅ **Featured Locations** - Highlighted cards for major massacre sites
- ✅ **Statistics Counter** - Shows total districts, sites, and casualties
- ✅ **Responsive Design** - Works on mobile and desktop
- ✅ **Dark Somber Theme** - Appropriate aesthetic for sensitive historical content

## Current Status

**Version:** MVP (Minimum Viable Product)
- ✅ 21 districts completed with full data
- ⏳ 43 districts remaining (see `TODO.md`)

## Project Structure

```
Genocide71/
├── index.html              # Main page
├── README.md              # This file
├── TODO.md                # Remaining work tracker
├── css/
│   └── style.css          # All styling
├── js/
│   ├── app.js             # Main initialization
│   ├── map.js             # Leaflet map logic
│   ├── data.js            # Genocide sites data (21/64 districts)
│   ├── search.js          # Search functionality
│   └── i18n.js            # Bilingual translations
├── data/
│   └── districts.geojson  # Bangladesh district boundaries
└── assets/
    └── icons/             # (For future use)
```

## How to Run Locally

### Option 1: Simple HTTP Server (Recommended)

```bash
# Navigate to project directory
cd /Users/abdurrahim/Codes/Genocide71

# Start a simple HTTP server
# Using Python 3:
python3 -m http.server 8000

# OR using Node.js:
npx http-server -p 8000

# Then open in browser:
# http://localhost:8000
```

### Option 2: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. **Initialize Git Repository:**
   ```bash
   cd /Users/abdurrahim/Codes/Genocide71
   git init
   git add .
   git commit -m "Initial commit: 1971 Genocide Map MVP"
   ```

2. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Name it "Genocide71" (or any name)
   - Do NOT initialize with README
   - Click "Create repository"

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/Genocide71.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / (root)
   - Click Save

5. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/Genocide71/
   ```

### Option 2: Vercel (Free)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd /Users/abdurrahim/Codes/Genocide71
   vercel
   ```

3. Follow prompts (it's free for static sites)

## Adding Remaining Districts

To complete the full 64 districts:

1. Show Claude the `TODO.md` file
2. Say: **"Continue adding the remaining 43 districts"**
3. Claude will parse the remaining data from `info.txt` and add to `data.js`

## Usage

### Viewing the Map
- The map loads showing Bangladesh districts
- Hover over districts to see their names
- Click any district to view all genocide sites in that area

### Search
- Use the search bar at the top
- Type district names or site names (works in English or Bangla)
- Click on search results to zoom to that location

### Language Toggle
- Click the language button in the top-right corner
- Toggle between English and বাংলা
- All UI text and data will update

### Featured Locations
- Scroll down to see featured massacre sites
- Click on any card to zoom to that district

## Technologies Used

- **Leaflet.js** - Interactive mapping library
- **CartoDB Dark Tiles** - Map background tiles
- **Vanilla JavaScript** - No frameworks, pure JS
- **CSS3** - Modern styling with CSS variables
- **Google Fonts** - Hind Siliguri for Bangla text

## Data Sources

Historical data compiled from:
- Historical records
- Survivor testimonies
- Published documentation of 1971 genocide
- Original research (credit to the data provider)

## Future Enhancements

See `TODO.md` for planned features:
- Complete all 64 districts
- Add GPS coordinates for precise locations
- Historical photographs
- Survivor testimonies
- Timeline view
- Source citations

## License

This project documents historical atrocities for educational purposes.

## Contributing

To add more data or improve the site:
1. Fork the repository
2. Make your changes
3. Submit a pull request

## Contact

For questions or additional data:
- Open an issue on GitHub
- Or contact the project maintainer

---

**Note:** This is sensitive historical content. Please treat it with appropriate respect and solemnity.
