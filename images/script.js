// ================= SAMPLE MENU DATA =================
const dishes = [
  { id: 1, name: "Paneer Butter Masala", price: 250, category: "vegetarian" },
  { id: 2, name: "Chicken Biryani", price: 300, category: "non-vegetarian" },
  { id: 3, name: "Veg Thali", price: 200, category: "vegetarian" },
  { id: 4, name: "Mutton Curry", price: 350, category: "non-vegetarian" },
];

// ================= GLOBALS =================
const menuContainer = document.getElementById("menu-container");
const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

let cart = [];

// ================= DISPLAY DISHES =================
function displayDishes(list) {
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  list.forEach((dish) => {
    const dishCard = document.createElement("div");
    dishCard.className = "dish-card";

    dishCard.innerHTML = `
      <h4>${dish.name}</h4>
      <p>₹${dish.price}</p>
      <button>Add to Cart</button>
    `;

    dishCard.querySelector("button").addEventListener("click", () => {
      addToCart(dish.id);
    });

    menuContainer.appendChild(dishCard);
  });
}

// ================= SEARCH + FILTER =================
function filterMenu() {
  let filteredDishes = dishes;

  // Search by name
  if (searchInput && searchInput.value.trim() !== "") {
    const query = searchInput.value.toLowerCase();
    filteredDishes = filteredDishes.filter((dish) =>
      dish.name.toLowerCase().includes(query),
    );
  }

  // Filter by category
  if (filterSelect && filterSelect.value !== "all") {
    filteredDishes = filteredDishes.filter(
      (dish) => dish.category === filterSelect.value,
    );
  }

  displayDishes(filteredDishes);
}

// ================= CART LOGIC =================
function addToCart(id) {
  const dish = dishes.find((d) => d.id === id);
  if (!dish) return;

  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...dish, quantity: 1 });
  }

  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  if (!cartItems || !totalPrice) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}
      <button>Remove</button>
    `;

    li.querySelector("button").addEventListener("click", () => {
      removeFromCart(item.id);
    });

    cartItems.appendChild(li);
  });

  totalPrice.innerText = total;
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}

// ================= EVENT LISTENERS =================
if (searchInput) {
  searchInput.addEventListener("input", filterMenu);
}

if (filterSelect) {
  filterSelect.addEventListener("change", filterMenu);
}

// ================= INITIAL LOAD =================
displayDishes(dishes);
