// ═══════════════════════════════════════════════════════════════
// WebMarketMC — Static Preview with Fake Data
// ═══════════════════════════════════════════════════════════════
// ── Modal close animation helper ──────────────────────────────
function closeModal(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (!overlay) return;
    overlay.classList.add('closing');
    overlay.addEventListener('animationend', () => {
        overlay.style.display = 'none';
        overlay.classList.remove('closing');
    }, { once: true });
}

// ── Update +/- button disabled states ──────────────────────────
function updateQtyButtonStates(inputId, minusId, plusId, maxQty) {
    const val = parseInt(document.getElementById(inputId)?.value) || 1;
    const minusBtn = document.getElementById(minusId);
    const plusBtn = document.getElementById(plusId);
    if (minusBtn) {
        if (val <= 1) minusBtn.classList.add('at-limit');
        else minusBtn.classList.remove('at-limit');
    }
    if (plusBtn) {
        if (val >= maxQty) plusBtn.classList.add('at-limit');
        else plusBtn.classList.remove('at-limit');
    }
}





const ICONS = {
    BOX: `<svg class="icon" viewBox="0 0 24 24"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
    CLOCK: `<svg class="icon icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    ARROW_UP: `<svg class="icon icon-sm" style="stroke-width:3;color:var(--accent)" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"/></svg>`,
    ARROW_DOWN: `<svg class="icon icon-sm" style="stroke-width:3;color:var(--red)" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>`,
    ARROW_FLAT: `<svg class="icon icon-sm" style="stroke-width:3;color:var(--text-muted)" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>`
};

const IMG_BASE = 'https://assets.mcasset.cloud/26.2/assets/minecraft/textures/item/';

// ── Fake Data ──────────────────────────────────────────────────

const FAKE_CATEGORIES = [
    { id: 'building', name: 'Building Blocks', icon: 'stone', itemCount: 24 },
    { id: 'ores', name: 'Ores & Minerals', icon: 'diamond', itemCount: 12 },
    { id: 'food', name: 'Food & Farming', icon: 'golden_carrot', itemCount: 18 },
    { id: 'tools', name: 'Tools & Weapons', icon: 'diamond_sword', itemCount: 9 },
    { id: 'redstone', name: 'Redstone', icon: 'redstone', itemCount: 15 },
    { id: 'misc', name: 'Miscellaneous', icon: 'nether_star', itemCount: 31 }
];

const FAKE_ITEMS = {
    building: [
        { key: 'stone', name: 'Stone', price: 2, priceFormatted: '2 Coins', currency: 'Coins', material: 'stone' },
        { key: 'oak_planks', name: 'Oak Planks', price: 5, priceFormatted: '5 Coins', currency: 'Coins', material: 'oak_planks' },
        { key: 'cobblestone', name: 'Cobblestone', price: 1, priceFormatted: '1 Coin', currency: 'Coins', material: 'cobblestone', categoryId: 'building' },
        { key: 'brick', name: 'Bricks', price: 12, priceFormatted: '12 Coins', currency: 'Coins', material: 'brick' },
        { key: 'glass', name: 'Glass', price: 8, priceFormatted: '8 Coins', currency: 'Coins', material: 'glass' },
        { key: 'quartz_block', name: 'Quartz Block', price: 45, priceFormatted: '45 Coins', currency: 'Coins', material: 'quartz_block' },
        { key: 'prismarine', name: 'Prismarine', price: 30, priceFormatted: '30 Coins', currency: 'Coins', material: 'prismarine' },
        { key: 'dark_oak_planks', name: 'Dark Oak Planks', price: 7, priceFormatted: '7 Coins', currency: 'Coins', material: 'dark_oak_planks' },
        { key: 'sandstone', name: 'Sandstone', price: 4, priceFormatted: '4 Coins', currency: 'Coins', material: 'sandstone' },
    ],
    ores: [
        { key: 'coal', name: 'Coal', price: 15, priceFormatted: '15 Coins', currency: 'Coins', material: 'coal' },
        { key: 'iron_ingot', name: 'Iron Ingot', price: 50, priceFormatted: '50 Coins', currency: 'Coins', material: 'iron_ingot' },
        { key: 'gold_ingot', name: 'Gold Ingot', price: 120, priceFormatted: '120 Coins', currency: 'Coins', material: 'gold_ingot', categoryId: 'ores' },
        { key: 'diamond', name: 'Diamond', price: 500, priceFormatted: '500 Coins', currency: 'Coins', material: 'diamond' },
        { key: 'emerald', name: 'Emerald', price: 450, priceFormatted: '450 Coins', currency: 'Coins', material: 'emerald', categoryId: 'ores' },
        { key: 'lapis_lazuli', name: 'Lapis Lazuli', price: 35, priceFormatted: '35 Coins', currency: 'Coins', material: 'lapis_lazuli', categoryId: 'ores' },
        { key: 'redstone', name: 'Redstone Dust', price: 25, priceFormatted: '25 Coins', currency: 'Coins', material: 'redstone' },
        { key: 'nether_quartz', name: 'Nether Quartz', price: 20, priceFormatted: '20 Coins', currency: 'Coins', material: 'quartz' },
    ],
    food: [
        { key: 'bread', name: 'Bread', price: 8, priceFormatted: '8 Coins', currency: 'Coins', material: 'bread', categoryId: 'food' },
        { key: 'golden_carrot', name: 'Golden Carrot', price: 200, priceFormatted: '200 Coins', currency: 'Coins', material: 'golden_carrot' },
        { key: 'cooked_beef', name: 'Cooked Steak', price: 15, priceFormatted: '15 Coins', currency: 'Coins', material: 'cooked_beef', categoryId: 'food' },
        { key: 'golden_apple', name: 'Golden Apple', price: 800, priceFormatted: '800 Coins', currency: 'Coins', material: 'golden_apple', categoryId: 'food' },
        { key: 'pumpkin_pie', name: 'Pumpkin Pie', price: 22, priceFormatted: '22 Coins', currency: 'Coins', material: 'pumpkin_pie' },
        { key: 'mushroom_stew', name: 'Mushroom Stew', price: 18, priceFormatted: '18 Coins', currency: 'Coins', material: 'mushroom_stew' },
    ],
    tools: [
        { key: 'diamond_sword', name: 'Diamond Sword', price: 1500, priceFormatted: '1,500 Coins', currency: 'Coins', material: 'diamond_sword', categoryId: 'tools' },
        { key: 'diamond_pickaxe', name: 'Diamond Pickaxe', price: 1200, priceFormatted: '1,200 Coins', currency: 'Coins', material: 'diamond_pickaxe' },
        { key: 'diamond_shovel', name: 'Diamond Shovel', price: 600, priceFormatted: '600 Coins', currency: 'Coins', material: 'diamond_shovel' },
        { key: 'bow', name: 'Bow', price: 350, priceFormatted: '350 Coins', currency: 'Coins', material: 'bow' },
        { key: 'crossbow', name: 'Crossbow', price: 500, priceFormatted: '500 Coins', currency: 'Coins', material: 'crossbow' },
    ],
    redstone: [
        { key: 'redstone', name: 'Redstone Dust', price: 25, priceFormatted: '25 Coins', currency: 'Coins', material: 'redstone' },
        { key: 'repeater', name: 'Repeater', price: 80, priceFormatted: '80 Coins', currency: 'Coins', material: 'repeater', categoryId: 'redstone' },
        { key: 'piston', name: 'Piston', price: 120, priceFormatted: '120 Coins', currency: 'Coins', material: 'piston', categoryId: 'redstone' },
        { key: 'observer', name: 'Observer', price: 150, priceFormatted: '150 Coins', currency: 'Coins', material: 'observer' },
        { key: 'hopper', name: 'Hopper', price: 300, priceFormatted: '300 Coins', currency: 'Coins', material: 'hopper' },
    ],
    misc: [
        { key: 'nether_star', name: 'Nether Star', price: 5000, priceFormatted: '5,000 Coins', currency: 'Coins', material: 'nether_star' },
        { key: 'elytra', name: 'Elytra', price: 25000, priceFormatted: '25,000 Coins', currency: 'Coins', material: 'elytra' },
        { key: 'totem_of_undying', name: 'Totem of Undying', price: 15000, priceFormatted: '15,000 Coins', currency: 'Coins', material: 'totem_of_undying' },
        { key: 'enchanted_golden_apple', name: 'Enchanted Golden Apple', price: 50000, priceFormatted: '50,000 Coins', currency: 'Coins', material: 'enchanted_golden_apple' },
        { key: 'ender_pearl', name: 'Ender Pearl', price: 250, priceFormatted: '250 Coins', currency: 'Coins', material: 'ender_pearl', categoryId: 'misc' },
        { key: 'blaze_rod', name: 'Blaze Rod', price: 180, priceFormatted: '180 Coins', currency: 'Coins', material: 'blaze_rod', categoryId: 'misc' },
    ]
};

const FAKE_AUCTIONS = [
    { id: 1, itemName: 'Diamond Sword', material: 'diamond_sword', categoryId: 'tools', amount: 1, seller: 'xX_Pro_Xx', sellerUuid: 'fake1', isBin: true, price: 2500, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 3600000 },
    { id: 2, itemName: 'Netherite Ingot', material: 'netherite_ingot', categoryId: 'ores', amount: 3, seller: 'BuilderBob', sellerUuid: 'fake2', isBin: false, price: 1800, currencySymbol: '$', highestBidder: 'MinerMike', expiration: Date.now() + 7200000 },
    { id: 3, itemName: 'Elytra', material: 'elytra', amount: 1, seller: 'SkyLord', sellerUuid: 'fake3', isBin: true, price: 45000, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 86400000 },
    { id: 4, itemName: 'Shulker Box', material: 'shulker_box', amount: 2, seller: 'RedstoneRex', sellerUuid: 'fake4', isBin: false, price: 600, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 240000 },
    { id: 5, itemName: 'Beacon', material: 'beacon', amount: 1, seller: 'RichSteve', sellerUuid: 'fake5', isBin: true, price: 12000, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 14400000 },
    { id: 6, itemName: 'Enchanted Golden Apple', material: 'enchanted_golden_apple', amount: 1, seller: 'GappleGod', sellerUuid: 'fake6', isBin: false, price: 35000, currencySymbol: '$', highestBidder: 'WhalePlayer', expiration: Date.now() + 1800000 },
    { id: 7, itemName: 'Diamond', material: 'diamond', amount: 64, seller: 'DiamondMiner', sellerUuid: 'fake7', isBin: true, price: 500, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 5400000 },
    { id: 8, itemName: 'Iron Ingot', material: 'iron_ingot', amount: 32, seller: 'IronFarm', sellerUuid: 'fake8', isBin: true, price: 50, currencySymbol: '$', highestBidder: null, expiration: Date.now() + 10800000 },
];

const FAKE_ORDERS = [
    { id: 1, itemName: 'Diamond', material: 'diamond', buyer: 'JewelerJane', buyerUuid: 'fake10', pricePerPiece: 480, currencySymbol: '$', amountRequested: 64, amountFilled: 42, status: 'ACTIVE' },
    { id: 2, itemName: 'Iron Ingot', material: 'iron_ingot', buyer: 'IronMan99', buyerUuid: 'fake11', pricePerPiece: 55, currencySymbol: '$', amountRequested: 128, amountFilled: 128, status: 'FILLED' },
    { id: 3, itemName: 'Nether Quartz', material: 'quartz', buyer: 'QuarryQueen', buyerUuid: 'fake12', pricePerPiece: 18, currencySymbol: '$', amountRequested: 256, amountFilled: 89, status: 'ACTIVE' },
    { id: 4, itemName: 'Gold Ingot', material: 'gold_ingot', categoryId: 'ores', buyer: 'GoldGrinder', buyerUuid: 'fake13', pricePerPiece: 115, currencySymbol: '$', amountRequested: 32, amountFilled: 0, status: 'ACTIVE' },
];

const FAKE_STOCKS = [
    { key: 'diamond', name: 'Diamond', material: 'diamond', buyPrice: 500, sellPrice: 420, change: 5.2, currencySymbol: '$' },
    { key: 'iron_ingot', name: 'Iron Ingot', material: 'iron_ingot', buyPrice: 50, sellPrice: 42, change: -2.1, currencySymbol: '$' },
    { key: 'gold_ingot', name: 'Gold Ingot', material: 'gold_ingot', categoryId: 'ores', buyPrice: 120, sellPrice: 98, change: 1.8, currencySymbol: '$' },
    { key: 'emerald', name: 'Emerald', material: 'emerald', categoryId: 'ores', buyPrice: 450, sellPrice: 380, change: -4.3, currencySymbol: '$' },
    { key: 'coal', name: 'Coal', material: 'coal', buyPrice: 15, sellPrice: 10, change: 0.2, currencySymbol: '$' },
    { key: 'redstone', name: 'Redstone Dust', material: 'redstone', buyPrice: 25, sellPrice: 18, change: 3.7, currencySymbol: '$' },
    { key: 'lapis_lazuli', name: 'Lapis Lazuli', material: 'lapis_lazuli', categoryId: 'ores', buyPrice: 35, sellPrice: 28, change: -1.5, currencySymbol: '$' },
    { key: 'netherite_ingot', name: 'Netherite Ingot', material: 'netherite_ingot', categoryId: 'ores', buyPrice: 8000, sellPrice: 6500, change: 8.9, currencySymbol: '$' },
    { key: 'ender_pearl', name: 'Ender Pearl', material: 'ender_pearl', categoryId: 'misc', buyPrice: 250, sellPrice: 200, change: -0.8, currencySymbol: '$' },
    { key: 'blaze_rod', name: 'Blaze Rod', material: 'blaze_rod', categoryId: 'misc', buyPrice: 180, sellPrice: 140, change: 2.4, currencySymbol: '$' },
    { key: 'quartz', name: 'Nether Quartz', material: 'quartz', buyPrice: 20, sellPrice: 14, change: 0.0, currencySymbol: '$' },
    { key: 'glowstone', name: 'Glowstone', material: 'glowstone', buyPrice: 12, sellPrice: 8, change: -0.5, currencySymbol: '$' },
];

let currentPage = 'market';
let currentCategory = 'building';
let currentAuctionContext = null;

// ── Navigation ─────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    renderCategories(FAKE_CATEGORIES);
    selectCategory('building', 'Building Blocks');
    initCustomSelects();
});

function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => switchPage(tab.dataset.page));
    });
}

function switchPage(page) {
    currentPage = page;
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`.nav-tab[data-page="${page}"]`).classList.add('active');
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(`page-${page}`).classList.remove('hidden');

    switch (page) {
        case 'market': break;
        case 'auction': initAuctionSidebar(); break;
        case 'orders': renderOrders(FAKE_ORDERS); break;
        case 'stocks': renderStocks(FAKE_STOCKS); break;
    }
}

// ── Market Page ────────────────────────────────────────────────

function renderCategories(cats) {
    const container = document.getElementById('sidebar-categories');
    container.innerHTML = '';
    cats.forEach(cat => {
        const el = document.createElement('div');
        el.className = 'sidebar-item';
        el.dataset.catId = cat.id;
        el.innerHTML = `
            <img src="${IMG_BASE}${cat.icon?.toLowerCase() || 'stone'}" width="20" height="20"
                 style="image-rendering:pixelated" onerror="this.style.display='none'">
            <span>${esc(cat.name)}</span>
            <span class="item-count">${cat.itemCount}</span>
        `;
        el.addEventListener('click', () => selectCategory(cat.id, cat.name));
        container.appendChild(el);
    });
}

function selectCategory(catId, catName) {
    currentCategory = catId;
    document.querySelectorAll('.sidebar-item').forEach(s => {
        s.classList.toggle('active', s.dataset.catId === catId);
    });
    updateBreadcrumb(catName);
    const items = FAKE_ITEMS[catId] || [];
    renderItems(items);
}

function renderItems(items) {
    const grid = document.getElementById('items-grid');
    const empty = document.getElementById('empty-state');
    if (!items || items.length === 0) {
        grid.innerHTML = '';
        empty.style.display = '';
        return;
    }
    empty.style.display = 'none';
    grid.innerHTML = items.map(item => `
        <div class="item-card" onclick="openBuyModal('${escJs(item.key)}','${escJs(item.name)}',${item.price},'${escJs(item.priceFormatted)}','${escJs(item.currency)}','${escJs(item.material)}')">
            <div class="item-card-header">
                <div class="item-icon">
                    <img src="${IMG_BASE}${item.material?.toLowerCase() || 'stone'}"
                         onerror="handleItemIconError(this, '${escJs(item.material || 'stone')}')" alt="">
                </div>
                <div class="item-name">${esc(item.name)}</div>
            </div>
            <div class="item-card-footer">
                <span class="item-price">${item.priceFormatted}</span>
            </div>
        </div>
    `).join('');
}

function updateBreadcrumb(name) {
    document.getElementById('breadcrumb').innerHTML = `<span class="breadcrumb-item active">${esc(name)}</span>`;
}

// ── Buy Modal ──────────────────────────────────────────────────

let modalItem = {};
let currentBuyContext = null;

function openBuyModal(key, name, price, formatted, currency, material, maxQty = 64) {
    modalItem = { key, name, price, formatted, currency, material };
    currentBuyContext = { maxQty };
    document.getElementById('modal-item-name').textContent = name;
    document.getElementById('modal-item-price').textContent = formatted;
    document.getElementById('modal-icon').innerHTML =
        `<img src="${IMG_BASE}${material?.toLowerCase() || 'stone'}" width="36" height="36" style="image-rendering:pixelated"
              onerror="handleItemIconError(this, '${escJs(material || 'stone')}')">`;
    document.getElementById('amount-input').value = 1;
    document.getElementById('amount-input').max = maxQty;
    updateModalTotal();
    updateQtyButtonStates('amount-input', 'amount-minus', 'amount-plus', maxQty);
    document.getElementById('buy-modal').style.display = 'flex';
    document.getElementById('buy-modal').classList.remove('closing');
}

function updateModalTotal() {
    const amt = parseInt(document.getElementById('amount-input').value) || 1;
    const total = modalItem.price * amt;
    document.getElementById('modal-total').textContent =
        `${total.toLocaleString(undefined, { minimumFractionDigits: 2 })} ${modalItem.currency}`;
}

document.getElementById('modal-close')?.addEventListener('click', () => {
    closeModal('buy-modal');
});
document.getElementById('modal-cancel')?.addEventListener('click', () => {
    closeModal('buy-modal');
});
document.getElementById('amount-minus')?.addEventListener('click', () => {
    const inp = document.getElementById('amount-input');
    inp.value = Math.max(1, (parseInt(inp.value) || 1) - 1);
    updateModalTotal();
    updateQtyButtonStates('amount-input', 'amount-minus', 'amount-plus', currentBuyContext?.maxQty || 1);
});
document.getElementById('amount-plus')?.addEventListener('click', () => {
    const inp = document.getElementById('amount-input');
    inp.value = Math.min(currentBuyContext?.maxQty || 64, (parseInt(inp.value) || 1) + 1);
    updateModalTotal();
    updateQtyButtonStates('amount-input', 'amount-minus', 'amount-plus', currentBuyContext?.maxQty || 1);
});
document.getElementById('amount-input')?.addEventListener('input', () => {
    updateModalTotal();
    updateQtyButtonStates('amount-input', 'amount-minus', 'amount-plus', currentBuyContext?.maxQty || 1);
});
document.getElementById('modal-buy')?.addEventListener('click', () => {
    showToast('success', 'Preview mode - purchases disabled');
    closeModal('buy-modal');
});

// ── Auction Page ───────────────────────────────────────────────

function renderAuctions(auctions, categoryName) {
    const grid = document.getElementById('auction-grid');
    const empty = document.getElementById('auction-empty');
    const emptyTitle = document.getElementById('auction-empty-title');
    const emptySub = document.getElementById('auction-empty-sub');
    if (!auctions || auctions.length === 0) {
        grid.innerHTML = '';
        if (categoryName) {
            emptyTitle.textContent = `No auctions in ${categoryName}`;
            emptySub.textContent = 'No items are currently listed in this category. Check back later!';
        } else {
            emptyTitle.textContent = 'No active auctions';
            emptySub.textContent = 'Check back later or list items in-game.';
        }
        empty.style.display = '';
        empty.classList.remove('fade-in');
        void empty.offsetWidth; // trigger reflow
        empty.classList.add('fade-in');
        return;
    }
    empty.style.display = 'none';
    empty.classList.remove('fade-in');
    grid.innerHTML = auctions.map(a => {
        const remaining = a.expiration - Date.now();
        const timeStr = remaining > 0 ? formatDuration(remaining) : 'Expired';
        const isExpiring = remaining > 0 && remaining < 300000;
        return `
        <div class="auction-card">
            <div class="auction-tag ${a.isBin ? 'bin' : 'bid'}">${a.isBin ? 'BIN' : 'BID'}</div>
            <div class="auction-card-header">
                <div class="auction-item-icon">
                    <img src="${IMG_BASE}${a.material?.toLowerCase() || 'stone'}"
                         onerror="handleItemIconError(this, '${escJs(a.material || 'stone')}')" alt="">
                </div>
                <div class="auction-item-info">
                    <div class="auction-item-name">${esc(a.itemName)}</div>
                    <div class="auction-item-amount">${a.amount > 1 ? `x${a.amount}` : ''} by ${esc(a.seller)}</div>
                </div>
            </div>
            <div class="auction-details">
                <div class="auction-detail-row">
                    <span class="auction-detail-label">${a.isBin ? 'Price' : 'Current Bid'}</span>
                    <span class="auction-price-value">${a.currencySymbol}${a.price.toLocaleString()}${a.amount > 1 ? ' / ea' : ''}</span>
                </div>
                ${a.highestBidder ? `
                <div class="auction-detail-row">
                    <span class="auction-detail-label">Top Bidder</span>
                    <span class="auction-detail-value">${esc(a.highestBidder)}</span>
                </div>` : ''}
            </div>
            <div class="auction-timer ${isExpiring ? 'expiring' : ''}">
                ${ICONS.CLOCK} ${timeStr}
            </div>
            <button class="btn-buy"
                style="margin: 10px 15px 15px; width: calc(100% - 30px); font-size: 13px; padding: 10px;"
                onclick="openAuctionModal(${a.id}, ${a.isBin}, '${escJs(a.itemName)}', '${escJs(a.material || 'stone')}', ${a.price}, '${escJs(a.currencySymbol)}', ${a.amount})">
                ${a.isBin ? 'Buy It Now' : 'Place Bid'}
            </button>
        </div>`;
    }).join('');
}

function formatDuration(ms) {
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const h = Math.floor(m / 60);
    const d = Math.floor(h / 24);
    if (d > 0) return `${d}d ${h % 24}h`;
    if (h > 0) return `${h}h ${m % 60}m`;
    if (m > 0) return `${m}m ${s % 60}s`;
    return `${s}s`;
}

// ── Auction Modal with Quantity ────────────────────────────────

function openAuctionModal(id, isBin, name, material, price, currencyStr, amount) {
    const maxQty = amount || 1;
    currentAuctionContext = { id, isBin, price, currency: currencyStr, maxQty };

    document.getElementById('auction-modal-title').textContent = isBin ? 'Buy It Now' : 'Place Bid';
    document.getElementById('auction-modal-item-name').textContent = name;
    document.getElementById('auction-modal-item-price').textContent = isBin
        ? `Price: ${currencyStr}${price.toLocaleString()} each`
        : `Current: ${currencyStr}${price.toLocaleString()} each`;

    const iconEl = document.getElementById('auction-modal-icon');
    iconEl.innerHTML = `<img src="${IMG_BASE}${escJs(material)}" onerror="handleItemIconError(this, '${escJs(material)}', true)">`;

    // Quantity selector - show only if stack > 1
    const qtyInput = document.getElementById('auction-qty-input');
    qtyInput.value = 1;
    qtyInput.max = maxQty;
    updateQtyButtonStates('auction-qty-input', 'auction-qty-minus', 'auction-qty-plus', maxQty);
    const qtySelector = document.getElementById('auction-quantity-selector');
    qtySelector.style.display = maxQty > 1 ? '' : 'none';

    // Update label: BIN shows "Price", BID shows "Your Bid"
    document.getElementById('auction-amount-label').textContent = isBin ? 'Price (per item)' : 'Your Bid (per item)';

    // Bid input
    const input = document.getElementById('auction-amount-input');
    if (isBin) {
        input.value = price;
        input.disabled = true;
        document.getElementById('auction-modal-btn-text').textContent = 'Confirm Purchase';
    } else {
        input.value = price + 1;
        input.min = price + 0.1;
        input.disabled = false;
        document.getElementById('auction-modal-btn-text').textContent = 'Confirm Bid';
    }

    updateAuctionTotal();
    document.getElementById('auction-modal').style.display = 'flex';
    document.getElementById('auction-modal').classList.remove('closing');
}

function updateAuctionTotal() {
    if (!currentAuctionContext) return;
    const qty = parseInt(document.getElementById('auction-qty-input').value) || 1;
    const bidPerItem = parseFloat(document.getElementById('auction-amount-input').value) || 0;
    const total = qty * bidPerItem;
    const totalEl = document.getElementById('auction-modal-total');
    if (totalEl) totalEl.textContent = `${currentAuctionContext.currency}${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

document.getElementById('auction-modal-close')?.addEventListener('click', () => {
    closeModal('auction-modal');
});
document.getElementById('auction-modal-cancel')?.addEventListener('click', () => {
    closeModal('auction-modal');
});
document.getElementById('auction-qty-minus')?.addEventListener('click', () => {
    const inp = document.getElementById('auction-qty-input');
    inp.value = Math.max(1, (parseInt(inp.value) || 1) - 1);
    updateAuctionTotal();
    updateQtyButtonStates('auction-qty-input', 'auction-qty-minus', 'auction-qty-plus', currentAuctionContext?.maxQty || 1);
});
document.getElementById('auction-qty-plus')?.addEventListener('click', () => {
    if (!currentAuctionContext) return;
    const inp = document.getElementById('auction-qty-input');
    inp.value = Math.min(currentAuctionContext.maxQty, (parseInt(inp.value) || 1) + 1);
    updateAuctionTotal();
    updateQtyButtonStates('auction-qty-input', 'auction-qty-minus', 'auction-qty-plus', currentAuctionContext?.maxQty || 1);
});
document.getElementById('auction-qty-input')?.addEventListener('input', () => {
    updateAuctionTotal();
    updateQtyButtonStates('auction-qty-input', 'auction-qty-minus', 'auction-qty-plus', currentAuctionContext?.maxQty || 1);
});
document.getElementById('auction-amount-input')?.addEventListener('input', updateAuctionTotal);

document.getElementById('auction-modal-submit')?.addEventListener('click', () => {
    showToast('success', 'Preview mode - auctions disabled');
    closeModal('auction-modal');
});

// ── Orders Page ────────────────────────────────────────────────

function renderOrders(orders) {
    const body = document.getElementById('orders-body');
    const empty = document.getElementById('orders-empty');
    if (!orders || orders.length === 0) {
        body.innerHTML = '';
        empty.style.display = '';
        document.getElementById('orders-table-wrap').style.display = 'none';
        return;
    }
    empty.style.display = 'none';
    document.getElementById('orders-table-wrap').style.display = '';
    body.innerHTML = orders.map(o => {
        const pct = o.amountRequested > 0 ? Math.round((o.amountFilled / o.amountRequested) * 100) : 0;
        const statusClass = o.status === 'ACTIVE' ? 'active' : o.status === 'FILLED' ? 'filled' : 'cancelled';
        return `
        <tr>
            <td>
                <div class="order-item-cell">
                    <img class="order-item-icon" src="${IMG_BASE}${o.material?.toLowerCase() || 'stone'}"
                         loading="lazy" onerror="handleItemIconError(this, '${escJs(o.material || 'stone')}', true)" alt="">
                    <span class="order-item-name">${esc(o.itemName)}</span>
                </div>
            </td>
            <td>${esc(o.buyer)}</td>
            <td style="color:var(--accent);font-weight:600">${o.currencySymbol}${o.pricePerPiece.toLocaleString()}</td>
            <td>
                <div class="order-progress-wrap">
                    <div class="order-progress-text">${o.amountFilled} / ${o.amountRequested}</div>
                    <div class="order-progress-bar">
                        <div class="order-progress-fill" style="width:${pct}%"></div>
                    </div>
                </div>
            </td>
            <td>
                <span class="order-status ${statusClass}">${o.status}</span>
            </td>
        </tr>`;
    }).join('');
}

// ── Stocks Page ────────────────────────────────────────────────

function renderStocks(stocks) {
    const body = document.getElementById('stocks-body');
    if (!stocks || stocks.length === 0) {
        body.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:40px;color:var(--text-muted)">No price data available</td></tr>';
        return;
    }
    body.innerHTML = stocks.map(s => {
        const changeClass = s.change > 0.5 ? 'up' : s.change < -0.5 ? 'down' : 'neutral';
        const changeStr = s.change > 0 ? `+${s.change.toFixed(1)}%` : `${s.change.toFixed(1)}%`;
        const arrow = s.change > 0.5 ? ICONS.ARROW_UP : s.change < -0.5 ? ICONS.ARROW_DOWN : ICONS.ARROW_FLAT;
        return `
        <tr onclick="showToast('success', 'Preview mode - charts disabled')">
            <td>
                <div class="stock-item-cell">
                    <img class="stock-item-icon" src="${IMG_BASE}${s.material?.toLowerCase() || 'stone'}"
                         loading="lazy" onerror="handleItemIconError(this, '${escJs(s.material || 'stone')}', true)" alt="">
                    <span>${esc(s.name)}</span>
                </div>
            </td>
            <td style="color:var(--accent);font-weight:600">${s.buyPrice > 0 ? s.currencySymbol + s.buyPrice.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '--'}</td>
            <td style="font-weight:500">${s.sellPrice > 0 ? s.currencySymbol + s.sellPrice.toLocaleString(undefined, { maximumFractionDigits: 2 }) : '--'}</td>
            <td><span class="stock-change ${changeClass}">${arrow} ${changeStr}</span></td>
        </tr>`;
    }).join('');
}

// ── Utilities ──────────────────────────────────────────────────

function handleItemIconError(img, material, hideOnFail = false) {
    let attempt = parseInt(img.dataset.fallback || '0');
    if (attempt < 1) {
        img.src = `https://assets.mcasset.cloud/26.2/assets/minecraft/textures/block/${material.toLowerCase()}.png`;
        img.dataset.fallback = attempt + 1;
    } else if (attempt < 2) {
        img.src = `https://assets.mcasset.cloud/26.1/assets/minecraft/textures/item/${material.toLowerCase()}.png`;
        img.dataset.fallback = attempt + 1;
    } else if (attempt < 3) {
        img.src = `https://assets.mcasset.cloud/26.1/assets/minecraft/textures/block/${material.toLowerCase()}.png`;
        img.dataset.fallback = attempt + 1;
    } else if (attempt < 4) {
        img.src = `https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/item/${material.toLowerCase()}.png`;
        img.dataset.fallback = attempt + 1;
    } else if (attempt < 5) {
        img.src = `https://assets.mcasset.cloud/1.21.11/assets/minecraft/textures/block/${material.toLowerCase()}.png`;
        img.dataset.fallback = attempt + 1;
    } else {
        if (hideOnFail) {
            img.style.display = 'none';
        } else {
            const fallback = document.createElement('div');
            fallback.innerHTML = ICONS.BOX.trim();
            img.replaceWith(fallback.firstElementChild || fallback);
        }
    }
}

function showToast(type, msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

function esc(str) {
    return String(str)
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;');
}

function escJs(str) {
    return String(str)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '\\"')
        .replace(/`/g, '\\`')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r');
}

// Search functionality
document.getElementById('search-input')?.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    if (q.length >= 2) {
        const allItems = Object.values(FAKE_ITEMS).flat();
        const filtered = allItems.filter(i => i.name.toLowerCase().includes(q));
        renderItems(filtered);
        updateBreadcrumb(`Search: "${q}"`);
        document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    } else if (q.length === 0) {
        selectCategory(currentCategory, document.querySelector('.sidebar-item.active span')?.textContent || 'All');
    }
});

let currentAuctionCategory = null;

function renderAuctionCategories(cats) {
    const container = document.getElementById('auction-sidebar-categories');
    if (!container) return;
    container.innerHTML = '';

    // Special auction-type filters
    const specialFilters = [
        { id: '__all', name: 'All Listings', count: FAKE_AUCTIONS.length },
        { id: '__bin', name: 'BIN Listings', count: FAKE_AUCTIONS.filter(a => a.isBin).length },
        { id: '__bid', name: 'BID Listings', count: FAKE_AUCTIONS.filter(a => !a.isBin).length },
    ];

    specialFilters.forEach(f => {
        const el = document.createElement('div');
        el.className = 'sidebar-item';
        el.dataset.catId = f.id;
        el.dataset.special = 'true';
        el.innerHTML = `
            <span style="font-weight:600;color:var(--text-primary)">${esc(f.name)}</span>
            <span class="item-count">${f.count}</span>
        `;
        el.addEventListener('click', () => selectAuctionCategory(f.id, f.name));
        container.appendChild(el);
    });

    // Separator
    const sep = document.createElement('div');
    sep.className = 'sidebar-separator';
    container.appendChild(sep);

    // Item categories
    cats.forEach(cat => {
        const el = document.createElement('div');
        el.className = 'sidebar-item';
        el.dataset.catId = cat.id;
        el.innerHTML = `
            <img src="${IMG_BASE}${cat.icon?.toLowerCase() || 'stone'}" width="20" height="20"
                 style="image-rendering:pixelated" onerror="this.style.display='none'">
            <span>${esc(cat.name)}</span>
            <span class="item-count">${cat.itemCount}</span>
        `;
        el.addEventListener('click', () => selectAuctionCategory(cat.id, cat.name));
        container.appendChild(el);
    });
}

function selectAuctionCategory(catId, catName) {
    currentAuctionCategory = catId;
    document.getElementById('auction-search').value = '';
    document.querySelectorAll('#auction-sidebar-categories .sidebar-item').forEach(s => {
        s.classList.toggle('active', s.dataset.catId === catId);
    });
    let filtered;
    if (catId === '__all') {
        filtered = FAKE_AUCTIONS;
    } else if (catId === '__bin') {
        filtered = FAKE_AUCTIONS.filter(a => a.isBin);
    } else if (catId === '__bid') {
        filtered = FAKE_AUCTIONS.filter(a => !a.isBin);
    } else {
        filtered = FAKE_AUCTIONS.filter(a => a.categoryId === catId || a.category === catName);
    }
    renderAuctions(filtered, catName);
}
function initAuctionSidebar() {
    if (FAKE_CATEGORIES && FAKE_CATEGORIES.length > 0) {
        renderAuctionCategories(FAKE_CATEGORIES);
        if (!currentAuctionCategory) {
            selectAuctionCategory('__all', 'All Listings');
        }
    }
}

document.getElementById('auction-search')?.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    currentAuctionCategory = null;
    document.querySelectorAll('#auction-sidebar-categories .sidebar-item').forEach(s => s.classList.remove('active'));
    const filtered = FAKE_AUCTIONS.filter(a => a.itemName.toLowerCase().includes(q) || a.seller.toLowerCase().includes(q));
    renderAuctions(filtered, null);
});

document.getElementById('stocks-search')?.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    const filtered = FAKE_STOCKS.filter(s => s.name.toLowerCase().includes(q));
    renderStocks(filtered);
});

// Click overlay backdrop to close
document.getElementById('buy-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('buy-modal');
});
document.getElementById('auction-modal')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('auction-modal');
});

// ── Custom Select Dropdown ──────────────────────────────────────
let currentStocksSort = 'name';

function initCustomSelects() {
    document.querySelectorAll('.custom-select').forEach(sel => {
        const trigger = sel.querySelector('.custom-select-trigger');
        const options = sel.querySelector('.custom-select-options');
        const valueSpan = sel.querySelector('.custom-select-value');
        if (!trigger || !options) return;

        // Toggle open/close
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = trigger.getAttribute('aria-expanded') === 'true';
            closeAllCustomSelects();
            if (!isOpen) {
                trigger.setAttribute('aria-expanded', 'true');
                options.classList.add('open');
            }
        });

        // Option click
        options.querySelectorAll('li').forEach(li => {
            li.addEventListener('click', () => {
                const val = li.getAttribute('data-value');
                const text = li.textContent;
                valueSpan.textContent = text;
                options.querySelectorAll('li').forEach(l => l.classList.remove('selected'));
                li.classList.add('selected');
                trigger.setAttribute('aria-expanded', 'false');
                options.classList.remove('open');

                // Apply sort
                currentStocksSort = val;
                applyStocksSort();
            });
        });
    });

    // Close on outside click
    document.addEventListener('click', closeAllCustomSelects);
}

function closeAllCustomSelects() {
    document.querySelectorAll('.custom-select-trigger[aria-expanded="true"]').forEach(t => {
        t.setAttribute('aria-expanded', 'false');
        t.nextElementSibling?.classList.remove('open');
    });
}

function applyStocksSort() {
    let stocks = [...FAKE_STOCKS];
    switch (currentStocksSort) {
        case 'name':
            stocks.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'buyPrice':
            stocks.sort((a, b) => (b.buyPrice || 0) - (a.buyPrice || 0));
            break;
        case 'sellPrice':
            stocks.sort((a, b) => (b.sellPrice || 0) - (a.sellPrice || 0));
            break;
        case 'change':
            stocks.sort((a, b) => (b.change || 0) - (a.change || 0));
            break;
    }
    renderStocks(stocks);
}

