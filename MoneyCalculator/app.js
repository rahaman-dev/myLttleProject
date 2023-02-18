// function for getValue
function getInputValueById(inputId) {
  let getElementById = document.getElementById(inputId);
  let getElementValueById = getElementById.value;
  let convertGetElementValueById = parseFloat(getElementValueById);
  getElementById.value = "";
  return convertGetElementValueById;
}
// function 2 for set innerText
function setInnerText(elementId, newValue) {
  let getElementId = document.getElementById(elementId);
  getElementId.innerText = newValue;
}
document.getElementById("calculateBtn").addEventListener("click", function () {
  let getIncomeValue = getInputValueById("incomeField");
  let getFoodValue = getInputValueById("foodField");
  let getRentValue = getInputValueById("rentField");
  let getClothValue = getInputValueById("clothesField");
  let expensesTotal = getFoodValue + getClothValue + getRentValue;
  setInnerText("totalExpenses", expensesTotal);
  let totalBalance = getIncomeValue - expensesTotal;
  setInnerText("totalBalance", totalBalance);
  document.getElementById("saveBtn").addEventListener("click", function () {
    let getSaveValue = getInputValueById("saveField");
    let percentage = getSaveValue / 100;
    let getPercentage = percentage * getIncomeValue;
    setInnerText("savingAmount", getPercentage);
    let remainingTotal = totalBalance - getSaveValue;
    setInnerText("remainingBalance", remainingTotal);
  });
});

// formula for percentage
// let num1 = 10 / 100;
// let num2 = num1 * 1000;
// console.log(num2);

document.getElementById("btn2").addEventListener("click", function () {
  let phone1 = document.getElementById("phone1");
  let phone2 = document.getElementById("phone2");
  if (isNaN(phone1) || isNaN(phone2)) {
    console.log("please enter a number");
  } else {
    let multiply = phone1 * phone2;
    console.log(multiply);
  }
});
