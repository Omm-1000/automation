/* KrishiSathi - simple localStorage marketplace */
(function(){
  const STORAGE_KEY = 'ks_products_v1';
  const OWNER_KEY = 'ks_owner_id';
  const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop';

  function getOwnerId(){
    let id = localStorage.getItem(OWNER_KEY);
    if(!id){
      id = 'owner_' + Math.random().toString(36).slice(2) + Date.now();
      localStorage.setItem(OWNER_KEY, id);
    }
    return id;
  }

  function loadProducts(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      if(Array.isArray(arr)) return arr;
      return [];
    } catch(e){
      console.warn('Failed to parse products', e);
      return [];
    }
  }

  function saveProducts(products){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  function addProduct(product){
    const products = loadProducts();
    products.unshift(product); // newest first
    saveProducts(products);
  }

  function deleteProduct(id){
    const products = loadProducts().filter(p => p.id !== id);
    saveProducts(products);
  }

  function formatPrice(p){
    const price = Number(p || 0);
    return `₹${price.toFixed(2)}`;
  }

  function sanitizeText(text){
    const div = document.createElement('div');
    div.textContent = text || '';
    return div.innerHTML;
  }

  function createCard(product, onClick){
    const img = product.image || DEFAULT_IMAGE;
    const card = document.createElement('button');
    card.className = 'text-left rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow';
    card.innerHTML = `
      <img src="${img}" alt="${sanitizeText(product.name)}" class="h-40 w-full object-cover">
      <div class="p-4">
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-semibold line-clamp-1">${sanitizeText(product.name)}</h3>
          <div class="text-primary-700 font-semibold">${formatPrice(product.price)}/${sanitizeText(product.unit)}</div>
        </div>
        <div class="mt-1 text-sm text-slate-600 line-clamp-2">${sanitizeText(product.description)}</div>
        <div class="mt-3 text-xs text-slate-500">${sanitizeText(product.location)} • ${sanitizeText(product.category)}</div>
      </div>
    `;
    card.addEventListener('click', function(){ onClick && onClick(product); });
    return card;
  }

  function renderFarmerListings(){
    const container = document.getElementById('farmerListings');
    if(!container) return;
    const ownerId = getOwnerId();
    const products = loadProducts().filter(p => p.ownerId === ownerId);
    container.innerHTML = '';
    if(products.length === 0){
      container.innerHTML = '<div class="col-span-full text-slate-600">No listings yet. Use the form to add your first product.</div>';
      return;
    }
    products.forEach(p => {
      const wrapper = document.createElement('div');
      wrapper.className = 'relative group';
      const card = createCard(p, null);
      const del = document.createElement('button');
      del.className = 'absolute top-2 right-2 hidden group-hover:inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/90 border border-slate-200 shadow text-slate-600 hover:text-red-600';
      del.innerHTML = '✕';
      del.title = 'Remove listing';
      del.addEventListener('click', function(ev){
        ev.stopPropagation();
        if(confirm('Delete this listing?')){
          deleteProduct(p.id);
          renderFarmerListings();
        }
      });
      wrapper.appendChild(card);
      wrapper.appendChild(del);
      container.appendChild(wrapper);
    });
  }

  function initFarmerPage(){
    const form = document.getElementById('productForm');
    if(form){
      form.addEventListener('submit', function(ev){
        ev.preventDefault();
        const product = {
          id: 'p_' + Date.now() + '_' + Math.random().toString(36).slice(2),
          ownerId: getOwnerId(),
          name: document.getElementById('name').value.trim(),
          price: Number(document.getElementById('price').value || 0),
          quantity: Number(document.getElementById('quantity').value || 0),
          unit: document.getElementById('unit').value,
          category: document.getElementById('category').value,
          location: document.getElementById('location').value.trim(),
          contact: document.getElementById('contact').value.trim(),
          image: document.getElementById('image').value.trim() || DEFAULT_IMAGE,
          description: document.getElementById('description').value.trim(),
          createdAt: Date.now()
        };
        if(!product.name || !product.price || !product.quantity || !product.location || !product.contact){
          alert('Please fill all required fields');
          return;
        }
        addProduct(product);
        form.reset();
        alert('Product posted to marketplace');
        renderFarmerListings();
      });
    }
    renderFarmerListings();
  }

  function applyMarketFilters(products){
    const cat = (document.getElementById('filterCategory') || {}).value || '';
    const maxP = Number((document.getElementById('filterMaxPrice') || {}).value || 0);
    const q = ((document.getElementById('filterSearch') || {}).value || '').toLowerCase();
    return products.filter(p => {
      if(cat && p.category !== cat) return false;
      if(maxP > 0 && Number(p.price) > maxP) return false;
      if(q && !(`${p.name} ${p.description} ${p.location}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }

  function openModal(product){
    const modal = document.getElementById('productModal');
    if(!modal) return;
    const img = document.getElementById('modalImage');
    const name = document.getElementById('modalName');
    const price = document.getElementById('modalPrice');
    const desc = document.getElementById('modalDescription');
    const meta = document.getElementById('modalMeta');
    const call = document.getElementById('modalCall');
    const wa = document.getElementById('modalWhatsapp');

    img.src = product.image || DEFAULT_IMAGE;
    img.alt = product.name;
    name.textContent = product.name;
    price.textContent = `${formatPrice(product.price)}/${product.unit} • ${product.quantity} ${product.unit} available`;
    desc.textContent = product.description || 'No description';
    meta.textContent = `${product.category} • ${product.location}`;

    // Attempt to normalize digits to build links
    const digits = (product.contact || '').replace(/\D+/g, '');
    call.href = digits ? `tel:${digits}` : '#';
    wa.href = digits ? `https://wa.me/${digits}` : '#';

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    const close = document.getElementById('modalClose');
    const overlay = modal.firstElementChild;
    function closeFn(){
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      close && close.removeEventListener('click', closeFn);
      overlay && overlay.removeEventListener('click', closeFn);
    }
    close && close.addEventListener('click', closeFn);
    overlay && overlay.addEventListener('click', closeFn);
  }

  function renderMarket(){
    const grid = document.getElementById('marketGrid');
    if(!grid) return;
    const products = applyMarketFilters(loadProducts());
    grid.innerHTML = '';
    if(products.length === 0){
      grid.innerHTML = '<div class="col-span-full text-slate-600">No products match your filters. Try adjusting them.</div>';
      return;
    }
    products.forEach(p => {
      const card = createCard(p, openModal);
      grid.appendChild(card);
    });
  }

  function initMarketPage(){
    const btn = document.getElementById('applyFilters');
    if(btn){
      btn.addEventListener('click', function(){
        renderMarket();
      });
    }
    const inputs = ['filterCategory','filterMaxPrice','filterSearch'];
    inputs.forEach(id => {
      const el = document.getElementById(id);
      if(el){ el.addEventListener('change', renderMarket); el.addEventListener('keyup', function(e){ if(e.key==='Enter'){ renderMarket(); }}); }
    });
    renderMarket();
  }

  window.KrishiSathiUI = { initFarmerPage, initMarketPage };
})();