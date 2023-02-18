document.getElementById("submit-btn").addEventListener("click", function () {
  let emailAddress = document.getElementById("user-email");
  let email = emailAddress.value;
  let passwordField = document.getElementById("user-password");
  let password = passwordField.value;
  if (email === "email" && password === "password") {
    window.location.href = "bankPage.html";
  } else {
    alert("you are invalid user");
  }
});
// Bank Website
document.getElementById("deposit-btn").addEventListener("click", function () {
  let inputDeposit = document.getElementById("deposit");
  let newDepositTotalString = inputDeposit.value;
  let newDepositTotalStringToNumber = parseFloat(newDepositTotalString);
  inputDeposit.value = "";
  let DepositTotalElement = document.getElementById("deposit-total");
  let oldDepositTotalString = DepositTotalElement.innerText;
  let = oldDepositTotalStringToNumber = parseFloat(oldDepositTotalString);
  let currentDepositTotal =
    oldDepositTotalStringToNumber + newDepositTotalStringToNumber;
  DepositTotalElement.innerText = currentDepositTotal;
  let blenchTotal = document.getElementById("blench-total");
  let blenchTotalElement = blenchTotal.innerText;
  let convertBlenchTotalString = parseFloat(blenchTotalElement);
  let currentBlenchTotal =
    newDepositTotalStringToNumber + convertBlenchTotalString;
  blenchTotal.innerText = currentBlenchTotal;
});
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let withdrawField = document.getElementById("Withdraw-field");
  let withdrawFieldText = withdrawField.value;
  let convertWithdrawFieldText = parseFloat(withdrawFieldText);
  let totalWithdraw = document.getElementById("total-withdraw");
  let totalWithdrawText = totalWithdraw.innerText;
  let convertTotalWithdrawText = parseFloat(totalWithdrawText);
  let totalWithdrawAmount = convertWithdrawFieldText + convertTotalWithdrawText;
  totalWithdraw.innerText = totalWithdrawAmount;
  withdrawField.value = "";
  // step 2
  let totalBlanca = document.getElementById("blench-total");
  let convertTotalBlancToNumber = parseFloat(totalBlanca);
  let totalBlanch = document.getElementById("Withdraw-field");
  let totalBlancaText = totalBlanca.value;
  let convertTotalInputFieldToNumber = parseFloat(totalBlancaText);
  let falafel = convertTotalBlancToNumber - convertTotalInputFieldToNumber;
  totalBlanca.innerText = falafel;
});
