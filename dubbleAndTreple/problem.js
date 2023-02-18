// 1
document.getElementById("double-btn").addEventListener("click", function () {
  let getInputField = document.getElementById("input-field-id");
  let getInputFieldText = getInputField.value;
  let convertGetInputFieldTextToNumber = parseFloat(getInputFieldText);
  let makeDabble = convertGetInputFieldTextToNumber * 2;
  // step 2
  let getTotalAmount = document.getElementById("total-text");
  let getTotalAmountText = getTotalAmount.innerText;
  let convertGetTotalAmountText = parseFloat(getTotalAmountText);
  getTotalAmount.innerText = makeDabble;
  getInputField.value = "";
  /* if (typeof getInputFieldText === "number") {
    alert("please enter a number");
  } else {
  } */
});
// 2
document.getElementById("triple-btn").addEventListener("click", function () {
  let getInputField = document.getElementById("input-field-id");
  let getInputFieldText = getInputField.value;
  let convertGetInputFieldTextToNumber = parseFloat(getInputFieldText);
  let makeTriple = convertGetInputFieldTextToNumber * 3;
  // step 2
  let getTotalAmount = document.getElementById("total-text");
  let getTotalAmountText = getTotalAmount.innerText;
  let convertGetTotalAmountText = parseFloat(getTotalAmountText);
  getTotalAmount.innerText = makeTriple;
  getInputField.value = "";
});
