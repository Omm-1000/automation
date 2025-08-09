// Sample data for products
const products = [
    {
        id: 1,
        name: "Organic Tomatoes",
        farmer: "Rajesh Kumar",
        price: "₹40/kg",
        category: "vegetables",
        description: "Fresh organic tomatoes grown without pesticides",
        icon: "🍅"
    },
    {
        id: 2,
        name: "Fresh Mangoes",
        farmer: "Priya Sharma",
        price: "₹80/kg",
        category: "fruits",
        description: "Sweet and juicy mangoes from Kerala",
        icon: "🥭"
    },
    {
        id: 3,
        name: "Basmati Rice",
        farmer: "Rajesh Kumar",
        price: "₹120/kg",
        category: "grains",
        description: "Premium quality basmati rice",
        icon: "🌾"
    },
    {
        id: 4,
        name: "Fresh Milk",
        farmer: "Arjun Patel",
        price: "₹60/liter",
        category: "dairy",
        description: "Pure and fresh cow milk",
        icon: "🥛"
    },
    {
        id: 5,
        name: "Green Spinach",
        farmer: "Rajesh Kumar",
        price: "₹30/bunch",
        category: "vegetables",
        description: "Fresh green spinach leaves",
        icon: "🥬"
    },
    {
        id: 6,
        name: "Bananas",
        farmer: "Priya Sharma",
        price: "₹50/dozen",
        category: "fruits",
        description: "Ripe and sweet bananas",
        icon: "🍌"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProductFilters();
    displayProducts();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Highlight active nav item on scroll
    window.addEventListener('scroll', highlightActiveNavItem);
}

// Highlight active navigation item based on scroll position
function highlightActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Product filtering functionality
function initializeProductFilters() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter products
            const category = this.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

// Filter products by category
function filterProducts(category) {
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Display products on the page
function displayProducts(productsToShow = products.slice(0, 6)) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Add fade-in animation to new products
    const newCards = productsGrid.querySelectorAll('.product-card');
    newCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, index * 100);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <span style="font-size: 4rem;">${product.icon}</span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-farmer">
                <i class="fas fa-user"></i> ${product.farmer}
            </p>
            <p class="product-price">${product.price}</p>
            <p class="product-description">${product.description}</p>
            <button class="btn btn-primary" onclick="contactFarmer('${product.farmer}', '${product.name}')">
                <i class="fas fa-phone"></i> Contact Farmer
            </button>
        </div>
    `;
    
    return card;
}

// Contact farmer functionality
function contactFarmer(farmerName, productName) {
    const message = `Hi ${farmerName}, I'm interested in your ${productName}. Could you please provide more details?`;
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    
    // Create a modal or redirect to WhatsApp
    if (confirm(`Contact ${farmerName} about ${productName}?\n\nThis will open WhatsApp.`)) {
        window.open(whatsappUrl, '_blank');
    }
}

// Scroll effects for navbar
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .farmer-card, .product-card');
    animatedElements.forEach(el => observer.observe(el));
    
    // Counter animation for stats
    animateCounters();
}

// Animate counter numbers
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (target >= 1000) {
                counter.textContent = Math.floor(current / 1000) + 'K+';
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 20);
    };
    
    // Use Intersection Observer to trigger animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    animateCounter(counter);
                });
                statsObserver.disconnect(); // Run only once
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form validation utility
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#f44336';
            
            // Remove error styling on input
            input.addEventListener('input', function() {
                this.style.borderColor = '#E0E0E0';
            });
        }
    });
    
    return isValid;
}

// Show notification utility
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${type === 'success' ? 'var(--secondary-green)' : '#f44336'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-md);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Slide in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality (for future implementation)
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.farmer.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm)
            );
            displayProducts(filteredProducts);
        });
    }
}

// Export functions for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        filterProducts,
        displayProducts,
        contactFarmer,
        validateForm,
        showNotification
    };
}