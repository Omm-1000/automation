# KrishiSathi

Direct-from-farm marketplace where farmers list products and customers buy directly.

Features:
- Marketplace with search, filter, sort
- Farmer dashboard to add/edit/delete products
- Cart with quantity controls and checkout simulation
- LocalStorage persistence (no backend required)

Quick start:
- Open `index.html` in a browser, or
- Run a local server:
  - Python 3: `python3 -m http.server 5173` then open `http://localhost:5173/krishiSathi/`
  - Node: `npx serve` then open the served URL

Deploy:
- Any static host (GitHub Pages, Netlify, Vercel). Serve the `krishiSathi` folder.

Notes:
- Images can be uploaded; they are stored as base64 in LocalStorage.
- This is a frontend-only demo. Replace the storage with a real backend for production.