document.getElementById("submit").addEventListener("click", function () {
  let inputField = document.getElementById("inputField");
  let inputFieldValue = inputField.value;

  let card = document.getElementById("card");
  let crtElm = document.createElement("h3");
  card.appendChild(crtElm);
  let crtNod = document.createTextNode(inputFieldValue);
});

// 01868762929
