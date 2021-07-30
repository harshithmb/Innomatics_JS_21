const API_URL = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";

const cartCount = document.querySelector("#cartCount");
const clothing = document.querySelector("#clothing");
const accessories = document.querySelector("#accessories");
const localCart = JSON.parse(localStorage.getItem("cart"));
const cartCountFromLocalStorage = localCart.length;
cartCount.innerHTML = cartCountFromLocalStorage;

let cart = [...localCart];
$.ajax({
  url: API_URL,
  type: "GET",
  success: function (res) {
    res.slice(0, 5).map((item) => {
      const { name, description, preview } = item;
      const card = document.createElement("div");
      card.classList = "card m-4 cardWidth";

      const cardImg = document.createElement("img");
      cardImg.src = preview;
      cardImg.classList = "card-img-top";
      card.appendChild(cardImg);

      const cardBody = document.createElement("div");
      cardBody.classList = "card-body";

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = name;
      cardBody.appendChild(cardTitle);
      const cardDesc = document.createElement("p");
      cardDesc.textContent = description;
      cardBody.appendChild(cardDesc);

      const cardBtn = document.createElement("button");
      cardBtn.classList = "btn btn-success";
      cardBtn.textContent = "Add to cart";
      cardBtn.onclick = () => {
        cart = [...cart, item];
        cartCount.textContent = cart.length;
        window.localStorage.setItem("cart", JSON.stringify(cart));
      };

      cardBody.appendChild(cardBtn);
      card.appendChild(cardBody);

      clothing.appendChild(card);
    });
    res.slice(5).map(({ name, description, preview }) => {
      const card = document.createElement("div");
      card.classList = "card m-4 cardWidth";

      const cardImg = document.createElement("img");
      cardImg.src = preview;
      cardImg.classList = "card-img-top";
      card.appendChild(cardImg);

      const cardBody = document.createElement("div");
      cardBody.classList = "card-body";

      const cardTitle = document.createElement("h1");
      cardTitle.textContent = name;
      cardBody.appendChild(cardTitle);
      const cardDesc = document.createElement("p");
      cardDesc.textContent = description;
      cardBody.appendChild(cardDesc);

      const cardBtn = document.createElement("button");
      cardBtn.classList = "btn btn-success";
      cardBtn.textContent = "Add to cart";

      cardBody.appendChild(cardBtn);
      card.appendChild(cardBody);

      accessories.appendChild(card);
    });
  },
});
