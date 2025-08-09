# KrishiSathi 🌾

**Direct Farm to Table Marketplace**

KrishiSathi is a modern web platform that connects farmers directly with customers, eliminating middlemen and ensuring fair prices for both parties. Built with modern web technologies and featuring a beautiful, responsive design optimized for the agricultural community.

## 🌟 Features

### For Customers
- **Product Browsing**: Browse fresh produce from local farmers
- **Advanced Search & Filters**: Find products by category, location, price, and organic certification
- **Direct Communication**: Contact farmers directly via WhatsApp
- **Farmer Profiles**: Learn about farmers and their farming practices
- **Product Reviews**: Read ratings and reviews from other customers
- **Newsletter Subscription**: Stay updated with fresh arrivals

### For Farmers
- **Easy Registration**: Comprehensive registration process with farm details
- **Product Listing**: Showcase your products with descriptions and pricing
- **Direct Customer Contact**: Receive inquiries directly from customers
- **Profile Management**: Build your farmer profile and reputation
- **Progress Tracking**: Monitor registration progress in real-time

### Technical Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, agriculture-themed design with smooth animations
- **Search & Filter**: Real-time search with multiple filter options
- **Pagination**: Efficient browsing of large product catalogs
- **Form Validation**: Comprehensive client-side validation
- **Progressive Enhancement**: Works without JavaScript (basic functionality)
- **Accessibility**: WCAG-compliant design with proper focus management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher) - for development server
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd krishisathi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Or alternatively:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Alternative Setup (No Node.js)
If you don't have Node.js installed, you can serve the files using any static file server:

- **Python 3**: `python -m http.server 3000`
- **Python 2**: `python -m SimpleHTTPServer 3000`
- **PHP**: `php -S localhost:3000`
- Or simply open `index.html` in your browser

## 📁 Project Structure

```
krishisathi/
├── index.html              # Main landing page
├── farmer-register.html    # Farmer registration page
├── products.html          # Products browsing page
├── package.json           # Project dependencies
├── README.md             # This file
├── styles/
│   └── main.css          # Main stylesheet
└── scripts/
    ├── main.js           # Main JavaScript functionality
    ├── farmer-registration.js  # Farmer registration logic
    └── products.js       # Products page functionality
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #2E7D32 (Agriculture/nature theme)
- **Secondary Green**: #4CAF50 (Accent and highlights)
- **Accent Orange**: #FF8F00 (CTAs and important elements)
- **Cream**: #FFF8E1 (Warm backgrounds)
- **Light Gray**: #F5F5F5 (Section backgrounds)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Responsive sizing**: Scales appropriately across devices
- **Hierarchy**: Clear heading structure for accessibility

### Components
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Comprehensive form components with validation
- **Cards**: Product cards, farmer cards with hover effects
- **Navigation**: Responsive navbar with mobile hamburger menu

## 🛠️ Customization

### Adding New Products
Edit the `allProducts` array in `scripts/products.js`:

```javascript
{
    id: 21,
    name: "Your Product Name",
    farmer: "Farmer Name",
    location: "State",
    price: "₹XX/unit",
    priceValue: XX,
    category: "category", // vegetables, fruits, grains, dairy, spices, pulses
    description: "Product description",
    icon: "🥕", // Emoji or can be replaced with images
    organic: true/false,
    inStock: true/false,
    rating: 4.5,
    reviews: 30
}
```

### Styling Modifications
- **Colors**: Update CSS variables in `:root` section of `styles/main.css`
- **Spacing**: Modify spacing variables for consistent layout changes
- **Fonts**: Change font imports in HTML head and update CSS font-family

### Adding New Pages
1. Create new HTML file following the existing structure
2. Include the navigation component
3. Link to `styles/main.css` and `scripts/main.js`
4. Add any page-specific JavaScript

## 📱 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile browsers**: iOS Safari, Chrome Mobile

## 🔧 Development

### Scripts
- `npm start` - Start development server
- `npm run dev` - Alternative development command

### Local Storage
The application uses localStorage for demo purposes:
- Farmer registration data
- User preferences
- Form progress

### API Integration
Currently uses mock data and localStorage. To integrate with a real backend:

1. Replace localStorage calls in `farmer-registration.js`
2. Update product data source in `products.js`
3. Implement real WhatsApp API integration
4. Add authentication system

## 🌐 Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI

### Traditional Hosting
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. No server-side processing required

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact & Support

- **Email**: info@krishisathi.com
- **Phone**: +91 9876543210
- **Website**: [KrishiSathi Platform]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome**: For beautiful icons
- **Google Fonts**: For the Inter font family
- **Farmers**: For inspiring this platform to bridge the gap between producers and consumers

---

**Made with 💚 for farmers and customers across India**

*KrishiSathi - Connecting farms to tables, one product at a time.*