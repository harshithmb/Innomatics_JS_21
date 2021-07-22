const productUrl = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const products = document.querySelector(".products");
fetch(productUrl)
  .then((res) => res.json())
  .then((res) => {
    res.forEach((item) => {
      const { name, preview, description, price, id } = item;
      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "18rem";

      //Inside card image
      const cardImg = document.createElement("img");
      cardImg.className = "card-img-top";
      cardImg.src = preview;
      cardImg.alt = name;
      card.appendChild(cardImg);

      //Card body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h5");
      cardTitle.textContent = name;
      cardTitle.className = "card-title";
      cardBody.appendChild(cardTitle);

      const cardDesc = document.createElement("p");
      cardDesc.textContent = description;
      cardDesc.className = "card-text";
      cardBody.appendChild(cardDesc);

      const navCard = document.createElement("a");
      navCard.href = `product.html?productId=${id}`;
      navCard.className = "btn btn-primary";
      navCard.textContent = "More Details";
      cardBody.appendChild(navCard);

      card.appendChild(cardBody);

      products.appendChild(card);
    });
  });
