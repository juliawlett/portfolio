/*
  =====================================
  CONFIGURAÇÃO FÁCIL — EDITE APENAS AQUI
  =====================================
*/
const CONFIG = {
    name: "SUAPIZZA",
    whatsapp: "5511999999999",
    phoneDisplay: "(11) 99999-9999",
    address: "Rua das Delícias, 125 · Centro",
    hours: "Terça a domingo · 18h às 0h",
    pixKey: "suachave@suachave.com",
    hero: {
        eyebrow: "O sabor que reúne",
        title: "A Pizza Perfeita Para o Seu Momento",
        description: "Massa artesanal de longa fermentação, ingredientes frescos e o calor inconfundível do nosso forno à lenha — direto para a sua mesa."
    },
    quickFacts: ["Entrega rápida", "Forno à lenha", "Ingredientes premium", "Atendimento até 0h"],
    about: {
        title: "Uma tradição feita para ser compartilhada.",
        paragraphs: [
            "Na SUAPIZZA, cada receita começa com tempo, técnica e um carinho que se sente na primeira mordida. Nossa massa passa por uma fermentação cuidadosa, ganhando leveza, aroma e uma borda irresistível.",
            "Unimos ingredientes selecionados à paixão de servir para criar pizzas que marcam encontros, celebrações e noites comuns que merecem ser especiais."
        ],
        signature: "Da nossa família para a sua mesa."
    },
    footerDescription: "Pizzas artesanais, bons ingredientes e momentos que ficam na memória.",
    redesSociais: {
        instagram: "https://instagram.com/",
        facebook: "https://facebook.com/",
        tiktok: "https://tiktok.com/"
    },
    promocao: {
        titulo: "Combo Família: 2 Pizzas Grandes + Refrigerante",
        descricao: "A combinação perfeita para reunir quem você ama em volta de uma mesa cheia de sabor.",
        preco: 79.90,
        itemNome: "Combo Família",
        imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=80"
    },
    pizzas: [
        { nome: "Margherita Suprema", tag: "Mais Pedida", descricao: "Molho italiano, muçarela de búfala, tomate confit, manjericão fresco e azeite extra virgem.", preco: 49.90, imagem: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85" },
        { nome: "Pepperoni Di Casa", tag: "Favorita", descricao: "Pepperoni artesanal, blend de muçarelas, molho de tomate assado e toque de orégano.", preco: 54.90, imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=85" },
        { nome: "Trufa & Funghi", tag: "Especial da Casa", descricao: "Cogumelos salteados, creme de trufas, parmesão curado e rúcula fresca.", preco: 62.90, imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=85" },
        { nome: "Parma & Burrata", tag: "Premium", descricao: "Presunto parma, burrata cremosa, pesto de manjericão, tomate-cereja e folhas verdes.", preco: 64.90, imagem: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=700&q=85" },
        { nome: "Calabresa Nobre", tag: "Clássica", descricao: "Calabresa especial fatiada, cebola roxa, azeitonas, muçarela e molho artesanal.", preco: 48.90, imagem: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=700&q=85" },
        { nome: "Quatro Queijos", tag: "Cremosa", descricao: "Muçarela, gorgonzola, parmesão, provolone e finalização dourada no forno à lenha.", preco: 56.90, imagem: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=85" },
        { nome: "Veggie Mediterrânea", tag: "Nova", descricao: "Abobrinha grelhada, berinjela, pimentões, tomate, azeitonas e pesto da casa.", preco: 51.90, imagem: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=700&q=85" },
        { nome: "Doce Tentação", tag: "Sobremesa", descricao: "Creme de avelã, morangos frescos, chocolate belga e crocante de castanhas.", preco: 46.90, imagem: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85" }
    ]
};

const money = value => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const cart = [];
const icons = {
    "Entrega rápida": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"></path><circle cx="7" cy="19" r="1.5"></circle><circle cx="18" cy="19" r="1.5"></circle></svg>',
    "Forno à lenha": '<svg class="icon" viewBox="0 0 24 24"><path d="M5 21V10a7 7 0 0 1 14 0v11z"></path><path d="M9 21v-4a3 3 0 0 1 6 0v4M12 3c-1 2 1 2 0 4"></path></svg>',
    "Ingredientes premium": '<svg class="icon" viewBox="0 0 24 24"><path d="M12 21V7M12 7C8 7 6 5 5 2c4 0 7 2 7 5M12 12c4 0 6-2 7-5-4 0-7 2-7 5"></path></svg>',
    "Atendimento até 0h": '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>'
};
const benefitData = [
    { title: "Massa artesanal", text: "Fermentação lenta para uma massa leve, aerada e cheia de personalidade.", icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 20c1-6 3-11 8-16 3 5 5 10 8 16H4Z"></path><path d="M8 17c1-2 2-4 4-6M14 17c-1-2-2-4-4-6"></path></svg>' },
    { title: "Ingredientes frescos", text: "Selecionamos cada ingrediente como quem escolhe o melhor para a própria mesa.", icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 21V7M12 7C8 7 6 5 5 2c4 0 7 2 7 5M12 12c4 0 6-2 7-5-4 0-7 2-7 5"></path></svg>' },
    { title: "Forno à lenha", text: "O calor intenso e o toque defumado que tornam cada borda inesquecível.", icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 21V10a7 7 0 0 1 14 0v11z"></path><path d="M9 21v-4a3 3 0 0 1 6 0v4M12 3c-1 2 1 2 0 4"></path></svg>' },
    { title: "Entrega rápida", text: "Cuidado em cada etapa para sua pizza chegar quente, inteira e no ponto.", icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"></path><circle cx="7" cy="19" r="1.5"></circle><circle cx="18" cy="19" r="1.5"></circle></svg>' }
];

function populateContent() {
    document.title = `${CONFIG.name} | Pizza artesanal`;
    document.querySelectorAll("[data-config]").forEach(element => { element.textContent = CONFIG[element.dataset.config]; });
    document.querySelector("[data-hero-eyebrow]").textContent = CONFIG.hero.eyebrow;
    document.querySelector("[data-hero-title]").textContent = CONFIG.hero.title;
    document.querySelector("[data-hero-copy]").textContent = CONFIG.hero.description;
    document.querySelector("[data-promo-title]").textContent = CONFIG.promocao.titulo;
    document.querySelector("[data-promo-description]").textContent = CONFIG.promocao.descricao;
    document.querySelector("[data-promo-price]").textContent = `por apenas ${money(CONFIG.promocao.preco)}`;
    document.querySelector("[data-about-title]").textContent = CONFIG.about.title;
    document.querySelector("[data-about-copy]").innerHTML = CONFIG.about.paragraphs.map(text => `<p>${text}</p>`).join("");
    document.querySelector("[data-about-signature]").textContent = CONFIG.about.signature;
    document.querySelector("[data-footer-description]").textContent = CONFIG.footerDescription;
    document.querySelector("[data-copyright]").textContent = `© 2026 ${CONFIG.name}. Todos os direitos reservados.`;
    document.querySelector("#pix-key").textContent = CONFIG.pixKey;
    document.querySelectorAll("[data-whatsapp-link], [data-phone-link]").forEach(link => {
        link.href = `https://wa.me/${CONFIG.whatsapp}`;
    });
    document.querySelector("[data-quick-facts]").innerHTML = CONFIG.quickFacts.map(fact => `<div class="quick-fact">${icons[fact] || ""}<span>${fact}</span></div>`).join("");
    document.querySelector("#socials").innerHTML = Object.entries(CONFIG.redesSociais).map(([network, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${network}">${network.slice(0, 1).toUpperCase()}</a>`).join("");
}

function renderPizzas() {
    const pizzaGrid = document.querySelector("#pizza-grid");
    pizzaGrid.innerHTML = CONFIG.pizzas.map((pizza, index) => `
        <article class="pizza-card reveal" style="transition-delay: ${Math.min(index % 4, 3) * 70}ms">
          <div class="pizza-card-image"><img src="${pizza.imagem}" alt="Pizza ${pizza.nome}" loading="lazy"><span class="pizza-tag">${pizza.tag}</span></div>
          <div class="pizza-card-body"><h3>${pizza.nome}</h3><p>${pizza.descricao}</p><div class="pizza-card-bottom"><span class="pizza-price">${money(pizza.preco)}</span><button class="btn btn-primary" type="button" data-add-pizza="${index}">Adicionar ao Pedido</button></div></div>
        </article>`).join("");
    observeReveals();
}

function renderBenefits() {
    document.querySelector("#benefit-grid").innerHTML = benefitData.map((benefit, index) => `<article class="benefit-card reveal" style="transition-delay:${index * 80}ms"><div class="benefit-icon">${benefit.icon}</div><div><h3>${benefit.title}</h3><p>${benefit.text}</p></div></article>`).join("");
    observeReveals();
}

function addItem(item) {
    const existing = cart.find(cartItem => cartItem.id === item.id);
    if (existing) existing.quantity += 1;
    else cart.push({ ...item, quantity: 1 });
    renderCart();
    openCart();
}

function changeQuantity(id, change) {
    const item = cart.find(cartItem => cartItem.id === id);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) cart.splice(cart.indexOf(item), 1);
    renderCart();
}

function getTotal() { return cart.reduce((total, item) => total + item.price * item.quantity, 0); }

function renderCart() {
    const itemsElement = document.querySelector("#cart-items");
    const checkout = document.querySelector("#checkout");
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector("[data-cart-count]");
    badge.textContent = count;
    badge.classList.toggle("visible", count > 0);
    document.querySelector("#cart-total").textContent = money(getTotal());
    checkout.classList.toggle("hidden", cart.length === 0);
    if (!cart.length) {
        itemsElement.innerHTML = '<div class="empty-cart"><svg class="icon" viewBox="0 0 24 24"><path d="M3 3h2l2.2 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L20 7H6"></path><circle cx="10" cy="20" r="1"></circle><circle cx="17" cy="20" r="1"></circle></svg><br>Seu carrinho está esperando uma pizza irresistível.</div>';
        return;
    }
    itemsElement.innerHTML = cart.map(item => `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div><h3>${item.name}</h3><span class="cart-item-price">${money(item.price)}</span><div class="quantity-controls"><button type="button" data-change-quantity="${item.id}" data-change="-1" aria-label="Diminuir quantidade">−</button><span>${item.quantity}</span><button type="button" data-change-quantity="${item.id}" data-change="1" aria-label="Aumentar quantidade">+</button></div></div><span class="cart-item-total">${money(item.price * item.quantity)}</span></div>`).join("");
}

function openCart() {
    document.body.classList.add("cart-open");
    document.querySelector(".cart-overlay").classList.add("open");
    document.querySelector(".cart-drawer").classList.add("open");
    document.querySelector(".cart-drawer").setAttribute("aria-hidden", "false");
}
function closeCart() {
    document.body.classList.remove("cart-open");
    document.querySelector(".cart-overlay").classList.remove("open");
    document.querySelector(".cart-drawer").classList.remove("open");
    document.querySelector(".cart-drawer").setAttribute("aria-hidden", "true");
}

function finishOrder() {
    const customer = {
        name: document.querySelector("#customer-name").value.trim(),
        number: document.querySelector("#customer-number").value.trim(),
        neighborhood: document.querySelector("#customer-neighborhood").value.trim(),
        city: document.querySelector("#customer-city").value.trim(),
        payment: document.querySelector("#payment-method").value
    };
    if (!customer.name || !customer.number || !customer.neighborhood || !customer.city) {
        alert("Preencha nome, número, bairro e cidade para finalizar seu pedido.");
        return;
    }
    const orderLines = cart.map(item => `• ${item.quantity}x ${item.name} — ${money(item.price * item.quantity)}`).join("\n");
    const payment = customer.payment === "pix" ? `Pix (chave: ${CONFIG.pixKey})` : "Pagar na entrega (Cartão/Dinheiro)";
    const message = `Olá, ${CONFIG.name}! Quero fazer este pedido:%0A%0A${orderLines}%0A%0A*Total: ${money(getTotal())}*%0A%0A*Dados de entrega*%0ANome: ${customer.name}%0ANúmero: ${customer.number}%0ABairro: ${customer.neighborhood}%0ACidade: ${customer.city}%0AForma de pagamento: ${payment}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(decodeURIComponent(message))}`, "_blank", "noopener");
}

let observer;
function observeReveals() {
    if (!observer) return;
    document.querySelectorAll(".reveal:not(.visible)").forEach(element => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
    populateContent();
    observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
    }), { threshold: .12 });
    renderPizzas();
    renderBenefits();
    renderCart();
    observeReveals();

    document.addEventListener("click", event => {
        const addButton = event.target.closest("[data-add-pizza]");
        const quantityButton = event.target.closest("[data-change-quantity]");
        if (event.target.closest("[data-open-cart]")) openCart();
        if (event.target.closest("[data-close-cart]")) closeCart();
        if (addButton) {
            const pizza = CONFIG.pizzas[Number(addButton.dataset.addPizza)];
            addItem({ id: `pizza-${addButton.dataset.addPizza}`, name: pizza.nome, price: pizza.preco, image: pizza.imagem });
        }
        if (event.target.closest("[data-add-combo]")) addItem({ id: "combo-familia", name: CONFIG.promocao.itemNome, price: CONFIG.promocao.preco, image: CONFIG.promocao.imagem });
        if (quantityButton) changeQuantity(quantityButton.dataset.changeQuantity, Number(quantityButton.dataset.change));
    });
    document.querySelector("#payment-method").addEventListener("change", event => document.querySelector("#pix-box").classList.toggle("visible", event.target.value === "pix"));
    document.querySelector("#finish-order").addEventListener("click", finishOrder);
    window.addEventListener("scroll", () => document.querySelector(".site-header").classList.toggle("scrolled", window.scrollY > 10), { passive: true });
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeCart(); });
});
