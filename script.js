const openShopping = document.querySelector("#bagIcon");  // Usando o ID para o botão de abertura
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");  // Corrigido para 'listCards' conforme HTML
const total = document.querySelector(".total");
const body = document.querySelector("body");  // Não há necessidade de usar '.body' pois não existe essa classe
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
    name: "Camiseta chihiro",
    image: "camisa1.jpeg",
    price: 5999
  },
  {
    id: 2,
    name: "Camiseta studio ghibli",
    image: "camisa2.jpeg",
    price: 5999
  },
  {
    id: 3,
    name: "Camiseta totoro verão",
    image: "camisa3.jpeg",
    price: 5999
  },
  {
    id: 4,
    name: "Camiseta totoros",
    image: "camisa4.jpeg",
    price: 5999
  },
  {
    id: 5,
    name: "Camiseta meu amigo totoro",
    image: "camisa5.jpeg",
    price: 5999
  },
  {
    id: 6,
    name: "Camiseta totoro sleep",
    image: "camisa6.jpeg",
    price: 5999
  },
  {
    id: 7,
    name: "Camiseta a viagem de chihiro",
    image: "camisa7.jpeg",
    price: 5999
  },
  {
    id: 8,
    name: "Camiseta Kaonashi",
    image: "camisa8.jpeg",
    price: 5999
  },
  {
    id: 9,
    name: "Camiseta chaisaw man",
    image: "camisa9.jpeg",
    price: 5999
  },
  {
    id: 10,
    name: "Camiseta studio ghibli blue",
    image: "camisa10.jpeg",
    price: 59
  },
  {
    id: 11,
    name: "Camiseta megumi",
    image: "camisa11.jpeg",
    price: 5999
  },
  {
    id: 12,
    name: "Camiseta berserk",
    image: "camisa12.jpeg",
    price: 5999
  },
  {
    id: 13,
    name: "Camiseta anime",
    image: "camisa13.jpeg",
    price: 5999
  },
  {
    id: 14,
    name: "Camiseta choso",
    image: "camisa14.jpeg",
    price: 5999
  },
  {
    id: 15,
    name: "Camiseta mushoku tensei",
    image: "camisa15.jpeg",
    price: 5999
  },
  {
    id: 16,
    name: "Camiseta damon slayer",
    image: "camisa16.jpeg",
    price: 5999
  },
  {
    id: 17,
    name: "Moletom meu amigo totoro",
    image: "camisa17.jpeg",
    price: 1599
  },
  {
    id: 18,
    name: "Camiseta gato lamem",
    image: "camisa18.jpeg",
    price: 5999
  },
  {
    id: 19,
    name: "Camiseta jujutsu kaisen",
    image: "camisa19.jpeg",
    price: 5999
  },
  {
    id: 20,
    name: "Camiseta anime black",
    image: "camisa20.jpeg",
    price: 5900
  }
]

let listCards = [];

const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
       <img src="./img/store/${value.image}">
      <div class="title"> ${value.name}</div>
      <div class="price"> ${(value.price / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })} </div>
      <button onclick="addToCart(${key})">Add To Cart</button>
    `;
    list.appendChild(newDiv)
  })
}

initApp()

const addToCart = (key) => {
  if(listCards[key]== null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1
  }

  reloadCard();
}

const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="./img/store/${value.image}"></div>
        <div class="cardTitle">${value.name}</div>
        <div class="cardPrice">${(value.price / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</div>
        <div>
          <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <span>${value.quantity}</span>
          <button style="background-color: #560bad" class="cardButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = (totalPrice / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  quantity.innerText = count;
};

const changeQuantity = (key, newQuantity) => {
  if (newQuantity <= 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = newQuantity;
  }

  reloadCard();
}