const searchParams = new URLSearchParams(location.search);
const productId = searchParams.get("productId");

const product = document.querySelector("h1");
product.innerHTML = "Product" + productId;
