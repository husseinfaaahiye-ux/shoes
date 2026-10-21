/**
 * FAAHIYE SHOES - Dynamic E-Commerce & Dashboard Core Engine
 * JavaScript: State Management, LocalStorage Persistence, Cart & CRUD
 */

// Initial Seed Products
const DEFAULT_PRODUCTS = [
  {
    id: "fs-001",
    name: "Nike Air Jordan 1 Retro High",
    category: "Ciyaaraha",
    price: 125,
    oldPrice: 155,
    stock: 28,
    sizes: [40, 41, 42, 43, 44],
    badge: "Best Seller",
    rating: 4.9,
    reviewsCount: 54,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
    description: "Kabo ciyaareed caan ah oo xarrago iyo raaxo isugu jira. Qalab tayo sare leh iyo midab qurxoon.",
    featured: true
  },
  {
    id: "fs-002",
    name: "Faahiye Italian Leather Loafers",
    category: "Xarrago",
    price: 89,
    oldPrice: 110,
    stock: 19,
    sizes: [39, 40, 41, 42, 43],
    badge: "Cusub",
    rating: 4.8,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80",
    description: "Kabo maqaar saafi ah oo Talyaani ah, ku habboon xafladaha, shaqada iyo xarragada maalinlaha ah.",
    featured: true
  },
  {
    id: "fs-003",
    name: "Adidas Ultraboost 22 Running",
    category: "Ciyaaraha",
    price: 115,
    oldPrice: 140,
    stock: 22,
    sizes: [40, 41, 42, 43, 44, 45],
    badge: "Qiimo Dhimis",
    rating: 4.9,
    reviewsCount: 42,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    description: "Kabo orodka iyo jimicsiga loogu talagalay oo aad u fudud kana hortagaya daalka lugaha.",
    featured: true
  },
  {
    id: "fs-004",
    name: "Oxford Classic Brown Brogues",
    category: "Ragga",
    price: 95,
    oldPrice: 120,
    stock: 14,
    sizes: [40, 41, 42, 43],
    badge: "Xulasho",
    rating: 4.7,
    reviewsCount: 28,
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80",
    description: "Kabo rasmi ah oo ragga loogu talagalay, tolid heer sare ah iyo maqaar tayo sare leh.",
    featured: false
  },
  {
    id: "fs-005",
    name: "Faahiye Elegance Velvet High Heels",
    category: "Dumarka",
    price: 75,
    oldPrice: 95,
    stock: 16,
    sizes: [36, 37, 38, 39, 40],
    badge: "Cusub",
    rating: 4.9,
    reviewsCount: 37,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description: "Kabo dhedig oo aad u qurux badan, ku habboon aroosyada iyo xafladaha waaweyn.",
    featured: true
  },
  {
    id: "fs-006",
    name: "Puma RS-X Streetwear Chunky",
    category: "Ciyaaraha",
    price: 85,
    oldPrice: 105,
    stock: 25,
    sizes: [39, 40, 41, 42, 43],
    badge: "Best Seller",
    rating: 4.6,
    reviewsCount: 19,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80",
    description: "Kabo dhalinyaro oo casri ah, style chunky streetwear oo aad u raaxo badan.",
    featured: false
  },
  {
    id: "fs-007",
    name: "Timberland Rugged Leather Boots",
    category: "Ragga",
    price: 135,
    oldPrice: 165,
    stock: 12,
    sizes: [41, 42, 43, 44],
    badge: "Xulasho",
    rating: 4.8,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
    description: "Kabo adag oo maqaar ah oo u adkeysan kara socodka dheer iyo cimilada adag.",
    featured: false
  },
  {
    id: "fs-008",
    name: "Faahiye Slip-On Casual Loafers",
    category: "Xarrago",
    price: 55,
    oldPrice: 70,
    stock: 30,
    sizes: [39, 40, 41, 42, 43, 44],
    badge: "Qiimo Dhimis",
    rating: 4.5,
    reviewsCount: 22,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=800&q=80",
    description: "Kabo fudud oo si fudud loo gashto, ku habboon socodka caadiga ah iyo xilliga kulaylaha.",
    featured: false
  },
  {
    id: "fs-009",
    name: "Air Max Pulse White & Gold Edition",
    category: "Ciyaaraha",
    price: 130,
    oldPrice: 160,
    stock: 18,
    sizes: [40, 41, 42, 43, 44],
    badge: "Cusub",
    rating: 5.0,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
    description: "Naqshad cusub oo cad iyo dahabi ah, hawada hoose ee cushioning-ka siinaysa raaxo aan caadi ahayn.",
    featured: true
  },
  {
    id: "fs-010",
    name: "Faahiye Women's Comfort White Sneaker",
    category: "Dumarka",
    price: 65,
    oldPrice: 85,
    stock: 20,
    sizes: [36, 37, 38, 39, 40],
    badge: "Best Seller",
    rating: 4.8,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    description: "Kabo cad oo qurux badan oo gabdhaha loogu talagalay, waxay ku habboon yihiin dharka nooc kasta.",
    featured: true
  },
  {
    id: "fs-011",
    name: "Faahiye Junior Athletic Runner",
    category: "Carruurta",
    price: 45,
    oldPrice: 58,
    stock: 24,
    sizes: [32, 33, 34, 35, 36],
    badge: "Cusub",
    rating: 4.7,
    reviewsCount: 15,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800&q=80",
    description: "Kabo carruur oo fudud, midabbo soo jiidasho leh leh, kana difaacaya orodka iyo ciyaarta.",
    featured: false
  },
  {
    id: "fs-012",
    name: "Classic Chelsea Suede Boots",
    category: "Ragga",
    price: 110,
    oldPrice: 135,
    stock: 15,
    sizes: [40, 41, 42, 43, 44],
    badge: "Xulasho",
    rating: 4.8,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=800&q=80",
    description: "Kabo suede Chelsea casri ah oo ragga u yeelaya muuqaal xarrago leh.",
    featured: false
  }
];

// Initial Seed Orders
const DEFAULT_ORDERS = [
  {
    id: "ORD-9421",
    customerName: "Axmed Cali Nuur",
    customerPhone: "+252 61 555 1234",
    customerCity: "Muqdisho, Hodan",
    paymentMethod: "EVC Plus",
    items: [
      { name: "Nike Air Jordan 1 Retro High", size: 42, qty: 1, price: 125 }
    ],
    total: 125,
    date: "2026-10-20",
    status: "La Gaarsiiyay" // Delivered
  },
  {
    id: "ORD-9422",
    customerName: "Fadumo Xasan Jaamac",
    customerPhone: "+252 63 444 8765",
    customerCity: "Hargeysa, Jigjiga Yar",
    paymentMethod: "Zaad Service",
    items: [
      { name: "Faahiye Elegance Velvet High Heels", size: 38, qty: 1, price: 75 },
      { name: "Faahiye Women's Comfort White Sneaker", size: 38, qty: 1, price: 65 }
    ],
    total: 140,
    date: "2026-10-20",
    status: "La Diray" // Shipped
  },
  {
    id: "ORD-9423",
    customerName: "Khadar Maxamed Warsame",
    customerPhone: "+252 61 777 9900",
    customerCity: "Garowe, Wadajir",
    paymentMethod: "Sahal",
    items: [
      { name: "Faahiye Italian Leather Loafers", size: 41, qty: 1, price: 89 }
    ],
    total: 89,
    date: "2026-10-21",
    status: "Sugaya" // Pending
  },
  {
    id: "ORD-9424",
    customerName: "Guuleed Cabdi Shire",
    customerPhone: "+252 62 888 3322",
    customerCity: "Kismaayo, Calanleey",
    paymentMethod: "Kaash (Lacag bixin gacanta)",
    items: [
      { name: "Adidas Ultraboost 22 Running", size: 43, qty: 1, price: 115 }
    ],
    total: 115,
    date: "2026-10-21",
    status: "Sugaya"
  }
];

// App State
const state = {
  products: [],
  cart: [],
  orders: [],
  currentCategory: "Dhammaan",
  searchQuery: "",
  sortBy: "default",
  activeView: "store", // "store" or "dashboard"
  dashboardTab: "overview", // "overview", "products", "orders"
  editingProductId: null,
  appliedCoupon: null,
  discountPercentage: 0
};

// Storage Keys
const STORAGE_KEYS = {
  PRODUCTS: "faahiye_shoes_products_v1",
  CART: "faahiye_shoes_cart_v1",
  ORDERS: "faahiye_shoes_orders_v1"
};

// ==========================================
// Initialization & LocalStorage
// ==========================================
function initApp() {
  loadData();
  setupEventListeners();
  renderStore();
  updateCartBadges();
  renderDashboard();
}

function loadData() {
  // Load products
  const storedProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  if (storedProducts) {
    try {
      state.products = JSON.parse(storedProducts);
    } catch (e) {
      state.products = [...DEFAULT_PRODUCTS];
    }
  } else {
    state.products = [...DEFAULT_PRODUCTS];
    saveProducts();
  }

  // Load cart
  const storedCart = localStorage.getItem(STORAGE_KEYS.CART);
  if (storedCart) {
    try {
      state.cart = JSON.parse(storedCart);
    } catch (e) {
      state.cart = [];
    }
  }

  // Load orders
  const storedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
  if (storedOrders) {
    try {
      state.orders = JSON.parse(storedOrders);
    } catch (e) {
      state.orders = [...DEFAULT_ORDERS];
    }
  } else {
    state.orders = [...DEFAULT_ORDERS];
    saveOrders();
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(state.products));
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(state.cart));
}

function saveOrders() {
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(state.orders));
}

function resetDemoData() {
  if (confirm("Ma hubtaa inaad dib u bilowdo xogta asalka ah ee Faahiye Shoes? Xogta aad ku dartay way tirtirmi doontaa.")) {
    state.products = [...DEFAULT_PRODUCTS];
    state.orders = [...DEFAULT_ORDERS];
    state.cart = [];
    saveProducts();
    saveOrders();
    saveCart();
    renderStore();
    renderCart();
    updateCartBadges();
    renderDashboard();
    showToast("Xogtii hore si guul leh ayaa dib loogu soo celiyay!", "success");
  }
}

// ==========================================
// Toast Notifications
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast flex items-center gap-3 px-4 py-3.5 rounded-xl shadow-2xl border text-sm font-semibold max-w-sm ${
    type === "success"
      ? "bg-slate-900 text-white border-emerald-500/50"
      : type === "error"
      ? "bg-red-900 text-white border-red-500/50"
      : "bg-slate-900 text-white border-orange-500/50"
  }`;

  const icon =
    type === "success"
      ? `<span class="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-check text-xs"></i></span>`
      : type === "error"
      ? `<span class="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-xmark text-xs"></i></span>`
      : `<span class="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center flex-shrink-0"><i class="fa-solid fa-bell text-xs"></i></span>`;

  toast.innerHTML = `
    ${icon}
    <div class="flex-1">${message}</div>
    <button class="text-slate-400 hover:text-white ml-2" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark text-xs"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-out");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// View Switching (Store vs Dashboard)
// ==========================================
function switchView(viewName) {
  state.activeView = viewName;
  const storeSection = document.getElementById("store-view");
  const dashboardSection = document.getElementById("dashboard-view");
  const navStoreBtn = document.getElementById("nav-btn-store");
  const navDashBtn = document.getElementById("nav-btn-dashboard");

  if (viewName === "store") {
    storeSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    navStoreBtn.classList.add("bg-orange-500", "text-white");
    navStoreBtn.classList.remove("text-slate-700", "hover:bg-slate-100");
    navDashBtn.classList.remove("bg-orange-500", "text-white");
    navDashBtn.classList.add("text-slate-700", "hover:bg-slate-100");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    storeSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    navDashBtn.classList.add("bg-orange-500", "text-white");
    navDashBtn.classList.remove("text-slate-700", "hover:bg-slate-100");
    navStoreBtn.classList.remove("bg-orange-500", "text-white");
    navStoreBtn.classList.add("text-slate-700", "hover:bg-slate-100");
    renderDashboard();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function switchDashboardTab(tabName) {
  state.dashboardTab = tabName;
  const tabs = ["overview", "products", "orders"];
  tabs.forEach((tab) => {
    const tabEl = document.getElementById(`dash-tab-${tab}`);
    const contentEl = document.getElementById(`dash-content-${tab}`);
    if (tabEl) {
      if (tab === tabName) {
        tabEl.classList.add("bg-orange-500", "text-white");
        tabEl.classList.remove("text-slate-600", "hover:bg-slate-100");
      } else {
        tabEl.classList.remove("bg-orange-500", "text-white");
        tabEl.classList.add("text-slate-600", "hover:bg-slate-100");
      }
    }
    if (contentEl) {
      if (tab === tabName) {
        contentEl.classList.remove("hidden");
      } else {
        contentEl.classList.add("hidden");
      }
    }
  });

  if (tabName === "overview") {
    renderDashboardStats();
    renderSalesChart();
  } else if (tabName === "products") {
    renderDashboardProductsTable();
  } else if (tabName === "orders") {
    renderDashboardOrdersTable();
  }
}

// ==========================================
// Storefront Rendering & Filtering
// ==========================================
function renderStore() {
  const container = document.getElementById("products-grid");
  const countLabel = document.getElementById("products-count");
  if (!container) return;

  // Filter products
  let filtered = state.products.filter((product) => {
    const matchesCategory =
      state.currentCategory === "Dhammaan" || product.category === state.currentCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (state.sortBy === "newest") {
    filtered.reverse();
  }

  if (countLabel) {
    countLabel.textContent = `${filtered.length} Nooc oo Kaba ah ayaa la helay`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-white rounded-3xl border border-slate-200/80 shadow-sm p-8">
        <div class="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 text-3xl">
          <i class="fa-solid fa-shoe-prints"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-800 mb-2">Wax Kaba ah lagama helin raadintaada</h3>
        <p class="text-slate-500 text-sm max-w-md mx-auto mb-6">Fadlan hubi magaca aad qortay ama dooro qayb kale oo ka mid ah noocyada kabaha.</p>
        <button onclick="resetFilters()" class="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition">
          Dib u soo celi Dhammaan Kabaha
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered
    .map((product) => {
      const discount = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

      const badgeColor =
        product.badge === "Cusub"
          ? "bg-emerald-500 text-white"
          : product.badge === "Qiimo Dhimis"
          ? "bg-rose-500 text-white"
          : product.badge === "Best Seller"
          ? "bg-amber-500 text-white"
          : "bg-slate-900 text-white";

      return `
        <div class="product-card bg-white rounded-2xl overflow-hidden border border-slate-200/80 flex flex-col group relative">
          <!-- Image Box -->
          <div class="product-image-container relative h-64 bg-slate-100 overflow-hidden cursor-pointer" onclick="openQuickView('${product.id}')">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              loading="lazy"
              class="w-full h-full object-cover object-center"
              onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'"
            />
            
            <!-- Badges -->
            <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              ${
                product.badge
                  ? `<span class="px-2.5 py-1 text-xs font-bold rounded-lg ${badgeColor} shadow-sm">${product.badge}</span>`
                  : ""
              }
              ${
                discount > 0
                  ? `<span class="px-2 py-0.5 text-[11px] font-bold rounded-lg bg-orange-500 text-white shadow-sm">-${discount}%</span>`
                  : ""
              }
            </div>

            <!-- Quick Action Hover Overlay -->
            <div class="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
              <button 
                type="button"
                onclick="event.stopPropagation(); openQuickView('${product.id}')"
                class="w-11 h-11 rounded-full bg-white text-slate-800 hover:text-orange-600 hover:scale-110 transition shadow-lg flex items-center justify-center text-sm font-bold"
                title="Eeg Faahfaahinta"
              >
                <i class="fa-solid fa-eye"></i>
              </button>
            </div>
            
            <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs pointer-events-none">
              <span class="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-md font-medium">
                <i class="fa-solid fa-box text-orange-400 mr-1"></i> Kaydka: ${product.stock}
              </span>
            </div>
          </div>

          <!-- Product Details -->
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                <span class="uppercase tracking-wider text-orange-600 font-bold">${product.category}</span>
                <span class="flex items-center text-amber-500 font-semibold">
                  <i class="fa-solid fa-star mr-1 text-[11px]"></i> ${product.rating} <span class="text-slate-400 ml-1">(${product.reviewsCount})</span>
                </span>
              </div>

              <h3 
                class="text-base font-bold text-slate-900 hover:text-orange-600 transition cursor-pointer line-clamp-1 mb-2"
                onclick="openQuickView('${product.id}')"
                title="${product.name}"
              >
                ${product.name}
              </h3>

              <p class="text-xs text-slate-500 line-clamp-2 mb-3">
                ${product.description}
              </p>

              <!-- Sizes selector pills -->
              <div class="mb-4">
                <div class="text-[11px] font-semibold text-slate-400 mb-1.5 flex justify-between">
                  <span>Xajmiga (Size):</span>
                  <span class="text-slate-500 font-medium">Dooro mid</span>
                </div>
                <div class="flex flex-wrap gap-1.5" id="size-group-${product.id}">
                  ${product.sizes
                    .map(
                      (size, idx) => `
                    <button 
                      type="button"
                      onclick="selectCardSize('${product.id}', ${size})"
                      class="size-pill-${product.id} text-xs font-semibold px-2 py-1 rounded border ${
                        idx === 0
                          ? "border-orange-500 bg-orange-50 text-orange-600"
                          : "border-slate-200 text-slate-700 hover:border-slate-300"
                      } transition"
                      data-size="${size}"
                    >
                      ${size}
                    </button>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div>

            <!-- Price & Add to Cart -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
              <div>
                <span class="text-xl font-extrabold text-slate-900 font-display">$${product.price}</span>
                ${
                  product.oldPrice
                    ? `<span class="text-xs text-slate-400 line-through ml-1.5">$${product.oldPrice}</span>`
                    : ""
                }
              </div>

              <button 
                type="button"
                onclick="handleCardAddToCart('${product.id}')"
                class="px-4 py-2 bg-slate-900 hover:bg-orange-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <i class="fa-solid fa-cart-plus text-xs"></i>
                <span>Ku dar</span>
              </button>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function selectCardSize(productId, size) {
  const buttons = document.querySelectorAll(`.size-pill-${productId}`);
  buttons.forEach((btn) => {
    if (btn.getAttribute("data-size") == size) {
      btn.className = `size-pill-${productId} text-xs font-semibold px-2 py-1 rounded border border-orange-500 bg-orange-50 text-orange-600 transition`;
    } else {
      btn.className = `size-pill-${productId} text-xs font-semibold px-2 py-1 rounded border border-slate-200 text-slate-700 hover:border-slate-300 transition`;
    }
  });
}

function getSelectedCardSize(productId) {
  const activeBtn = document.querySelector(`.size-pill-${productId}.border-orange-500`);
  if (activeBtn) {
    return parseInt(activeBtn.getAttribute("data-size"), 10);
  }
  const product = state.products.find((p) => p.id === productId);
  return product && product.sizes.length ? product.sizes[0] : 41;
}

function handleCardAddToCart(productId) {
  const size = getSelectedCardSize(productId);
  addToCart(productId, size, 1);
}

function resetFilters() {
  state.currentCategory = "Dhammaan";
  state.searchQuery = "";
  state.sortBy = "default";

  // Reset UI elements
  document.querySelectorAll(".cat-pill").forEach((pill) => {
    if (pill.getAttribute("data-category") === "Dhammaan") {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "default";

  renderStore();
}

// ==========================================
// Cart Logic
// ==========================================
function addToCart(productId, size, quantity = 1) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  if (product.stock <= 0) {
    showToast("Kabahaan kaydka way ka dhamaadeen hadda!", "error");
    return;
  }

  const existingItemIndex = state.cart.findIndex(
    (item) => item.id === productId && item.size === size
  );

  if (existingItemIndex > -1) {
    state.cart[existingItemIndex].quantity += quantity;
  } else {
    state.cart.push({
      cartItemId: `${productId}-${size}-${Date.now()}`,
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      image: product.image,
      size: size,
      quantity: quantity
    });
  }

  saveCart();
  updateCartBadges();
  renderCart();
  showToast(`"${product.name}" (Size ${size}) waxa lagu daray gaariga!`, "success");
}

function removeFromCart(cartItemId) {
  state.cart = state.cart.filter((item) => item.cartItemId !== cartItemId);
  saveCart();
  updateCartBadges();
  renderCart();
  showToast("Alaabta waa laga saaray gaariga", "info");
}

function updateCartQuantity(cartItemId, delta) {
  const item = state.cart.find((i) => i.cartItemId === cartItemId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(cartItemId);
    return;
  }

  saveCart();
  updateCartBadges();
  renderCart();
}

function clearCart() {
  state.cart = [];
  state.appliedCoupon = null;
  state.discountPercentage = 0;
  saveCart();
  updateCartBadges();
  renderCart();
}

function getCartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartDiscount() {
  const subtotal = getCartSubtotal();
  return (subtotal * state.discountPercentage) / 100;
}

function getCartTotal() {
  const subtotal = getCartSubtotal();
  const discount = getCartDiscount();
  return Math.max(0, subtotal - discount);
}

function updateCartBadges() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll(".cart-count-badge");
  badges.forEach((b) => {
    b.textContent = totalCount;
    if (totalCount > 0) {
      b.classList.remove("hidden");
    } else {
      b.classList.add("hidden");
    }
  });

  const cartHeaderTotal = document.getElementById("cart-header-total");
  if (cartHeaderTotal) {
    cartHeaderTotal.textContent = `$${getCartTotal().toFixed(2)}`;
  }
}

function renderCart() {
  const container = document.getElementById("cart-items-container");
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountEl = document.getElementById("cart-discount");
  const totalEl = document.getElementById("cart-total");
  const emptyState = document.getElementById("cart-empty-state");
  const footerEl = document.getElementById("cart-footer");

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    if (footerEl) footerEl.classList.add("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");
  if (footerEl) footerEl.classList.remove("hidden");

  container.innerHTML = state.cart
    .map((item) => {
      return `
        <div class="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-orange-200 transition">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="w-16 h-16 rounded-xl object-cover border border-slate-200 flex-shrink-0"
            onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80'"
          />
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-bold text-slate-900 truncate">${item.name}</h4>
            <div class="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
              <span class="bg-slate-200 px-2 py-0.5 rounded font-semibold text-slate-700">Size: ${item.size}</span>
              <span class="font-bold text-orange-600">$${item.price}</span>
            </div>
            <!-- Quantity Controls -->
            <div class="flex items-center gap-2 mt-2">
              <div class="flex items-center bg-white border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  onclick="updateCartQuantity('${item.cartItemId}', -1)"
                  class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs transition"
                >
                  <i class="fa-solid fa-minus"></i>
                </button>
                <span class="w-8 text-center text-xs font-bold text-slate-800">${item.quantity}</span>
                <button 
                  onclick="updateCartQuantity('${item.cartItemId}', 1)"
                  class="w-6 h-6 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-xs transition"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>
              <span class="text-xs font-bold text-slate-900 ml-auto">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
          <button 
            onclick="removeFromCart('${item.cartItemId}')"
            class="text-slate-400 hover:text-red-500 p-2 transition"
            title="Ka saar"
          >
            <i class="fa-solid fa-trash-can text-sm"></i>
          </button>
        </div>
      `;
    })
    .join("");

  const subtotal = getCartSubtotal();
  const discount = getCartDiscount();
  const total = getCartTotal();

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (discountEl) discountEl.textContent = `-$${discount.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function applyCouponCode() {
  const input = document.getElementById("coupon-input");
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (code === "FAAHIYE15") {
    state.appliedCoupon = "FAAHIYE15";
    state.discountPercentage = 15;
    showToast("🎉 Koodhka FAAHIYE15 waa sax! Waxaad heshay 15% dhimis!", "success");
  } else if (code === "SOOMAALI10") {
    state.appliedCoupon = "SOOMAALI10";
    state.discountPercentage = 10;
    showToast("🎉 Koodhka SOOMAALI10 waa sax! Waxaad heshay 10% dhimis!", "success");
  } else {
    showToast("Koodhka dhimista ma jiro ama wuu dhacay!", "error");
    return;
  }

  input.value = "";
  renderCart();
  updateCartBadges();
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const panel = document.getElementById("cart-panel");
  if (!drawer || !panel) return;

  renderCart();
  drawer.classList.remove("hidden");
  setTimeout(() => {
    panel.classList.remove("translate-x-full");
  }, 10);
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const panel = document.getElementById("cart-panel");
  if (!drawer || !panel) return;

  panel.classList.add("translate-x-full");
  setTimeout(() => {
    drawer.classList.add("hidden");
  }, 300);
}

// ==========================================
// Checkout System
// ==========================================
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Fadlan kaba ku dar gaariga intaadan dalban!", "error");
    return;
  }
  closeCartDrawer();

  const modal = document.getElementById("checkout-modal");
  const checkoutItems = document.getElementById("checkout-summary-items");
  const checkoutTotal = document.getElementById("checkout-summary-total");

  if (checkoutItems) {
    checkoutItems.innerHTML = state.cart
      .map(
        (i) => `
        <div class="flex justify-between items-center text-xs py-1 border-b border-slate-100 last:border-0">
          <span class="text-slate-700 truncate max-w-[200px]">${i.name} (x${i.quantity})</span>
          <span class="font-bold text-slate-900">$${(i.price * i.quantity).toFixed(2)}</span>
        </div>
      `
      )
      .join("");
  }

  if (checkoutTotal) {
    checkoutTotal.textContent = `$${getCartTotal().toFixed(2)}`;
  }

  modal.classList.remove("hidden");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkout-modal");
  if (modal) modal.classList.add("hidden");
}

function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("co-name").value.trim();
  const phone = document.getElementById("co-phone").value.trim();
  const city = document.getElementById("co-city").value.trim();
  const payment = document.getElementById("co-payment").value;

  if (!name || !phone || !city) {
    showToast("Fadlan buuxi dhammaan macluumaadka looga baahan yahay foomka!", "error");
    return;
  }

  const newOrder = {
    id: "ORD-" + Math.floor(1000 + Math.random() * 9000),
    customerName: name,
    customerPhone: phone,
    customerCity: city,
    paymentMethod: payment,
    items: state.cart.map((c) => ({
      name: c.name,
      size: c.size,
      qty: c.quantity,
      price: c.price
    })),
    total: getCartTotal(),
    date: new Date().toISOString().split("T")[0],
    status: "Sugaya" // Pending
  };

  // Add order to database
  state.orders.unshift(newOrder);
  saveOrders();

  // Deduct stock
  state.cart.forEach((cartItem) => {
    const product = state.products.find((p) => p.id === cartItem.id);
    if (product) {
      product.stock = Math.max(0, product.stock - cartItem.quantity);
    }
  });
  saveProducts();

  // Clear cart
  clearCart();
  closeCheckoutModal();

  // Render confirmation
  openOrderSuccessModal(newOrder);

  // Update store and dashboard
  renderStore();
  renderDashboard();
}

function openOrderSuccessModal(order) {
  const modal = document.getElementById("order-success-modal");
  const orderIdSpan = document.getElementById("success-order-id");
  const orderDetails = document.getElementById("success-order-details");

  if (orderIdSpan) orderIdSpan.textContent = order.id;
  if (orderDetails) {
    orderDetails.innerHTML = `
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs space-y-1.5 text-left mb-4">
        <p><strong class="text-slate-800">Macaamiilka:</strong> ${order.customerName}</p>
        <p><strong class="text-slate-800">Telefoon:</strong> ${order.customerPhone}</p>
        <p><strong class="text-slate-800">Magaalada/Goobta:</strong> ${order.customerCity}</p>
        <p><strong class="text-slate-800">Habka Bixinta:</strong> <span class="text-orange-600 font-bold">${order.paymentMethod}</span></p>
        <p><strong class="text-slate-800">Wadarta Guud:</strong> <span class="text-slate-900 font-extrabold text-sm">$${order.total.toFixed(2)}</span></p>
      </div>
    `;
  }

  if (modal) modal.classList.remove("hidden");
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("order-success-modal");
  if (modal) modal.classList.add("hidden");
}

// ==========================================
// Quick View Modal
// ==========================================
function openQuickView(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickview-modal");
  const modalBody = document.getElementById("quickview-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Shoe Image -->
      <div class="relative bg-slate-100 rounded-2xl overflow-hidden min-h-[300px]">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-cover object-center"
          onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80'"
        />
        ${
          product.badge
            ? `<span class="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md">${product.badge}</span>`
            : ""
        }
      </div>

      <!-- Info & Actions -->
      <div class="flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-orange-600 uppercase tracking-wider">${product.category}</span>
          <h2 class="text-2xl font-bold text-slate-900 mt-1 mb-2">${product.name}</h2>
          
          <div class="flex items-center gap-3 mb-4">
            <div class="flex items-center text-amber-500 text-sm">
              <i class="fa-solid fa-star"></i>
              <span class="ml-1 font-bold text-slate-800">${product.rating}</span>
            </div>
            <span class="text-xs text-slate-400">• ${product.reviewsCount} Macaamiil ayaa faallooday</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded-full ${
              product.stock > 5 ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }">
              ${product.stock > 0 ? `Kaydka: ${product.stock} xabbo` : "Wuu Dhamaaday"}
            </span>
          </div>

          <div class="flex items-baseline gap-3 mb-4">
            <span class="text-3xl font-extrabold text-slate-900 font-display">$${product.price}</span>
            ${
              product.oldPrice
                ? `<span class="text-base text-slate-400 line-through font-semibold">$${product.oldPrice}</span>`
                : ""
            }
          </div>

          <p class="text-slate-600 text-sm leading-relaxed mb-6">
            ${product.description}
          </p>

          <!-- Select Size -->
          <div class="mb-6">
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Dooro Xajmiga (Shoe Size):
            </label>
            <div class="flex flex-wrap gap-2" id="qv-sizes-group">
              ${product.sizes
                .map(
                  (s, idx) => `
                <button 
                  type="button" 
                  onclick="selectModalSize(${s})"
                  class="qv-size-btn text-sm font-semibold px-3.5 py-1.5 rounded-xl border ${
                    idx === 0
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-slate-200 text-slate-700 hover:border-slate-400"
                  } transition"
                  data-size="${s}"
                >
                  ${s}
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Add Button -->
        <div class="flex gap-3 pt-4 border-t border-slate-100">
          <button 
            type="button"
            onclick="addFromQuickView('${product.id}')"
            class="flex-1 py-3.5 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white rounded-xl font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
          >
            <i class="fa-solid fa-cart-shopping"></i>
            <span>Ku dar Gaariga Hadda</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
}

let quickViewSelectedSize = null;

function selectModalSize(size) {
  quickViewSelectedSize = size;
  const buttons = document.querySelectorAll(".qv-size-btn");
  buttons.forEach((btn) => {
    if (btn.getAttribute("data-size") == size) {
      btn.className =
        "qv-size-btn text-sm font-semibold px-3.5 py-1.5 rounded-xl border border-orange-500 bg-orange-500 text-white transition";
    } else {
      btn.className =
        "qv-size-btn text-sm font-semibold px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:border-slate-400 transition";
    }
  });
}

function addFromQuickView(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  const size = quickViewSelectedSize || product.sizes[0] || 41;
  addToCart(productId, size, 1);
  closeQuickView();
  openCartDrawer();
}

function closeQuickView() {
  const modal = document.getElementById("quickview-modal");
  if (modal) modal.classList.add("hidden");
  quickViewSelectedSize = null;
}

// ==========================================
// Admin Dashboard Logic
// ==========================================
function renderDashboard() {
  renderDashboardStats();
  renderSalesChart();
  renderDashboardProductsTable();
  renderDashboardOrdersTable();
}

function renderDashboardStats() {
  const totalRevenue = state.orders.reduce((sum, order) => sum + (order.total || 0), 0);
  const totalOrders = state.orders.length;
  const totalProducts = state.products.length;
  const totalStock = state.products.reduce((sum, p) => sum + (p.stock || 0), 0);

  const elRev = document.getElementById("kpi-revenue");
  const elOrders = document.getElementById("kpi-orders");
  const elProducts = document.getElementById("kpi-products");
  const elStock = document.getElementById("kpi-stock");

  if (elRev) elRev.textContent = `$${totalRevenue.toLocaleString()}`;
  if (elOrders) elOrders.textContent = totalOrders;
  if (elProducts) elProducts.textContent = totalProducts;
  if (elStock) elStock.textContent = totalStock;
}

function renderSalesChart() {
  const canvas = document.getElementById("salesChartCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Clear
  ctx.clearRect(0, 0, width, height);

  // Data points: Mon, Tue, Wed, Thu, Fri, Sat, Sun
  const labels = ["Isniin", "Talaado", "Arbaco", "Khamiis", "Jimce", "Sabti", "Axad"];
  const sales = [420, 680, 510, 890, 1150, 940, 1260];
  const maxVal = Math.max(...sales) * 1.15;

  const paddingLeft = 45;
  const paddingBottom = 30;
  const paddingTop = 25;
  const chartWidth = width - paddingLeft - 20;
  const chartHeight = height - paddingBottom - paddingTop;

  // Draw background grid lines
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = paddingTop + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();

    // Labels on left
    const val = Math.round(maxVal - (maxVal / 4) * i);
    ctx.fillStyle = "#94a3b8";
    ctx.font = "10px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(`$${val}`, paddingLeft - 8, y + 3);
  }

  // Draw Bars & Gradient
  const barCount = labels.length;
  const barWidth = (chartWidth / barCount) * 0.55;
  const step = chartWidth / barCount;

  sales.forEach((val, i) => {
    const x = paddingLeft + i * step + (step - barWidth) / 2;
    const barH = (val / maxVal) * chartHeight;
    const y = paddingTop + chartHeight - barH;

    // Gradient
    const gradient = ctx.createLinearGradient(0, y, 0, paddingTop + chartHeight);
    gradient.addColorStop(0, "#f97316"); // orange-500
    gradient.addColorStop(1, "#fbbf24"); // amber-400

    // Rounded top bar
    ctx.fillStyle = gradient;
    ctx.beginPath();
    const radius = 6;
    if (typeof ctx.roundRect === "function") {
      ctx.roundRect(x, y, barWidth, barH, [radius, radius, 0, 0]);
    } else {
      ctx.rect(x, y, barWidth, barH);
    }
    ctx.fill();

    // Value on top of bar
    ctx.fillStyle = "#0f172a";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`$${val}`, x + barWidth / 2, y - 6);

    // Label at bottom
    ctx.fillStyle = "#64748b";
    ctx.font = "11px sans-serif";
    ctx.fillText(labels[i], x + barWidth / 2, height - 10);
  });
}

function renderDashboardProductsTable() {
  const tbody = document.getElementById("dash-products-tbody");
  if (!tbody) return;

  if (state.products.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400 font-medium">Wax kaba ah kuma jiraan kaydka.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.products
    .map((product) => {
      return `
      <tr class="hover:bg-slate-50/80 transition border-b border-slate-100">
        <td class="py-3.5 px-4">
          <div class="flex items-center gap-3">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              class="w-12 h-12 rounded-xl object-cover border border-slate-200"
              onerror="this.src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=200&q=80'"
            />
            <div>
              <div class="font-bold text-slate-900 text-sm">${product.name}</div>
              <div class="text-xs text-slate-400">${product.id} • Sizes: ${product.sizes.join(", ")}</div>
            </div>
          </div>
        </td>
        <td class="py-3.5 px-4 text-xs font-semibold text-slate-700">
          <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800">${product.category}</span>
        </td>
        <td class="py-3.5 px-4 font-bold text-slate-900 text-sm">
          $${product.price}
          ${product.oldPrice ? `<span class="text-xs text-slate-400 line-through ml-1">$${product.oldPrice}</span>` : ""}
        </td>
        <td class="py-3.5 px-4 text-xs font-bold">
          <span class="px-2.5 py-1 rounded-full ${
            product.stock > 10
              ? "bg-emerald-100 text-emerald-800"
              : product.stock > 0
              ? "bg-amber-100 text-amber-800"
              : "bg-red-100 text-red-800"
          }">
            ${product.stock} xabbo
          </span>
        </td>
        <td class="py-3.5 px-4 text-xs">
          <span class="px-2 py-0.5 rounded font-semibold bg-orange-100 text-orange-800">
            ${product.badge || "Caadi"}
          </span>
        </td>
        <td class="py-3.5 px-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button 
              onclick="editProductModal('${product.id}')"
              class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-600 transition flex items-center justify-center text-xs"
              title="Wax ka bedel"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button 
              onclick="deleteProduct('${product.id}')"
              class="w-8 h-8 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 transition flex items-center justify-center text-xs"
              title="Tirtir"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
    })
    .join("");
}

function renderDashboardOrdersTable() {
  const tbody = document.getElementById("dash-orders-tbody");
  if (!tbody) return;

  if (state.orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-8 text-slate-400 font-medium">Wax dalab ah weli lama diiwaangelin.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.orders
    .map((order) => {
      const statusBadge =
        order.status === "La Gaarsiiyay"
          ? "bg-emerald-100 text-emerald-800 border-emerald-200"
          : order.status === "La Diray"
          ? "bg-blue-100 text-blue-800 border-blue-200"
          : order.status === "Sugaya"
          ? "bg-amber-100 text-amber-800 border-amber-200"
          : "bg-rose-100 text-rose-800 border-rose-200";

      return `
      <tr class="hover:bg-slate-50/80 transition border-b border-slate-100">
        <td class="py-3 px-4 font-mono font-bold text-xs text-orange-600">${order.id}</td>
        <td class="py-3 px-4">
          <div class="font-bold text-slate-900 text-sm">${order.customerName}</div>
          <div class="text-xs text-slate-400">${order.customerPhone}</div>
        </td>
        <td class="py-3 px-4 text-xs text-slate-600">${order.customerCity}</td>
        <td class="py-3 px-4 text-xs text-slate-600">
          <div class="font-semibold text-slate-800">${order.items.length} Alaab</div>
          <div class="text-[11px] text-slate-400 truncate max-w-[150px]">${order.items.map((i) => i.name).join(", ")}</div>
        </td>
        <td class="py-3 px-4 font-extrabold text-slate-900 text-sm">$${order.total.toFixed(2)}</td>
        <td class="py-3 px-4 text-xs font-semibold">
          <span class="px-2.5 py-1 rounded-full border ${statusBadge}">${order.status}</span>
        </td>
        <td class="py-3 px-4 text-right">
          <select 
            onchange="updateOrderStatus('${order.id}', this.value)"
            class="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-white text-slate-700 font-medium focus:ring-1 focus:ring-orange-500 focus:outline-none"
          >
            <option value="Sugaya" ${order.status === "Sugaya" ? "selected" : ""}>Sugaya</option>
            <option value="La Diray" ${order.status === "La Diray" ? "selected" : ""}>La Diray</option>
            <option value="La Gaarsiiyay" ${order.status === "La Gaarsiiyay" ? "selected" : ""}>La Gaarsiiyay</option>
            <option value="La Joojiyay" ${order.status === "La Joojiyay" ? "selected" : ""}>La Joojiyay</option>
          </select>
        </td>
      </tr>
    `;
    })
    .join("");
}

function updateOrderStatus(orderId, newStatus) {
  const order = state.orders.find((o) => o.id === orderId);
  if (order) {
    order.status = newStatus;
    saveOrders();
    renderDashboardStats();
    showToast(`Xaaladda dalabka ${orderId} waxa loo beddelay: ${newStatus}`, "info");
  }
}

// ==========================================
// Product CRUD (Add, Edit, Delete)
// ==========================================
function openAddProductModal() {
  state.editingProductId = null;
  document.getElementById("product-modal-title").textContent = "Kudar Kaba Cusub Kaydka";
  document.getElementById("prod-form").reset();
  document.getElementById("prod-id-hidden").value = "";
  document.getElementById("product-crud-modal").classList.remove("hidden");
}

function editProductModal(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  state.editingProductId = productId;
  document.getElementById("product-modal-title").textContent = "Wax ka bedel Kabahaan";
  document.getElementById("prod-id-hidden").value = product.id;
  document.getElementById("prod-name").value = product.name;
  document.getElementById("prod-category").value = product.category;
  document.getElementById("prod-price").value = product.price;
  document.getElementById("prod-oldprice").value = product.oldPrice || "";
  document.getElementById("prod-stock").value = product.stock;
  document.getElementById("prod-badge").value = product.badge || "Caadi";
  document.getElementById("prod-image").value = product.image;
  document.getElementById("prod-sizes").value = product.sizes.join(", ");
  document.getElementById("prod-desc").value = product.description;

  document.getElementById("product-crud-modal").classList.remove("hidden");
}

function closeProductModal() {
  document.getElementById("product-crud-modal").classList.add("hidden");
  state.editingProductId = null;
}

function handleProductFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("prod-name").value.trim();
  const category = document.getElementById("prod-category").value;
  const price = parseFloat(document.getElementById("prod-price").value) || 0;
  const oldPriceVal = document.getElementById("prod-oldprice").value;
  const oldPrice = oldPriceVal ? parseFloat(oldPriceVal) : null;
  const stock = parseInt(document.getElementById("prod-stock").value, 10) || 0;
  const badge = document.getElementById("prod-badge").value;
  let image = document.getElementById("prod-image").value.trim();
  const sizesStr = document.getElementById("prod-sizes").value.trim();
  const description = document.getElementById("prod-desc").value.trim();

  if (!name || price <= 0) {
    showToast("Fadlan geli magaca iyo qiimaha saxda ah!", "error");
    return;
  }

  if (!image) {
    image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80";
  }

  // Parse sizes
  let sizes = sizesStr
    .split(",")
    .map((s) => parseInt(s.trim(), 10))
    .filter((n) => !isNaN(n));

  if (sizes.length === 0) {
    sizes = [40, 41, 42, 43];
  }

  if (state.editingProductId) {
    // Update
    const index = state.products.findIndex((p) => p.id === state.editingProductId);
    if (index > -1) {
      state.products[index] = {
        ...state.products[index],
        name,
        category,
        price,
        oldPrice,
        stock,
        badge,
        image,
        sizes,
        description
      };
      showToast(`Kabaha "${name}" si guul leh ayaa loo cusbooneysiiyay!`, "success");
    }
  } else {
    // Create new
    const newProduct = {
      id: "fs-" + Math.floor(100 + Math.random() * 900),
      name,
      category,
      price,
      oldPrice,
      stock,
      badge,
      image,
      sizes,
      description,
      rating: 5.0,
      reviewsCount: 1,
      featured: false
    };
    state.products.unshift(newProduct);
    showToast(`Kaba cusub "${name}" ayaa lagu daray dukaanka!`, "success");
  }

  saveProducts();
  closeProductModal();
  renderStore();
  renderDashboard();
}

function deleteProduct(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  if (confirm(`Ma hubtaa inaad tirtirto kabaha "${product.name}"?`)) {
    state.products = state.products.filter((p) => p.id !== productId);
    saveProducts();
    renderStore();
    renderDashboard();
    showToast(`Kabaha "${product.name}" waa la tirtiray!`, "info");
  }
}

// Preset image helper
function setPresetImage(url) {
  const input = document.getElementById("prod-image");
  if (input) {
    input.value = url;
    showToast("Sawirka waa la doortay!", "info");
  }
}

// ==========================================
// Setup Listeners
// ==========================================
function setupEventListeners() {
  // Category Pills
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      catPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      state.currentCategory = pill.getAttribute("data-category");
      renderStore();
    });
  });

  // Search input live filter
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim();
      renderStore();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      renderStore();
    });
  }

  // Forms
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  }

  const prodForm = document.getElementById("prod-form");
  if (prodForm) {
    prodForm.addEventListener("submit", handleProductFormSubmit);
  }

  // Resize listener for sales chart
  window.addEventListener("resize", () => {
    if (state.activeView === "dashboard" && state.dashboardTab === "overview") {
      renderSalesChart();
    }
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", initApp);
