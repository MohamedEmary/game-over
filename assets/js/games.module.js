import UI from "./ui.module.js";

export default class GamesSection {
  constructor() {
    this.baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/";
    this.options = {
      headers: {
        "x-rapidapi-key": "e47bc98430msh81e2832e057c932p1d4f51jsnf02a0cada41e",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    this.UI = new UI();
  }

  async fetchFromAPI(endpoint) {
    const url = `${this.baseUrl}${endpoint}`;
    try {
      const response = await fetch(url, this.options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async getCategoryGames(category) {
    return this.fetchFromAPI(`games?category=${category}`);
  }

  async getGameDetails(id) {
    return this.fetchFromAPI(`game?id=${id}`);
  }

  addClickEvent() {
    const cards = document.querySelectorAll(".col > .card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        this.getGameDetails(card.id).then((res) =>
          this.UI.displayGameDetails(res)
        );
      });
    });
  }

  handleNavbar() {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".nav-link.active").classList.remove("active");
        item.classList.add("active");

        this.getCategoryGames(item.textContent).then((res) => {
          this.UI.displayCategoryGames(res);
        });

        this.addClickEvent();
      });
    });
  }
}
