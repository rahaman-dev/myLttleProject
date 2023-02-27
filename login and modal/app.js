document.getElementById("eye").addEventListener("click", function () {
  let getPasswordFiled = document.getElementById("passwordField");
  if (getPasswordFiled.getAttribute("type") === "password") {
    getPasswordFiled.setAttribute("type", "text");
  } else {
    getPasswordFiled.setAttribute("type", "password");
  }
});

document.getElementById("emailFled").addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    let getPasswordFiled = document.getElementById("passwordField");
    getPasswordFiled;
  }
});
document
  .getElementById("passwordField")
  .addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      getModal();
    }
  });

// from submitting
document.getElementById("subBtn").addEventListener("click", function () {
  getModal();
});
function getModal() {
  let getModal = document.getElementById("modal");
  getModal.style.display = "block";
  let getInputFiled = document.getElementById("form");
  getInputFiled.style.display = "none";
  document.getElementById("okayBtn").addEventListener("click", function () {
    getModal.style.display = "none";
  });
}
