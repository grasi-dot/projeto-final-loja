const list = document.querySelector(".list");

let best_sellers = [
  {
    id: 1,
    name: "Solo Leveling Volume 3 Novel",
    image: "solo-novel-3.webp",
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
  }
]

const initApp = () => {
  best_sellers.forEach((best_seller, key) => {
    const { image, category, name, price } = best_seller;
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
      <button onclick="window.location.href='shopping.html'">
        <i class='bx bx-cart iconCart'></i> Comprar agora
      </button>
    `;
    list.appendChild(newDiv);
  });
};

initApp();