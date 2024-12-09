const openShopping = document.querySelector("#bagIcon");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


openShopping.addEventListener("click", () => {
  body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
  body.classList.remove("active")
})

let products = [
  {
    id: 1,
    name: "Jujutsu Kaisen Volume 0",
    image: "jujutsu-0.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 2,
    name: "Jujutsu Kaisen Volume 1",
    image: "jujutsu-1.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 3,
    name: "Jujutsu Kaisen Volume 2",
    image: "jujutsu-2.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 4,
    name: "Jujutsu Kaisen Volume 3",
    image: "jujutsu-3.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 5,
    name: "Jujutsu Kaisen Volume 4",
    image: "jujutsu-4.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 6,
    name: "Jujutsu Kaisen Volume 5",
    image: "jujutsu-5.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 7,
    name: "Jujutsu Kaisen Volume 6",
    image: "jujutsu-6.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 8,
    name: "Jujutsu Kaisen Volume 7",
    image: "jujutsu-7.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 9,
    name: "Jujutsu Kaisen Volume 8",
    image: "jujutsu-8.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 10,
    name: "Jujutsu Kaisen Volume 9",
    image: "jujutsu-9.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 11,
    name: "Jujutsu Kaisen Volume 10",
    image: "jujutsu-10.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 12,
    name: "Jujutsu Kaisen Volume 11",
    image: "jujutsu-11.jpeg",
    category: "Berserk",
    price: 3690
  },
  {
    id: 13,
    name: "Jujutsu Kaisen Volume 12",
    image: "jujutsu-12.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 14,
    name: "Jujutsu Kaisen Volume 13",
    image: "jujutsu-13.jpeg",
    category: "Jujutsu Kaisen",
    price: 3690
  },
  {
    id: 15,
    name: "Jujutsu Kaisen Volume 14",
    image: "jujutsu-14.jpeg",
    category: "Mushoku Tensei",
    price: 3690
  },
  {
    id: 16,
    name: "Solo Leveling Volume 1 Manhua",
    image: "solo-manhua-1.webp",
    category: "Solo Leveling",
    price: 6990
  },
  {
    id: 17,
    name: "Solo Leveling Volume 2 Manhua",
    image: "solo-manhua-2.webp",
    category: "Solo Leveling",
    price: 6990
  },
  {
    id: 18,
    name: "Solo Leveling Volume 3 Manhua",
    image: "solo-manhua-3.webp",
    category: "Solo Leveling",
    price: 6990
  },
  {
    id: 19,
    name: "Solo Leveling Volume 1 Novel",
    image: "solo-novel-1.webp",
    category: "Solo Leveling",
    price: 6990
  },
  {
    id: 20,
    name: "Solo Leveling Volume 2 Novel",
    image: "solo-novel-2.webp",
    category: "Solo Leveling",
    price: 6990
  },
  {
    id: 21,
    name: "Solo Leveling Volume 3 Novel",
    image: "solo-novel-3.webp",
    category: "Solo Leveling",
    price: 6990
  }
]

let listCards = [];

const initApp = () => {
  products.forEach((product, key) => {
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
      <div class="price"> R$ ${(price / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} </div>
      <button onclick="handleAddToCart(this, ${key})">
        <i class='bx bx-cart iconCart'></i> Adicionar
      </button>
    `;
    list.appendChild(newDiv);
  });
};

initApp();

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

