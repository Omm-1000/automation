// Extended products data for the products page
const allProducts = [
    // Vegetables
    {
        id: 1,
        name: "Organic Tomatoes",
        farmer: "Rajesh Kumar",
        location: "Punjab",
        price: "₹40/kg",
        priceValue: 40,
        category: "vegetables",
        description: "Fresh organic tomatoes grown without pesticides",
        icon: "🍅",
        organic: true,
        inStock: true,
        rating: 4.8,
        reviews: 45
    },
    {
        id: 5,
        name: "Green Spinach",
        farmer: "Rajesh Kumar",
        location: "Punjab",
        price: "₹30/bunch",
        priceValue: 30,
        category: "vegetables",
        description: "Fresh green spinach leaves",
        icon: "🥬",
        organic: true,
        inStock: true,
        rating: 4.6,
        reviews: 32
    },
    {
        id: 7,
        name: "Fresh Carrots",
        farmer: "Meera Devi",
        location: "Uttar Pradesh",
        price: "₹35/kg",
        priceValue: 35,
        category: "vegetables",
        description: "Sweet and crunchy carrots",
        icon: "🥕",
        organic: false,
        inStock: true,
        rating: 4.4,
        reviews: 28
    },
    {
        id: 8,
        name: "Organic Onions",
        farmer: "Suresh Patel",
        location: "Gujarat",
        price: "₹25/kg",
        priceValue: 25,
        category: "vegetables",
        description: "Fresh organic onions",
        icon: "🧅",
        organic: true,
        inStock: true,
        rating: 4.5,
        reviews: 67
    },
    {
        id: 9,
        name: "Fresh Cauliflower",
        farmer: "Rajesh Kumar",
        location: "Punjab",
        price: "₹45/piece",
        priceValue: 45,
        category: "vegetables",
        description: "Fresh white cauliflower",
        icon: "🥦",
        organic: true,
        inStock: true,
        rating: 4.7,
        reviews: 23
    },
    
    // Fruits
    {
        id: 2,
        name: "Fresh Mangoes",
        farmer: "Priya Sharma",
        location: "Kerala",
        price: "₹80/kg",
        priceValue: 80,
        category: "fruits",
        description: "Sweet and juicy mangoes from Kerala",
        icon: "🥭",
        organic: true,
        inStock: true,
        rating: 4.9,
        reviews: 78
    },
    {
        id: 6,
        name: "Bananas",
        farmer: "Priya Sharma",
        location: "Kerala",
        price: "₹50/dozen",
        priceValue: 50,
        category: "fruits",
        description: "Ripe and sweet bananas",
        icon: "🍌",
        organic: false,
        inStock: true,
        rating: 4.3,
        reviews: 56
    },
    {
        id: 10,
        name: "Fresh Apples",
        farmer: "Rakesh Singh",
        location: "Uttar Pradesh",
        price: "₹120/kg",
        priceValue: 120,
        category: "fruits",
        description: "Crisp and sweet apples",
        icon: "🍎",
        organic: false,
        inStock: true,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 11,
        name: "Organic Oranges",
        farmer: "Lakshmi Menon",
        location: "Tamil Nadu",
        price: "₹60/kg",
        priceValue: 60,
        category: "fruits",
        description: "Juicy organic oranges",
        icon: "🍊",
        organic: true,
        inStock: true,
        rating: 4.7,
        reviews: 42
    },
    {
        id: 12,
        name: "Fresh Grapes",
        farmer: "Vikram Reddy",
        location: "Maharashtra",
        price: "₹90/kg",
        priceValue: 90,
        category: "fruits",
        description: "Sweet table grapes",
        icon: "🍇",
        organic: false,
        inStock: true,
        rating: 4.5,
        reviews: 34
    },
    
    // Grains
    {
        id: 3,
        name: "Basmati Rice",
        farmer: "Rajesh Kumar",
        location: "Punjab",
        price: "₹120/kg",
        priceValue: 120,
        category: "grains",
        description: "Premium quality basmati rice",
        icon: "🌾",
        organic: true,
        inStock: true,
        rating: 4.8,
        reviews: 156
    },
    {
        id: 13,
        name: "Wheat Flour",
        farmer: "Harinder Singh",
        location: "Punjab",
        price: "₹35/kg",
        priceValue: 35,
        category: "grains",
        description: "Fresh ground wheat flour",
        icon: "🌾",
        organic: false,
        inStock: true,
        rating: 4.4,
        reviews: 98
    },
    {
        id: 14,
        name: "Organic Quinoa",
        farmer: "Sunita Devi",
        location: "Uttar Pradesh",
        price: "₹250/kg",
        priceValue: 250,
        category: "grains",
        description: "Nutritious organic quinoa",
        icon: "🌾",
        organic: true,
        inStock: true,
        rating: 4.9,
        reviews: 23
    },
    
    // Dairy
    {
        id: 4,
        name: "Fresh Milk",
        farmer: "Arjun Patel",
        location: "Gujarat",
        price: "₹60/liter",
        priceValue: 60,
        category: "dairy",
        description: "Pure and fresh cow milk",
        icon: "🥛",
        organic: false,
        inStock: true,
        rating: 4.7,
        reviews: 124
    },
    {
        id: 15,
        name: "Farm Fresh Paneer",
        farmer: "Arjun Patel",
        location: "Gujarat",
        price: "₹180/kg",
        priceValue: 180,
        category: "dairy",
        description: "Fresh homemade paneer",
        icon: "🧀",
        organic: false,
        inStock: true,
        rating: 4.8,
        reviews: 67
    },
    {
        id: 16,
        name: "Fresh Yogurt",
        farmer: "Gita Sharma",
        location: "Punjab",
        price: "₹80/kg",
        priceValue: 80,
        category: "dairy",
        description: "Creamy fresh yogurt",
        icon: "🥛",
        organic: true,
        inStock: true,
        rating: 4.6,
        reviews: 45
    },
    
    // Spices
    {
        id: 17,
        name: "Organic Turmeric",
        farmer: "Priya Sharma",
        location: "Kerala",
        price: "₹150/kg",
        priceValue: 150,
        category: "spices",
        description: "Pure organic turmeric powder",
        icon: "🌿",
        organic: true,
        inStock: true,
        rating: 4.9,
        reviews: 78
    },
    {
        id: 18,
        name: "Red Chili Powder",
        farmer: "Ramesh Kumar",
        location: "Rajasthan",
        price: "₹120/kg",
        priceValue: 120,
        category: "spices",
        description: "Spicy red chili powder",
        icon: "🌶️",
        organic: false,
        inStock: true,
        rating: 4.5,
        reviews: 34
    },
    
    // Pulses
    {
        id: 19,
        name: "Organic Lentils",
        farmer: "Mohan Lal",
        location: "Rajasthan",
        price: "₹95/kg",
        priceValue: 95,
        category: "pulses",
        description: "High quality organic lentils",
        icon: "🫘",
        organic: true,
        inStock: true,
        rating: 4.7,
        reviews: 56
    },
    {
        id: 20,
        name: "Black Beans",
        farmer: "Savita Devi",
        location: "Maharashtra",
        price: "₹110/kg",
        priceValue: 110,
        category: "pulses",
        description: "Nutritious black beans",
        icon: "🫘",
        organic: false,
        inStock: true,
        rating: 4.4,
        reviews: 29
    }
];

// Global variables for filtering and pagination
let filteredProducts = [...allProducts];
let currentPage = 1;
const productsPerPage = 12;

// Initialize products page
document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
});

function initializeProductsPage() {
    initializeSearch();
    initializeFilters();
    initializeSorting();
    initializeNewsletter();
    
    // Display all products initially
    displayFilteredProducts();
    updateResultsCount();
    createPagination();
}

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                applyFilters();
            }, 300); // Debounce search
        });
    }
}

function initializeFilters() {
    const filterElements = [
        'category-filter',
        'location-filter', 
        'price-filter',
        'organic-filter'
    ];
    
    filterElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', applyFilters);
        }
    });
    
    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function initializeSorting() {
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', applyFilters);
    }
}

function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            
            if (email) {
                showNotification('Thank you for subscribing! You\'ll receive updates about fresh arrivals.', 'success');
                this.reset();
            }
        });
    }
}

function applyFilters() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value || '';
    const locationFilter = document.getElementById('location-filter')?.value || '';
    const priceFilter = document.getElementById('price-filter')?.value || '';
    const organicFilter = document.getElementById('organic-filter')?.value || '';
    const sortBy = document.getElementById('sort-select')?.value || 'name';
    
    // Filter products
    filteredProducts = allProducts.filter(product => {
        // Search filter
        const matchesSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm) ||
            product.farmer.toLowerCase().includes(searchTerm) ||
            product.location.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        
        // Category filter
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        
        // Location filter  
        const matchesLocation = !locationFilter || 
            product.location.toLowerCase().replace(/\s+/g, '-') === locationFilter;
        
        // Price filter
        const matchesPrice = !priceFilter || checkPriceRange(product.priceValue, priceFilter);
        
        // Organic filter
        const matchesOrganic = !organicFilter || 
            (organicFilter === 'organic' && product.organic) ||
            (organicFilter === 'conventional' && !product.organic);
        
        return matchesSearch && matchesCategory && matchesLocation && matchesPrice && matchesOrganic;
    });
    
    // Sort products
    sortProducts(filteredProducts, sortBy);
    
    // Reset to first page
    currentPage = 1;
    
    // Update display
    displayFilteredProducts();
    updateResultsCount();
    createPagination();
}

function checkPriceRange(price, range) {
    switch(range) {
        case '0-50':
            return price <= 50;
        case '50-100':
            return price > 50 && price <= 100;
        case '100-200':
            return price > 100 && price <= 200;
        case '200+':
            return price > 200;
        default:
            return true;
    }
}

function sortProducts(products, sortBy) {
    products.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-low':
                return a.priceValue - b.priceValue;
            case 'price-high':
                return b.priceValue - a.priceValue;
            case 'farmer':
                return a.farmer.localeCompare(b.farmer);
            case 'location':
                return a.location.localeCompare(b.location);
            default:
                return 0;
        }
    });
}

function displayFilteredProducts() {
    const productsGrid = document.getElementById('all-products-grid');
    const noResults = document.getElementById('no-results');
    
    if (!productsGrid) return;
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        noResults.style.display = 'block';
        productsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        productsGrid.style.display = 'grid';
        
        productsToShow.forEach((product, index) => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
            
            // Add staggered animation
            setTimeout(() => {
                productCard.classList.add('fade-in-up');
            }, index * 100);
        });
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const organicBadge = product.organic ? '<span class="organic-badge">Organic</span>' : '';
    const stockStatus = product.inStock ? 'In Stock' : 'Out of Stock';
    const stockClass = product.inStock ? 'in-stock' : 'out-of-stock';
    
    card.innerHTML = `
        <div class="product-image">
            <span style="font-size: 4rem;">${product.icon}</span>
            ${organicBadge}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-farmer">
                <i class="fas fa-user"></i> ${product.farmer}
            </p>
            <p class="product-location">
                <i class="fas fa-map-marker-alt"></i> ${product.location}
            </p>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
            <div class="product-actions">
                <span class="stock-status ${stockClass}">${stockStatus}</span>
                <button class="btn btn-primary" onclick="contactFarmer('${product.farmer}', '${product.name}')" ${!product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-phone"></i> Contact Farmer
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function updateResultsCount() {
    const resultsCount = document.getElementById('results-count');
    if (resultsCount) {
        const total = filteredProducts.length;
        const startIndex = (currentPage - 1) * productsPerPage + 1;
        const endIndex = Math.min(currentPage * productsPerPage, total);
        
        if (total === 0) {
            resultsCount.textContent = 'No products found';
        } else if (total <= productsPerPage) {
            resultsCount.textContent = `Showing all ${total} products`;
        } else {
            resultsCount.textContent = `Showing ${startIndex}-${endIndex} of ${total} products`;
        }
    }
}

function createPagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    const prevDisabled = currentPage === 1 ? 'disabled' : '';
    paginationHTML += `<button onclick="changePage(${currentPage - 1})" ${prevDisabled}>
        <i class="fas fa-chevron-left"></i>
    </button>`;
    
    // Page numbers
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);
    
    if (startPage > 1) {
        paginationHTML += `<button onclick="changePage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span>...</span>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const activeClass = i === currentPage ? 'active' : '';
        paginationHTML += `<button onclick="changePage(${i})" class="${activeClass}">${i}</button>`;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span>...</span>`;
        }
        paginationHTML += `<button onclick="changePage(${totalPages})">${totalPages}</button>`;
    }
    
    // Next button
    const nextDisabled = currentPage === totalPages ? 'disabled' : '';
    paginationHTML += `<button onclick="changePage(${currentPage + 1})" ${nextDisabled}>
        <i class="fas fa-chevron-right"></i>
    </button>`;
    
    paginationContainer.innerHTML = paginationHTML;
}

function changePage(page) {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    
    if (page < 1 || page > totalPages) return;
    
    currentPage = page;
    displayFilteredProducts();
    updateResultsCount();
    createPagination();
    
    // Scroll to top of products section
    document.querySelector('.products-listing').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

function clearAllFilters() {
    // Clear all filter inputs
    document.getElementById('search-input').value = '';
    document.getElementById('category-filter').value = '';
    document.getElementById('location-filter').value = '';
    document.getElementById('price-filter').value = '';
    document.getElementById('organic-filter').value = '';
    document.getElementById('sort-select').value = 'name';
    
    // Apply filters (which will show all products)
    applyFilters();
}

// Add CSS for additional product card elements
function addProductCardStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .organic-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: var(--secondary-green);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius-sm);
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .product-image {
            position: relative;
        }
        
        .product-location {
            color: var(--dark-gray);
            opacity: 0.7;
            margin-bottom: var(--spacing-sm);
            font-size: var(--small-size);
        }
        
        .product-rating {
            display: flex;
            align-items: center;
            gap: var(--spacing-xs);
            margin-bottom: var(--spacing-sm);
        }
        
        .stars {
            color: var(--accent-orange);
        }
        
        .rating-text {
            font-size: var(--small-size);
            color: var(--dark-gray);
            opacity: 0.7;
        }
        
        .product-actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: var(--spacing-sm);
        }
        
        .stock-status {
            font-size: var(--small-size);
            font-weight: 500;
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius-sm);
        }
        
        .stock-status.in-stock {
            background: rgba(76, 175, 80, 0.1);
            color: var(--secondary-green);
        }
        
        .stock-status.out-of-stock {
            background: rgba(244, 67, 54, 0.1);
            color: #f44336;
        }
        
        .product-card .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
            .search-filter-container {
                gap: var(--spacing-md);
            }
            
            .filter-section {
                flex-direction: column;
                align-items: stretch;
            }
            
            .filter-group {
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
            }
            
            .filter-select {
                min-width: 150px;
                flex: 1;
                margin-left: var(--spacing-sm);
            }
            
            .newsletter-content {
                grid-template-columns: 1fr;
                gap: var(--spacing-lg);
                text-align: center;
            }
            
            .input-group {
                flex-direction: column;
            }
            
            .newsletter-input {
                margin-bottom: var(--spacing-sm);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize styles
addProductCardStyles();

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        allProducts,
        filteredProducts,
        applyFilters,
        clearAllFilters,
        changePage
    };
}