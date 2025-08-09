// KrishiSathi JavaScript

// Utility to get current products from localStorage
function getProducts() {
  return JSON.parse(localStorage.getItem('krishi_products') || '[]');
}

function saveProducts(products) {
  localStorage.setItem('krishi_products', JSON.stringify(products));
}

// Navigation handling
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const target = link.getAttribute('data-target');
    switchSection(target);
  });
});

function switchSection(targetId) {
  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('hidden');
    sec.classList.remove('active');
  });
  const section = document.getElementById(targetId);
  if (section) {
    section.classList.remove('hidden');
    section.classList.add('active');
  }
}

// Product form submit handler
const productForm = document.getElementById('productForm');
if (productForm) {
  productForm.addEventListener('submit', e => {
    e.preventDefault();
    const product = {
      id: Date.now(),
      name: document.getElementById('productName').value.trim(),
      description: document.getElementById('productDesc').value.trim(),
      price: parseFloat(document.getElementById('productPrice').value),
      quantity: parseInt(document.getElementById('productQty').value),
      image: document.getElementById('productImg').value.trim() || 'https://via.placeholder.com/400x250?text=No+Image',
    };

    const products = getProducts();
    products.push(product);
    saveProducts(products);

    productForm.reset();
    alert('Product added successfully!');
    renderProducts();
    switchSection('market');
  });
}

// Render products to marketplace
function renderProducts() {
  const productList = document.getElementById('productList');
  if (!productList) return;
  const products = getProducts();
  productList.innerHTML = '';

  if (products.length === 0) {
    productList.innerHTML = '<p class="text-gray-600">No products available yet.</p>';
    return;
  }

  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col';

    const img = document.createElement('img');
    img.src = prod.image;
    img.alt = prod.name;
    img.className = 'h-48 w-full object-cover';
    card.appendChild(img);

    const cardBody = document.createElement('div');
    cardBody.className = 'p-4 flex-1 flex flex-col';

    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold text-green-700 mb-2';
    title.textContent = prod.name;
    cardBody.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'text-sm text-gray-600 flex-1';
    desc.textContent = prod.description;
    cardBody.appendChild(desc);

    const price = document.createElement('p');
    price.className = 'text-base font-medium text-gray-800 mt-4';
    price.textContent = `₹${prod.price.toFixed(2)} / unit`;
    cardBody.appendChild(price);

    const qty = document.createElement('p');
    qty.className = 'text-sm text-gray-500';
    qty.textContent = `Available: ${prod.quantity}`;
    cardBody.appendChild(qty);

    card.appendChild(cardBody);
    productList.appendChild(card);
  });
}

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Initial render
renderProducts();