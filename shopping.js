const openShopping = document.querySelector("#bagIcon");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

let listCards = [];
let products = [];

openShopping.addEventListener("click", () => {
  body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
  body.classList.remove("active")
})

searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();
  if (query) {
    localStorage.setItem("searchQuery", query);

    window.location.href = "shopping.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchBar = document.getElementById("searchBar");
  const searchContainer = document.getElementById("searchContainer");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.innerWidth <= 481) { 
      searchBar.classList.toggle("hidden");

      if (!searchBar.classList.contains("hidden")) {
        searchBar.focus();
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 481 &&
      !searchContainer.contains(e.target)
    ) {
      searchBar.classList.add("hidden");
    }
  });
});

const handleAddToCart = (button, key) => {
  addToCart(key);
  button.innerHTML = "<i class='bx bx-loader-circle iconCart'></i> Adicionando...";

  setTimeout(() => {
    button.innerHTML = "<i class='bx bx-check-circle iconCart'></i> Adicionado!";

    setTimeout(() => {
      button.innerHTML = "<i class='bx bx-cart iconCart'></i> Adicionar";
    }, 2000);
  }, 2000);
};

const addToCart = (key) => {
  if (!listCards[key]) {
    const { name, image, price } = products[key];
    listCards[key] = { name, image, price, quantity: 1 };
  }
  reloadCard();
};

const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((item, key) => {
    if (item) {
      const { image, name, price, quantity } = item;
      totalPrice += price * quantity;
      count += quantity;

      const newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="./img/store/${image}"></div>
        <div class="cardTitle">${name}</div>
        <div class="cardPrice">${(price / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
        <div>
          <button style="background-color: #375a66" class="cardButton" onclick="changeQuantity(${key}, ${quantity - 1})">-</button>
          <span>${quantity}</span>
          <button style="background-color: #375a66" class="cardButton" onclick="changeQuantity(${key}, ++listCards[${key}].quantity)">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = (totalPrice / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  quantity.innerText = count;
};

const changeQuantity = (key, newQuantity) => {
  newQuantity <= 0 ? delete listCards[key] : listCards[key].quantity = newQuantity;
  reloadCard();
};

const renderProducts = (productList) => {
  list.innerHTML = "";
  productList.forEach((product, key) => {
    const { image, category, name, price } = product;
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./img/store/${image}">
      <div class="category">${category}</div>
      <div class="title">${name}</div>
      <div class="ratting">
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
      </div>
      <div class="price">R$ ${(price / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
      <button onclick="handleAddToCart(this, ${key})">
        <i class='bx bx-cart iconCart'></i> Adicionar
      </button>
    `;
    list.appendChild(newDiv);
  });
};

const initApp = async () => {
  try {
    const response = await fetch('./products.json');

    if (!response.ok) {
      throw new Error('Erro ao carregar os produtos.');
    }

    products = await response.json();

    const searchQuery = localStorage.getItem("searchQuery");
    if (searchQuery) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery) || 
        product.category.toLowerCase().includes(searchQuery)
      );
      renderProducts(filteredProducts);
      localStorage.removeItem("searchQuery");
    } else {
      renderProducts(products);
    }
  } catch (error) {
    console.error('Erro ao inicializar a aplicação:', error.message);
  }
};

initApp();
