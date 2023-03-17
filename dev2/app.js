document.getElementById("addBtn").addEventListener("click", function () {
  let getProduct = document.getElementById("Product");
  let getQuantity = document.getElementById("Quantity");
  let getProductValue = getProduct.value;
  let getQuantityValue = getQuantity.value;
  displayProduct(getProductValue, getQuantityValue);
  getProduct.value = "";
  getQuantity.value = "";
  saveProductOnLocalStorage(getProductValue, getQuantityValue);
});

let displayProduct = (Product, Quantity) => {
  let getProductContainer = document.getElementById("ProductContainer");
  let crtLi = document.createElement("li");
  crtLi.innerHTML = `
   <li> ${Product} ${Quantity} </li>
  `;
  getProductContainer.appendChild(crtLi);
};

let getProductFormLocalStorage = () => {
  let cart = {};
  let getItemFormLocalStorage = localStorage.getItem("cart");
  if (getItemFormLocalStorage) {
    cart = JSON.parse(getItemFormLocalStorage);
  }
  return cart;
};

let saveProductOnLocalStorage = (getProductValue, getQuantityValue) => {
  let cart = getProductFormLocalStorage();
  cart[getProductValue] = getQuantityValue;
  let convertCartToStringify = JSON.stringify(cart);
  localStorage.setItem("cart", convertCartToStringify);
};

let displayProductFormLocalStorage = () => {
  let saveCart = getProductFormLocalStorage();
  for (const Product in saveCart) {
    const Quantity = saveCart[Product];
    displayProduct(Product, Quantity);
  }
};

displayProductFormLocalStorage();
