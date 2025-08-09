# KrishiSathi

KrishiSathi is a simple web platform that lets farmers list their fresh produce directly for customers to purchase, eliminating middlemen and ensuring fair prices.

## Features

- Responsive, modern UI built with Tailwind CSS
- Farmer dashboard to add new products (name, description, price, quantity, image)
- Marketplace view displaying all available products in card layout
- Data persistence via browser `localStorage` (no backend required)
- Fully client-side and lightweight – just open the `index.html` in any browser

## Project Structure

```
krishiSathi/
├── index.html   # Main HTML page
├── styles.css   # Custom styles (supplements Tailwind)
├── app.js       # Core JavaScript logic
└── README.md    # This file
```

## Getting Started

1. Clone or download this repository.
2. Open `index.html` in your preferred browser.
3. Navigate through the navbar:
   - **Home** – Introduction and hero section.
   - **Sell Produce** – Form for farmers to list their products.
   - **Marketplace** – Browse products added by farmers.

No additional build steps or dependencies are necessary.

## Customization

Feel free to extend the project:

- Replace the placeholder image URL in `app.js` with your own default.
- Add real backend API endpoints instead of `localStorage` for persistence.
- Implement order placement and payment integration.

## License

MIT