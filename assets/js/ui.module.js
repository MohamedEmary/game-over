export default class UI {
  displayCategoryGames(categoryGames) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    for (const game of categoryGames) {
      const card = `
      <div class="col">
        <div class="card h-100 gray bg-transparent border-1 border-black" id=${game.id}>
          <div class="p-3 h-100">
            <img
              src="${game.thumbnail}"
              alt="Image of ${game.title}"
              class="card-img-top w-100" />
            <div class="card-body px-0 pb-0">
              <div
                class="card-title d-flex justify-content-between align-items-center mb-1">
                <h5 class="m-0">${game.title}</h5>
                <div class="rounded-2 bg-primary px-2 py-1">Free</div>
              </div>
              <p class="card-text text-center small text-secondary ">
                ${game.short_description}
              </p>
            </div>
          </div>
          <div
            class="card-footer border-black bg-transparent d-flex justify-content-between align-items-between">
            <div class="btn bg-body-secondary px-2 py-0">${game.genre}</div>
            <div class="btn bg-body-secondary px-2 py-0">${game.platform}</div>
          </div>
        </div>
      </div>
        `;
      cardContainer.innerHTML += card;
    }
  }

  displayGameDetails(game) {
    const detailsSecParent = document.querySelector(".game-details");
    detailsSecParent.classList.remove("d-none");
    const detailsSec = document.querySelector(".game-details .row");
    const gameDetails = `
    <div class="d-flex my-3 justify-content-between align-items-center">
      <h2>Game Details</h2>
      <button
        class="btn-close btn-close-white fw-light text-secondary"></button>
    </div>
    <div class="col-md-4">
      <img
        src="${game.thumbnail}"
        class="w-100 mb-3 rounded-3" />
    </div>
    <div class="col-md-8">
      <h3>${game.title}</h3>
      <div>
        <span>Category:</span>
        <span class="blue-bg rounded-2 px-2 text-black small fw-bold"
          >${game.genre}</span
        >
      </div>
      <div class="my-2">
        <span>Platform:</span>
        <span class="blue-bg rounded-2 px-2 text-black small fw-bold"
          >${game.platform}</span
        >
      </div>
      <div class="mb-3">
        <span>Status:</span>
        <span class="blue-bg rounded-2 px-2 text-black small fw-bold"
          >${game.status}</span
        >
      </div>
      <div>
        <p class="small">
          ${game.description}
        </p>
      </div>
      <div class="mt-3">
        <a href="${game.game_url}" target="_blank" rel="noopener noreferrer">
          <button class="btn btn-outline-warning text-white">
            Show Game
          </button>
        </a>
      </div>
    </div>
    `;

    detailsSec.innerHTML = gameDetails;
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    detailsSecParent.style.height = "100vh";
    detailsSecParent.style.overflowY = "auto";

    document.querySelector(".btn-close").addEventListener("click", () => {
      detailsSecParent.classList.add("d-none");
      body.style.overflow = "initial";
    });
  }
}
