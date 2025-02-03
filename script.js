// Changer le contenu d'un bouton au clic

const button = document.getElementById("main-button");

button.addEventListener("click", (event) => {
  if (event.target.innerText === "Bravo!") {
    event.target.innerText = "Cliquez-ici";
  } else {
    event.target.innerText = "Bravo!";
  }
});

// Rendre une FAQ cliquable

const accordionItems = document.querySelectorAll(".accordion-item-header");

accordionItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.currentTarget.parentElement.classList.toggle("active");
  });
});

// Changer une image au clic

const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1655574282159-2881edbb7d2a?q=80&w=3131&auto=format";
  });
});

// Searchbar

const cities = [
  // 20 villes avec des premières lettres différentes
  "Amsterdam",
  "Barcelona",
  "Chicago",
  "Dublin",
  "Edinburgh",
  "Florence",
  "Geneva",
  "Helsinki",
  "Istanbul",
  "Jakarta",
  "Kyoto",
  "Lisbon",
  "Montreal",
  "Nairobi",
  "Oslo",
  "Paris",
  "Quebec City",
  "Rome",
  "Stockholm",
  "Tokyo",
  "Porto",
  "Prague",
  "Plymouth",
  "Philadelphia",
  "Palermo",
  "Rio de Janeiro",
  "Reims",
  "Rotterdam",
  "Riyadh",
  "Rennes",
  "Toronto",
  "Toulouse",
  "Tallinn",
  "Trieste",
  "Tashkent",
  "Athens",
  "Ankara",
  "Auckland",
  "Abu Dhabi",
  "Austin",
];

const searchBar = document.getElementById("search");
const resultsContainer = document.getElementById("results");

searchBar.addEventListener("keyup", (event) => {
  resultsContainer.innerHTML = "";
  const searchText = event.currentTarget.value.toLowerCase(); // Normaliser la recherche (casse insensible)

  const filteredCities = cities.filter(
    (city) => city.toLowerCase().includes(searchText) // Vérifier si la ville contient le texte recherché
  );

  if (searchText !== "") {
    filteredCities.forEach((city) => {
      resultsContainer.insertAdjacentHTML("beforeend", `<li>${city}</li>`);
    }); // Afficher les résultats filtrés
  }
});
