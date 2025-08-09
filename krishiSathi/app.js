const STORAGE_KEYS = {
  products: 'ks_products_v1',
  cart: 'ks_cart_v1',
};

const state = {
  products: [],
  cart: [],
  route: window.location.hash || '#/'
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function loadState() {
  try {
    state.products = JSON.parse(localStorage.getItem(STORAGE_KEYS.products)) || getSeedProducts();
  } catch { state.products = getSeedProducts(); }
  try {
    state.cart = JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
  } catch { state.cart = []; }
}

function persistState() {
  localStorage.setItem(STORAGE_KEYS.products, JSON.stringify(state.products));
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(state.cart));
}

function getSeedProducts() {
  return [
    {
      id: crypto.randomUUID(),
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      price: 80,
      quantity: 30,
      location: 'Nashik, MH',
      description: 'Freshly harvested, pesticide-free.',
      imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
      sellerName: 'Rakesh Patil',
      sellerPhone: '9876543210',
      createdAt: Date.now() - 1000 * 60 * 60 * 12
    },
    {
      id: crypto.randomUUID(),
      name: 'Alphonso Mangoes',
      category: 'Fruits',
      price: 250,
      quantity: 15,
      location: 'Ratnagiri, MH',
      description: 'Aroma-rich, naturally ripened.',
      imageUrl: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop',
      sellerName: 'Aarti Desai',
      sellerPhone: '9988776655',
      createdAt: Date.now() - 1000 * 60 * 60 * 36
    },
    {
      id: crypto.randomUUID(),
      name: 'Cow Milk',
      category: 'Dairy',
      price: 60,
      quantity: 40,
      location: 'Pune, MH',
      description: 'Fresh morning milk from grass-fed cows.',
      imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop',
      sellerName: 'Mahesh More',
      sellerPhone: '9123456780',
      createdAt: Date.now() - 1000 * 60 * 60 * 4
    }
  ];
}

function navigate(hash) {
  window.location.hash = hash;
}

function setupRouting() {
  function applyRoute() {
    state.route = window.location.hash || '#/'
    const route = state.route.replace('#', '');
    $$('.section').forEach(s => s.classList.remove('active'));
    if (route.startsWith('/market')) $('#section-market').classList.add('active');
    else if (route.startsWith('/farmers')) $('#section-farmers').classList.add('active');
    else if (route.startsWith('/cart')) $('#section-cart').classList.add('active');
    else $('#section-home').classList.add('active');
    renderAll();
  }
  window.addEventListener('hashchange', applyRoute);
  applyRoute();
}

function formatCurrency(n) {
  return `₹${Number(n).toLocaleString('en-IN')}`;
}

function updateCartCount() {
  const count = state.cart.reduce((acc, it) => acc + it.qty, 0);
  $('#cartCount').textContent = count;
}

function addToCart(productId) {
  const product = state.products.find(p => p.id === productId);
  if (!product || product.quantity <= 0) return;
  const existing = state.cart.find(it => it.id === productId);
  if (existing) {
    if (existing.qty < product.quantity) existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, name: product.name, price: product.price, imageUrl: product.imageUrl, sellerName: product.sellerName, sellerPhone: product.sellerPhone, qty: 1 });
  }
  persistState();
  updateCartCount();
  renderCart();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(it => it.id !== productId);
  persistState();
  updateCartCount();
  renderCart();
}

function changeCartQty(productId, delta) {
  const item = state.cart.find(it => it.id === productId);
  const product = state.products.find(p => p.id === productId);
  if (!item || !product) return;
  item.qty = Math.max(1, Math.min(item.qty + delta, product.quantity));
  persistState();
  updateCartCount();
  renderCart();
}

function clearCart() {
  state.cart = [];
  persistState();
  updateCartCount();
  renderCart();
}

function openProductModal(existing = null) {
  $('#productModal').classList.remove('hidden');
  const form = $('#productForm');
  form.reset();
  form.id.value = existing ? existing.id : '';
  $('#deleteProductBtn').classList.toggle('hidden', !existing);
  $('#productModalTitle').textContent = existing ? 'Edit Product' : 'Add Product';
  if (existing) {
    form.name.value = existing.name;
    form.category.value = existing.category;
    form.price.value = existing.price;
    form.quantity.value = existing.quantity;
    form.location.value = existing.location;
    form.description.value = existing.description || '';
    form.sellerName.value = existing.sellerName || '';
    form.sellerPhone.value = existing.sellerPhone || '';
  }
}

function closeProductModal() {
  $('#productModal').classList.add('hidden');
}

function handleImageUpload(file) {
  return new Promise((resolve) => {
    if (!file) return resolve(null);
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function onSubmitProductForm(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const data = new FormData(form);
  const id = data.get('id');
  const productPayload = {
    id: id || crypto.randomUUID(),
    name: data.get('name').toString().trim(),
    category: data.get('category').toString(),
    price: Number(data.get('price')),
    quantity: Number(data.get('quantity')),
    location: data.get('location').toString().trim(),
    description: (data.get('description') || '').toString().trim(),
    imageUrl: undefined,
    sellerName: data.get('sellerName').toString().trim(),
    sellerPhone: data.get('sellerPhone').toString().trim(),
    createdAt: id ? (state.products.find(p => p.id === id)?.createdAt || Date.now()) : Date.now()
  };

  const imageFile = form.image.files?.[0];

  handleImageUpload(imageFile).then((base64) => {
    if (base64) productPayload.imageUrl = base64;
    if (!productPayload.imageUrl) {
      if (id) productPayload.imageUrl = state.products.find(p => p.id === id)?.imageUrl;
      else productPayload.imageUrl = `https://picsum.photos/seed/${encodeURIComponent(productPayload.name)}-farm/800/600`;
    }

    if (id) {
      state.products = state.products.map(p => p.id === id ? { ...p, ...productPayload } : p);
    } else {
      state.products.unshift(productPayload);
    }

    persistState();
    closeProductModal();
    renderAll();
    navigate('#/farmers');
  });
}

function deleteCurrentProduct() {
  const id = $('#productForm').id.value;
  if (!id) return;
  state.products = state.products.filter(p => p.id !== id);
  state.cart = state.cart.filter(it => it.id !== id);
  persistState();
  closeProductModal();
  renderAll();
}

function renderProductsGrid() {
  const grid = $('#productsGrid');
  const term = $('#searchInput').value.toLowerCase();
  const category = $('#categoryFilter').value;
  const sort = $('#sortSelect').value;

  let items = [...state.products];
  if (category !== 'all') items = items.filter(p => p.category === category);
  if (term) items = items.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.location.toLowerCase().includes(term));
  if (sort === 'price_low') items.sort((a,b) => a.price - b.price);
  else if (sort === 'price_high') items.sort((a,b) => b.price - a.price);
  else items.sort((a,b) => b.createdAt - a.createdAt);

  if (!items.length) {
    grid.innerHTML = `<div class="empty-card" style="grid-column: 1/-1"><h3>No products found</h3><p class="subtle">Try adjusting filters</p></div>`;
    return;
  }

  grid.innerHTML = items.map(p => `
    <article class="card shadow-md">
      <img src="${p.imageUrl}" alt="${p.name}">
      <div class="card-body">
        <div class="card-title">
          <h3>${p.name}</h3>
          <div class="price">${formatCurrency(p.price)}</div>
        </div>
        <div class="card-meta">
          <span>${p.category}</span>
          <span>•</span>
          <span>${p.location}</span>
        </div>
        <p class="subtle">${p.description || ''}</p>
        <div class="card-actions">
          <button class="btn btn-primary" data-action="add-to-cart" data-id="${p.id}">Add to cart</button>
          <button class="btn btn-ghost" data-action="contact" data-id="${p.id}">Contact</button>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('button[data-action="add-to-cart"]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.id));
  });
  grid.querySelectorAll('button[data-action="contact"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = state.products.find(x => x.id === btn.dataset.id);
      if (!p) return;
      alert(`Contact ${p.sellerName}: ${p.sellerPhone}`);
    });
  });
}

function renderFarmerDashboard() {
  const mine = [...state.products];
  const totalProducts = mine.length;
  const totalStock = mine.reduce((acc, p) => acc + p.quantity, 0);
  const avgPrice = mine.length ? Math.round(mine.reduce((acc, p) => acc + p.price, 0) / mine.length) : 0;

  $('#farmerStats').innerHTML = `
    <div class="stat"><div class="label">Listings</div><div class="value">${totalProducts}</div></div>
    <div class="stat"><div class="label">Total Stock</div><div class="value">${totalStock}</div></div>
    <div class="stat"><div class="label">Avg. Price</div><div class="value">${formatCurrency(avgPrice)}</div></div>
  `;

  const wrapper = $('#farmerProducts');
  if (!mine.length) {
    $('#farmerEmpty').style.display = 'block';
    wrapper.innerHTML = '';
    return;
  }
  $('#farmerEmpty').style.display = 'none';
  wrapper.innerHTML = mine.map(p => `
    <article class="card">
      <img src="${p.imageUrl}" alt="${p.name}">
      <div class="card-body">
        <div class="card-title">
          <h3>${p.name}</h3>
          <div class="price">${formatCurrency(p.price)}</div>
        </div>
        <div class="card-meta">
          <span>${p.category}</span><span>•</span><span>${p.location}</span>
        </div>
        <div class="card-actions">
          <button class="btn" data-action="edit" data-id="${p.id}">Edit</button>
          <button class="btn btn-danger" data-action="delete" data-id="${p.id}">Delete</button>
        </div>
      </div>
    </article>
  `).join('');

  wrapper.querySelectorAll('button[data-action="edit"]').forEach(btn => btn.addEventListener('click', () => {
    const p = state.products.find(x => x.id === btn.dataset.id);
    if (p) openProductModal(p);
  }));
  wrapper.querySelectorAll('button[data-action="delete"]').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    state.products = state.products.filter(p => p.id !== id);
    state.cart = state.cart.filter(it => it.id !== id);
    persistState();
    renderAll();
  }));
}

function renderCart() {
  const container = $('#cartItems');
  const empty = $('#cartEmpty');
  const summary = $('#cartSummary');

  if (!state.cart.length) {
    container.innerHTML = '';
    empty.style.display = 'block';
    summary.classList.add('hidden');
    return;
  }

  empty.style.display = 'none';
  summary.classList.remove('hidden');

  const rows = state.cart.map(it => {
    const p = state.products.find(x => x.id === it.id);
    const maxQty = p ? p.quantity : it.qty;
    return `
      <div class="list-item">
        <img src="${it.imageUrl}" alt="${it.name}">
        <div>
          <div class="title">${it.name}</div>
          <div class="subtle">Seller: ${it.sellerName} • ${formatCurrency(it.price)} each</div>
          <div class="subtle">Phone: ${it.sellerPhone}</div>
        </div>
        <div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button class="icon-btn" data-action="dec" data-id="${it.id}">-</button>
            <span>${it.qty}</span>
            <button class="icon-btn" data-action="inc" data-id="${it.id}">+</button>
          </div>
          <div style="text-align:right; margin-top:6px;">${formatCurrency(it.qty * it.price)}</div>
          <button class="btn btn-ghost" data-action="remove" data-id="${it.id}" style="margin-top:6px;">Remove</button>
          <div class="subtle" style="font-size:11px; text-align:right">Max ${maxQty}</div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = rows;

  container.querySelectorAll('[data-action="dec"]').forEach(btn => btn.addEventListener('click', () => changeCartQty(btn.dataset.id, -1)));
  container.querySelectorAll('[data-action="inc"]').forEach(btn => btn.addEventListener('click', () => changeCartQty(btn.dataset.id, +1)));
  container.querySelectorAll('[data-action="remove"]').forEach(btn => btn.addEventListener('click', () => removeFromCart(btn.dataset.id)));

  const subtotal = state.cart.reduce((acc, it) => acc + it.qty * it.price, 0);
  $('#subtotal').textContent = formatCurrency(subtotal);
  $('#total').textContent = formatCurrency(subtotal);
}

function wireEvents() {
  $('#addProductBtn').addEventListener('click', () => openProductModal());
  $('#addProductBtn2').addEventListener('click', () => openProductModal());
  $('#closeModalBtn').addEventListener('click', closeProductModal);
  $('#productForm').addEventListener('submit', onSubmitProductForm);
  $('#deleteProductBtn').addEventListener('click', deleteCurrentProduct);

  $('#searchInput').addEventListener('input', renderProductsGrid);
  $('#categoryFilter').addEventListener('change', renderProductsGrid);
  $('#sortSelect').addEventListener('change', renderProductsGrid);

  $('#clearCartBtn').addEventListener('click', clearCart);
  $('#checkoutBtn').addEventListener('click', () => {
    const phoneList = Array.from(new Set(state.cart.map(it => `${it.sellerName} (${it.sellerPhone})`))).join(', ');
    alert(`Order request sent to: ${phoneList}. They will contact you shortly.`);
    clearCart();
  });
}

function renderAll() {
  updateCartCount();
  renderProductsGrid();
  renderFarmerDashboard();
  renderCart();
}

function init() {
  loadState();
  setupRouting();
  wireEvents();
  $('#year').textContent = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', init);