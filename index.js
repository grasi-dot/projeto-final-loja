const track = document.querySelector('.carouselTrack');
const items = document.querySelectorAll('.carouselItem');
const prevButton = document.querySelector('.carouselButton.prev');
const nextButton = document.querySelector('.carouselButton.next');
const bestSellerlist = document.querySelector(".bestSellerlist");
const tabs = document.querySelectorAll('.tabLink');
const tabContents = document.querySelectorAll('.tabContent');
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const soloList = document.querySelector(".soloList");
const apotecaryList = document.querySelector(".apotecaryList");
const jujutsuList = document.querySelector(".jujutsuList");

let best_sellers = [
  { id: 1, name: "Solo Leveling Volume 1", image: "solo-manhua-1.webp", category: "Solo Leveling", price: 6990 },
  { id: 2, name: "Solo Leveling Volume 2", image: "solo-manhua-2.webp", category: "Solo Leveling", price: 6990 },
  { id: 3, name: "Solo Leveling Volume 3", image: "solo-manhua-3.webp", category: "Solo Leveling", price: 6990 },
  { id: 4, name: "Jujutsu Kaisen Volume 2", image: "jujutsu-2.jpeg", category: "Jujutsu Kaisen", price: 3690 },
  { id: 5, name: "Jujutsu Kaisen Volume 3", image: "jujutsu-3.jpeg", category: "Jujutsu Kaisen", price: 3690 },
  { id: 6, name: "Jujutsu Kaisen Volume 4", image: "jujutsu-4.jpeg", category: "Jujutsu Kaisen", price: 3690 }
];

let apotecarys = [
  { id: 1, name: "Diarios de uma apotecária 1", image: "apotecary-1.webp", category: "Diarios de uma apotecária", price: 4090 },
  { id: 18, name: "Diarios de uma apotecária 2", image: "apotecary-2.webp", category: "Diarios de uma apotecária", price: 4090 },
  { id: 3, name: "Diarios de uma apotecária 3", image: "apotecary-3.webp", category: "Diarios de uma apotecária", price: 4090 },
  { id: 4, name: "Diarios de uma apotecária 4", image: "apotecary-4.webp", category: "Diarios de uma apotecária", price: 4090 }
];

let jujutsus = [
  { id: 1, name: "Jujutsu Kaisen 0", image: "jujutsu-0.jpeg", category: "Jujutsu Kaisen", price: 4090 },
  { id: 18, name: "Jujutsu Kaisen 1", image: "jujutsu-1.jpeg", category: "Jujutsu Kaisen", price: 4090 },
  { id: 3, name: "Jujutsu Kaisen 2", image: "jujutsu-2.jpeg", category: "Jujutsu Kaisen", price: 4090 },
  { id: 4, name: "Jujutsu Kaisen 3", image: "jujutsu-3.jpeg", category: "Jujutsu Kaisen", price: 4090 }
];

let solos = [
  { id: 1, name: "Solo Leveling Novel 1", image: "solo-novel-1.webp", category: "Solo Leveling", price: 4090 },
  { id: 18, name: "Solo Leveling Novel 2", image: "solo-novel-2.webp", category: "Solo Leveling", price: 4090 },
  { id: 3, name: "Solo Leveling Novel 3", image: "solo-novel-3.webp", category: "Solo Leveling", price: 4090 }
];

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
window.addEventListener('load', updateCarousel);
setInterval(nextSlide, 10000);


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    tabContents.forEach(content => content.classList.remove('active'));
    const target = document.getElementById(tab.dataset.tab);
    target.classList.add('active');
  });
});


searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();
  if (query) {
    localStorage.setItem("searchQuery", query);
    window.location.href = "shopping.html";
  }
});


const initbestSeller = () => {
  best_sellers.forEach(({ image, category, name }) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./img/store/${image}">
      <div class="category">${category}</div>
      <div class="title">${name}</div>
      <div class="ratting">
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
      </div>
      <button onclick="window.location.href='shopping.html'">
        <i class='bx bx-cart iconCart'></i> Comprar agora
      </button>`;
    bestSellerlist.appendChild(newDiv);
  });
};

const iniTabApotecary = () => {
  apotecarys.forEach(({ image, category, name }) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./img/store/${image}">
      <div class="category">${category}</div>
      <div class="title">${name}</div>
      <div class="ratting">
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
      </div>
      <button onclick="window.location.href='shopping.html'">
        <i class='bx bx-cart iconCart'></i> Comprar agora
      </button>`;
    apotecaryList.appendChild(newDiv);
  });
};

const iniTabJujutsu = () => {
  jujutsus.forEach(({ image, category, name }) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./img/store/${image}">
      <div class="category">${category}</div>
      <div class="title">${name}</div>
      <div class="ratting">
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
      </div>
      <button onclick="window.location.href='shopping.html'">
        <i class='bx bx-cart iconCart'></i> Comprar agora
      </button>`;
    jujutsuList.appendChild(newDiv);
  });
};

const initTabSolo = () => {
  solos.forEach(({ image, category, name }) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./img/store/${image}">
      <div class="category">${category}</div>
      <div class="title">${name}</div>
      <div class="ratting">
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star'></i><i class='bx bxs-star'></i>
        <i class='bx bxs-star-half'></i>
      </div>
      <button onclick="window.location.href='shopping.html'">
        <i class='bx bx-cart iconCart'></i> Comprar agora
      </button>`;
    soloList.appendChild(newDiv);
  });
};


initbestSeller();
iniTabApotecary();
iniTabJujutsu();
initTabSolo();
