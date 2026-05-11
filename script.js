const menu = [
    {
        id: 1,
        name: "Pizza Margherita",
        category: "Pizza",
        price: 9.5,
        veggie: true,
        ingredients: ["Tomato", "Mozzarella", "Basil"],
        options: [
            { key: "extra_mozzarella", label: "Extra mozzarella", type: "extra", price: 2.0 },
            { key: "extra_garlic_oil", label: "Extra garlic oil", type: "extra", price: 1.5 },
            { key: "extra_chili_flakes", label: "Extra chili flakes", type: "extra", price: 0.5 },
            { key: "no_basil", label: "Without basil", type: "omit", price: 0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 }
        ],
        maxPerOrder: 5,
        available: true,
        tags: ["classic", "mild"]
    },
    {
        id: 2,
        name: "Pizza Pepperoni",
        category: "Pizza",
        price: 11.0,
        veggie: false,
        ingredients: ["Tomato", "Mozzarella", "Pepperoni"],
        options: [
            { key: "extra_pepperoni", label: "Extra pepperoni", type: "extra", price: 2.0 },
            { key: "extra_cheese", label: "Extra cheese", type: "extra", price: 2.0 },
            { key: "garlic_dip", label: "Garlic dip", type: "extra", price: 1.0 },
            { key: "no_pepperoni", label: "Without pepperoni", type: "omit", price: 0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 },
            { key: "no_tomato_sauce", label: "Without tomato sauce", type: "omit", price: 0 }
        ],
        maxPerOrder: 4,
        available: true,
        tags: ["spicy", "popular"]
    },
    {
        id: 3,
        name: "Pizza Funghi",
        category: "Pizza",
        price: 10.5,
        veggie: true,
        ingredients: ["Tomato", "Mozzarella", "Mushrooms"],
        options: [
            { key: "extra_mushrooms", label: "Extra Mushrooms", type: "extra", price: 1.5 },
            { key: "truffle_oil", label: "Truffle oil", type: "extra", price: 2.5 },
            { key: "extra_parmesan", label: "Extra parmesan", type: "extra", price: 1.5 },
            { key: "no_mushrooms", label: "Without Mushrooms", type: "omit", price: 0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 }
        ],
        maxPerOrder: 4,
        available: true,
        tags: ["umami", "vegetarian"]
    },
    {
        id: 4,
        name: "Spaghetti Bolognese",
        category: "Pasta",
        price: 12.0,
        veggie: false,
        ingredients: ["Spaghetti", "Beef", "Tomato sauce", "Parmesan", "Onion"],
        options: [
            { key: "extra_beef", label: "Extra beef", type: "extra", price: 2.0 },
            { key: "extra_parmesan", label: "Extra parmesan", type: "extra", price: 1.5 },
            { key: "extra_sauce", label: "Extra sauce", type: "extra", price: 1.0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 },
            { key: "no_onions", label: "Without Onion", type: "omit", price: 0 }
        ],
        maxPerOrder: 4,
        available: true,
        tags: ["richly filled"]
    },
    {
        id: 5,
        name: "Tagliatelle Carbonara",
        category: "Pasta",
        price: 13.0,
        veggie: false,
        ingredients: ["Tagliatelle", "Pancetta", "Egg", "Parmesan", "Pepper"],
        options: [
            { key: "extra_pancetta", label: "Extra pancetta", type: "extra", price: 2.0 },
            { key: "extra_parmesan", label: "Extra parmesan", type: "extra", price: 1.5 },
            { key: "cream_splash", label: "Splash of cream", type: "extra", price: 0.8 },
            { key: "no_pancetta", label: "Without pancetta", type: "omit", price: 0 },
            { key: "no_pepper", label: "Without pepper", type: "omit", price: 0 }
        ],
        maxPerOrder: 3,
        available: true,
        tags: ["creamy"]
    },
    {
        id: 6,
        name: "Penne Arrabbiata",
        category: "Pasta",
        price: 11.0,
        veggie: true,
        ingredients: ["Penne", "Tomato sauce", "Garlic", "Chili", "Parsley"],
        options: [
            { key: "extra_chili", label: "Extra chili", type: "extra", price: 0.5 },
            { key: "extra_garlic", label: "Extra garlic", type: "extra", price: 0.5 },
            { key: "extra_parmesan", label: "Extra parmesan", type: "extra", price: 1.5 },
            { key: "no_chili", label: "Without chili", type: "omit", price: 0 },
            { key: "no_garlic", label: "Without garlic", type: "omit", price: 0 }
        ],
        maxPerOrder: 4,
        available: true,
        tags: ["spicy", "vegan option"]
    },
    {
        id: 7,
        name: "Caesar salad",
        category: "Salad",
        price: 8.5,
        veggie: false,
        ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing", "Chicken"],
        options: [
            { key: "extra_chicken", label: "Extra chicken", type: "extra", price: 2.0 },
            { key: "extra_parmesan", label: "Extra parmesan", type: "extra", price: 1.5 },
            { key: "no_croutons", label: "Without croutons", type: "omit", price: 0 },
            { key: "no_dressing", label: "Without dressing", type: "omit", price: 0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 }
        ],
        maxPerOrder: 5,
        available: true,
        tags: ["fresh"]
    },
    {
        id: 8,
        name: "Greek salad",
        category: "Salad",
        price: 8.0,
        veggie: true,
        ingredients: ["Tomato", "Cucumber", "Red onion", "Feta", "Olives", "Oregano"],
        options: [
            { key: "extra_feta", label: "Extra feta", type: "extra", price: 1.5 },
            { key: "extra_olives", label: "Extra olives", type: "extra", price: 1.0 },
            { key: "no_onions", label: "Without onions", type: "omit", price: 0 },
            { key: "no_olives", label: "Without olives", type: "omit", price: 0 },
            { key: "no_cheese", label: "Without cheese", type: "omit", price: 0 }
        ],
        maxPerOrder: 5,
        available: true,
        tags: ["Mediterranean", "vegetarian"]
    },
    {
        id: 9,
        name: "Tiramisu",
        category: "Dessert",
        price: 5.5,
        veggie: true,
        ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "cocoa"],
        options: [
            { key: "extra_cocoa", label: "Extra cocoa", type: "extra", price: 0.3 },
            { key: "extra_mascarpone", label: "Extra mascarpone", type: "extra", price: 1.0 },
            { key: "no_cocoa", label: "Without cocoa", type: "omit", price: 0 },
            { key: "no_coffee", label: "Without coffee", type: "omit", price: 0 }
        ],
        maxPerOrder: 6,
        available: true,
        tags: ["sweet", "classic"]
    },
    {
        id: 10,
        name: "Cheesecake",
        category: "Dessert",
        price: 5.5,
        veggie: true,
        ingredients: ["Cream cheese", "Sugar", "Eggs", "Cookie base"],
        options: [
            { key: "strawberry_coulis", label: "Strawberry coulis", type: "extra", price: 1.0 },
            { key: "extra_cream", label: "Extra cream", type: "extra", price: 0.5 },
            { key: "no_cream", label: "Without cream", type: "omit", price: 0 },
            { key: "no_topping", label: "Without topping", type: "omit", price: 0 }
        ],
        maxPerOrder: 6,
        available: true,
        tags: ["sweet"]
    },
    {
        id: 11,
        name: "Fresh lemonade",
        category: "Drinks",
        price: 3.5,
        veggie: true,
        ingredients: ["Lemon", "Water", "Sugar", "Ice"],
        options: [
            { key: "mint_leaves", label: "Mint leaves", type: "extra", price: 0.5 },
            { key: "large_size", label: "Large size", type: "extra", price: 1.0 },
            { key: "no_ice", label: "Without ice", type: "omit", price: 0 },
            { key: "no_sugar", label: "Without sugar", type: "omit", price: 0 }
        ],
        maxPerOrder: 8,
        available: true,
        tags: ["refreshing"]
    },
    {
        id: 12,
        name: "Espresso",
        category: "Drinks",
        price: 2.5,
        veggie: true,
        ingredients: ["Coffee beans", "Water"],
        options: [
            { key: "double_shot", label: "Double shot", type: "extra", price: 1.0 },
            { key: "lemon_zest", label: "lemon zest", type: "extra", price: 0.3 },
            { key: "no_sugar", label: "Without sugar", type: "omit", price: 0 }
        ],
        maxPerOrder: 8,
        available: true,
        tags: ["hot"]
    }
];

let promoCodes = [
    { code: "WELCOME10", discount: 10, oneTimeUse: false },
    { code: "FIRST20", discount: 20, oneTimeUse: true },
    { code: "SUMMER15", discount: 15, oneTimeUse: false }
];

let cart = [];
let currentPage = "home";
let isAdmin = false;
let appliedPromo = null;

let currentDish = null;
let selectedOptions = [];

let dishOfTheDay = {
    id: 6,
    name: "Penne Arrabbiata",
    price: 11.0,
    description: "Today with extra fresh tomatoes and garlic!"
};

let notificationTimer = null;

const euroFormatter = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR"
});

function formatEuro(amount) {
    return euroFormatter.format(amount);
}

function safeJsonParse(value, fallback) {
    try {
        return JSON.parse(value);
    } catch (err) {
        return fallback;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadFromLocalStorage();
    initializeEventListeners();
    renderDishOfTheDay();
    renderMenu();
    updateCartCount();
});

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem("restaurantCart");
    if (savedCart) {
        cart = safeJsonParse(savedCart, []);
    }

    const savedDish = localStorage.getItem("dishOfTheDay");
    if (savedDish) {
        dishOfTheDay = safeJsonParse(savedDish, dishOfTheDay);
    }
}

function saveCartToLocalStorage() {
    localStorage.setItem("restaurantCart", JSON.stringify(cart));
}

function saveDishOfTheDayToLocalStorage() {
    localStorage.setItem("dishOfTheDay", JSON.stringify(dishOfTheDay));
}

function initializeEventListeners() {
    document.getElementById("btn-home").addEventListener("click", function () {
        navigateTo("home");
    });

    document.getElementById("btn-cart").addEventListener("click", function () {
        navigateTo("cart");
        renderCart();
    });

    document.getElementById("btn-login").addEventListener("click", function () {
        if (isAdmin) {
            showNotification("You are already logged in as an admin.", "success");
        } else {
            navigateTo("login");
        }
    });

    document.getElementById("filter-veggie").addEventListener("change", function () {
        renderMenu();
    });

    document.getElementById("sort-price").addEventListener("change", function () {
        renderMenu();
    });

    document.getElementById("btn-login-submit").addEventListener("click", handleLogin);

    document.getElementById("login-password").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            handleLogin();
        }
    });

    document.getElementById("btn-edit-dotd").addEventListener("click", function () {
        navigateTo("edit-dish");
        populateEditForm();
    });

    document.getElementById("btn-save-dish").addEventListener("click", saveDishOfTheDay);

    document.getElementById("btn-cancel-edit").addEventListener("click", function () {
        navigateTo("home");
    });

    document.getElementById("edit-dish-select").addEventListener("change", handleDishSelectChange);

    document.getElementById("btn-apply-promo").addEventListener("click", applyPromoCode);

    document.getElementById("btn-order").addEventListener("click", completeOrder);

    document.querySelector(".modal-close").addEventListener("click", closeModal);

    document.getElementById("btn-add-to-cart-modal").addEventListener("click", addToCartFromModal);

    document.getElementById("modal-dish-detail").addEventListener("click", function (e) {
        if (e.target.id === "modal-dish-detail") {
            closeModal();
        }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && currentDish) {
            closeModal();
        }
    });
}

function navigateTo(page) {
    currentPage = page;

    const pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove("active");
    }
    document.getElementById("page-" + page).classList.add("active");

    const navButtons = document.querySelectorAll(".nav-btn");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove("active");
    }
    if (page === "home") {
        document.getElementById("btn-home").classList.add("active");
    } else if (page === "cart") {
        document.getElementById("btn-cart").classList.add("active");
    }
}

function showNotification(message, type) {
    const notification = document.getElementById("notification");
    if (!notification) return;

    notification.textContent = message;
    notification.className = "notification";

    if (type === "error") {
        notification.classList.add("error");
    } else if (type === "success") {
        notification.classList.add("success");
    }

    notification.classList.remove("hidden");

    if (notificationTimer) {
        clearTimeout(notificationTimer);
    }
    notificationTimer = setTimeout(function () {
        notification.classList.add("hidden");
    }, 3000);
}

function renderDishOfTheDay() {
    document.getElementById("dotd-name").textContent = dishOfTheDay.name;
    document.getElementById("dotd-description").textContent = dishOfTheDay.description;
    document.getElementById("dotd-price").textContent = formatEuro(dishOfTheDay.price);

    if (isAdmin) {
        document.getElementById("btn-edit-dotd").classList.remove("hidden");
    } else {
        document.getElementById("btn-edit-dotd").classList.add("hidden");
    }
}

function populateEditForm() {
    const select = document.getElementById("edit-dish-select");
    select.innerHTML = '<option value="">-- New dish --</option>';

    for (let i = 0; i < menu.length; i++) {
        const option = document.createElement("option");
        option.value = menu[i].id;
        option.textContent = menu[i].name;
        select.appendChild(option);
    }

    document.getElementById("edit-name").value = dishOfTheDay.name;
    document.getElementById("edit-price").value = dishOfTheDay.price;
    document.getElementById("edit-description").value = dishOfTheDay.description;
}

function handleDishSelectChange() {
    const dishId = document.getElementById("edit-dish-select").value;

    if (dishId === "") {
        document.getElementById("edit-name").value = "";
        document.getElementById("edit-price").value = "";
        document.getElementById("edit-description").value = "";
        return;
    }

    const dish = findDishById(parseInt(dishId));
    if (dish) {
        document.getElementById("edit-name").value = dish.name;
        document.getElementById("edit-price").value = dish.price;
        document.getElementById("edit-description").value = "Special offer today!";
    }
}

function saveDishOfTheDay() {
    const name = document.getElementById("edit-name").value.trim();
    const price = parseFloat(document.getElementById("edit-price").value);
    const description = document.getElementById("edit-description").value.trim();

    if (!name || !Number.isFinite(price) || price <= 0 || !description) {
        showNotification("Please fill in all fields correctly.", "error");
        return;
    }

    dishOfTheDay = { id: null, name: name, price: price, description: description };
    saveDishOfTheDayToLocalStorage();
    renderDishOfTheDay();
    showNotification("Dish of the day saved!", "success");
    navigateTo("home");
}

function renderMenu() {
    const filterVeggie = document.getElementById("filter-veggie").value;
    const sortPrice = document.getElementById("sort-price").value;

    let filteredMenu = menu.filter(function (dish) {
        if (filterVeggie === "veggie") return dish.veggie;
        if (filterVeggie === "non-veggie") return !dish.veggie;
        return true;
    });

    if (sortPrice === "asc") {
        filteredMenu.sort(function (a, b) {
            return a.price - b.price;
        });
    } else if (sortPrice === "desc") {
        filteredMenu.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    const groupedMenu = groupByCategory(filteredMenu);
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    for (let category in groupedMenu) {
        const categorySection = document.createElement("div");
        categorySection.className = "category-section";

        const title = document.createElement("h2");
        title.className = "category-title";
        title.textContent = category;

        categorySection.appendChild(title);

        const grid = document.createElement("div");
        grid.className = "dishes-grid";

        const dishes = groupedMenu[category];
        for (let i = 0; i < dishes.length; i++) {
            const dishCard = createDishCard(dishes[i]);
            grid.appendChild(dishCard);
        }

        categorySection.appendChild(grid);
        container.appendChild(categorySection);
    }
}

function groupByCategory(dishes) {
    const grouped = {};
    for (let i = 0; i < dishes.length; i++) {
        const category = dishes[i].category;
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push(dishes[i]);
    }
    return grouped;
}

function createDishCard(dish) {
    const card = document.createElement("div");
    card.className = "dish-card";

    if (dish.veggie) {
        card.classList.add("veggie");
    }
    if (!dish.available) {
        card.classList.add("unavailable");
    }

    const header = document.createElement("div");
    header.className = "dish-header";

    const name = document.createElement("h3");
    name.className = "dish-name";
    name.textContent = dish.name;
    header.appendChild(name);

    if (!dish.available) {
        const badge = document.createElement("span");
        badge.className = "unavailable-badge";
        badge.textContent = "Not available";
        header.appendChild(badge);
    } else if (dish.veggie) {
        const badge = document.createElement("span");
        badge.className = "veggie-badge";
        badge.textContent = "Vegetarian";
        header.appendChild(badge);
    }

    card.appendChild(header);

    const ingredients = document.createElement("p");
    ingredients.className = "dish-ingredients";
    ingredients.textContent = dish.ingredients.join(", ");
    card.appendChild(ingredients);

    const price = document.createElement("p");
    price.className = "dish-price";
    price.textContent = formatEuro(dish.price);
    card.appendChild(price);

    const maxInfo = document.createElement("p");
    maxInfo.className = "dish-max";
    maxInfo.textContent = "Maximum " + dish.maxPerOrder + " per order";
    card.appendChild(maxInfo);

    const btnAdd = document.createElement("button");
    btnAdd.type = "button";
    btnAdd.className = "btn btn-add";
    btnAdd.textContent = "Add to cart";
    btnAdd.disabled = !dish.available;
    btnAdd.addEventListener("click", function () {
        addToCartQuick(dish);
    });
    card.appendChild(btnAdd);

    if (dish.options && dish.options.length > 0) {
        const btnOptions = document.createElement("button");
        btnOptions.type = "button";
        btnOptions.className = "btn btn-view-options";
        btnOptions.textContent = "View and add options";
        btnOptions.disabled = !dish.available;
        btnOptions.addEventListener("click", function () {
            openDishModal(dish);
        });
        card.appendChild(btnOptions);
    }

    return card;
}

function openDishModal(dish) {
    currentDish = dish;
    selectedOptions = [];

    document.getElementById("modal-dish-name").textContent = dish.name;
    document.getElementById("modal-dish-ingredients").textContent = dish.ingredients.join(", ");
    document.getElementById("modal-dish-price").textContent = "Basic price: " + formatEuro(dish.price);

    const optionsContainer = document.getElementById("modal-options");
    optionsContainer.innerHTML = "";

    if (dish.options && dish.options.length > 0) {
        const extras = dish.options.filter(function (opt) {
            return opt.type === "extra";
        });
        const omits = dish.options.filter(function (opt) {
            return opt.type === "omit";
        });

        if (extras.length > 0) {
            const extrasSection = document.createElement("div");
            extrasSection.className = "options-section";

            const title = document.createElement("h4");
            title.textContent = "Extra's";
            extrasSection.appendChild(title);

            for (let i = 0; i < extras.length; i++) {
                const optionItem = createOptionCheckbox(extras[i]);
                extrasSection.appendChild(optionItem);
            }

            optionsContainer.appendChild(extrasSection);
        }

        if (omits.length > 0) {
            const omitsSection = document.createElement("div");
            omitsSection.className = "options-section";

            const title = document.createElement("h4");
            title.textContent = "Without";
            omitsSection.appendChild(title);

            for (let i = 0; i < omits.length; i++) {
                const optionItem = createOptionCheckbox(omits[i]);
                omitsSection.appendChild(optionItem);
            }

            optionsContainer.appendChild(omitsSection);
        }
    }

    updateModalTotal();
    document.getElementById("modal-dish-detail").classList.remove("hidden");
}

function createOptionCheckbox(option) {
    const div = document.createElement("div");
    div.className = "option-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "opt-" + option.key;
    checkbox.addEventListener("change", function () {
        handleOptionChange(option, checkbox.checked);
    });

    const label = document.createElement("label");
    label.htmlFor = "opt-" + option.key;
    label.textContent = option.label;

    div.appendChild(checkbox);
    div.appendChild(label);

    if (option.price > 0) {
        const priceSpan = document.createElement("span");
        priceSpan.className = "option-price";
        priceSpan.textContent = "+" + formatEuro(option.price);
        div.appendChild(priceSpan);
    }

    return div;
}

function handleOptionChange(option, isChecked) {
    if (isChecked) {
        selectedOptions.push(option);
    } else {
        selectedOptions = selectedOptions.filter(function (opt) {
            return opt.key !== option.key;
        });
    }
    updateModalTotal();
}

function updateModalTotal() {
    let total = currentDish.price;
    for (let i = 0; i < selectedOptions.length; i++) {
        total += selectedOptions[i].price;
    }
    document.getElementById("modal-total-price").textContent = formatEuro(total);
}

function closeModal() {
    document.getElementById("modal-dish-detail").classList.add("hidden");
    currentDish = null;
    selectedOptions = [];
}

function addToCartFromModal() {
    if (!currentDish) return;
    addToCart(currentDish, selectedOptions);
    closeModal();
}

function addToCartQuick(dish) {
    addToCart(dish, []);
}

function addToCart(dish, options) {
    const existingItem = findCartItem(dish.id, options);

    if (existingItem) {
        if (existingItem.quantity >= dish.maxPerOrder) {
            showNotification(
                "You can order max " + dish.maxPerOrder + "× " + dish.name,
                "error"
            );
            return;
        }
        existingItem.quantity++;
    } else {
        const cartItem = {
            id: dish.id,
            name: dish.name,
            price: dish.price,
            maxPerOrder: dish.maxPerOrder,
            quantity: 1,
            options: options,
            totalPrice: calculateItemPrice(dish.price, options)
        };
        cart.push(cartItem);
    }

    saveCartToLocalStorage();
    updateCartCount();
    showNotification(dish.name + " has been added to your cart.", "success");
}

function findCartItem(dishId, options) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === dishId && optionsMatch(cart[i].options, options)) {
            return cart[i];
        }
    }
    return null;
}

function optionsMatch(options1, options2) {
    if (options1.length !== options2.length) return false;

    const keys1 = options1.map(function (opt) { return opt.key; }).sort();
    const keys2 = options2.map(function (opt) { return opt.key; }).sort();

    for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) return false;
    }
    return true;
}

function calculateItemPrice(basePrice, options) {
    let total = basePrice;
    for (let i = 0; i < options.length; i++) {
        total += options[i].price;
    }
    return total;
}

function updateCartCount() {
    let totalItems = 0;
    for (let i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity;
    }
    document.getElementById("cart-count").textContent = totalItems;
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        document.getElementById("cart-empty").classList.remove("hidden");
        document.getElementById("promo-section").classList.add("hidden");
        document.getElementById("cart-total").classList.add("hidden");
        return;
    }

    document.getElementById("cart-empty").classList.add("hidden");
    document.getElementById("promo-section").classList.remove("hidden");
    document.getElementById("cart-total").classList.remove("hidden");

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const itemDiv = createCartItemElement(item, i);
        cartItemsContainer.appendChild(itemDiv);
    }

    updateCartTotals();
}

function createCartItemElement(item, index) {
    const div = document.createElement("div");
    div.className = "cart-item";

    const infoDiv = document.createElement("div");
    infoDiv.className = "cart-item-info";

    const name = document.createElement("h3");
    name.textContent = item.name;
    infoDiv.appendChild(name);

    const priceInfo = document.createElement("p");
    priceInfo.className = "cart-item-price";
    priceInfo.textContent = formatEuro(item.totalPrice) + " per piece";
    infoDiv.appendChild(priceInfo);

    if (item.options && item.options.length > 0) {
        const optionsText = document.createElement("p");
        optionsText.className = "cart-item-options";
        const optionLabels = item.options.map(function (opt) { return opt.label; });
        optionsText.textContent = "Options: " + optionLabels.join(", ");
        infoDiv.appendChild(optionsText);
    }

    div.appendChild(infoDiv);

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "cart-item-controls";

    const quantityDiv = document.createElement("div");
    quantityDiv.className = "quantity-controls";

    const btnMinus = document.createElement("button");
    btnMinus.type = "button";
    btnMinus.className = "btn btn-quantity";
    btnMinus.textContent = "-";
    btnMinus.setAttribute("aria-label", "Decrease quantity");
    btnMinus.addEventListener("click", function () {
        updateCartItemQuantity(index, item.quantity - 1);
    });

    const quantitySpan = document.createElement("span");
    quantitySpan.className = "quantity-value";
    quantitySpan.textContent = item.quantity;

    const btnPlus = document.createElement("button");
    btnPlus.type = "button";
    btnPlus.className = "btn btn-quantity";
    btnPlus.textContent = "+";
    btnPlus.setAttribute("aria-label", "Increase quantity");
    btnPlus.addEventListener("click", function () {
        updateCartItemQuantity(index, item.quantity + 1);
    });

    quantityDiv.appendChild(btnMinus);
    quantityDiv.appendChild(quantitySpan);
    quantityDiv.appendChild(btnPlus);

    const totalSpan = document.createElement("span");
    totalSpan.className = "cart-item-total";
    totalSpan.textContent = formatEuro(item.totalPrice * item.quantity);

    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.className = "btn btn-remove";
    btnRemove.textContent = "🗑️";
    btnRemove.setAttribute("aria-label", "Remove");
    btnRemove.addEventListener("click", function () {
        removeFromCart(index);
    });

    controlsDiv.appendChild(quantityDiv);
    controlsDiv.appendChild(totalSpan);
    controlsDiv.appendChild(btnRemove);

    div.appendChild(controlsDiv);

    return div;
}

function updateCartItemQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(index);
        return;
    }

    const item = cart[index];
    if (newQuantity > item.maxPerOrder) {
        showNotification("Maximum number is " + item.maxPerOrder + ".", "error");
        return;
    }

    cart[index].quantity = newQuantity;
    saveCartToLocalStorage();
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    updateCartCount();
    renderCart();
}

function updateCartTotals() {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += cart[i].totalPrice * cart[i].quantity;
    }

    let discount = 0;
    if (appliedPromo) {
        discount = (subtotal * appliedPromo.discount) / 100;
    }

    const total = subtotal - discount;

    document.getElementById("subtotal").textContent = formatEuro(subtotal);
    document.getElementById("discount").textContent = "-" + formatEuro(discount);
    document.getElementById("total").textContent = formatEuro(total);

    if (discount > 0) {
        document.getElementById("discount-row").classList.remove("hidden");
    } else {
        document.getElementById("discount-row").classList.add("hidden");
    }
}

function applyPromoCode() {
    const code = document.getElementById("promo code").value.toUpperCase().trim();
    if (!code) return;

    const promo = findPromoCode(code);
    if (promo) {
        appliedPromo = promo;
        showPromoMessage("Promo code applied: " + promo.discount + "% discount.", true);
        updateCartTotals();
    } else {
        showPromoMessage("This promo code is not valid.", false);
    }
}

function findPromoCode(code) {
    for (let i = 0; i < promoCodes.length; i++) {
        if (promoCodes[i].code === code) return promoCodes[i];
    }
    return null;
}

function showPromoMessage(message, isSuccess) {
    const messageEl = document.getElementById("promo-message");
    messageEl.textContent = message;
    messageEl.className = "promo-message";
    messageEl.classList.add(isSuccess ? "success" : "error");
    messageEl.classList.remove("hidden");
}

function removePromoCode(code) {
    promoCodes = promoCodes.filter(function (promo) {
        return promo.code !== code;
    });
}

function completeOrder() {
    if (cart.length === 0) {
        showNotification("Your shopping cart is empty.", "error");
        return;
    }

    if (appliedPromo && appliedPromo.oneTimeUse) {
        removePromoCode(appliedPromo.code);
    }

    showNotification("Order placed! Thanks, and enjoy your meal. 🎉", "success");

    cart = [];
    appliedPromo = null;
    document.getElementById("promo code").value = "";

    saveCartToLocalStorage();
    updateCartCount();

    setTimeout(function () {
        navigateTo("home");
    }, 1600);
}

function handleLogin() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    if (username === "admin" && password === "admin123") {
        isAdmin = true;

        document.getElementById("btn-login").classList.add("hidden");
        document.getElementById("admin-badge").classList.remove("hidden");
        document.getElementById("btn-edit-dotd").classList.remove("hidden");

        showNotification("Logged in as admin.", "success");

        document.getElementById("login-username").value = "";
        document.getElementById("login-password").value = "";

        navigateTo("home");
    } else {
        showNotification("Invalid login details.", "error");
    }
}

function findDishById(id) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].id === id) return menu[i];
    }
    return null;
}
