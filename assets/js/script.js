import UI from "./ui.module.js";
import Games from "./games.module.js";

async function main() {
  const games = new Games();
  const gamesUI = new UI();

  games.handleNavbar();

  const gameCategoryList = await games.getCategoryGames("mmorpg");
  gamesUI.displayCategoryGames(gameCategoryList);
  games.addClickEvent();
}

main();
