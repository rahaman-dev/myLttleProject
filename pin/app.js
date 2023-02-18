// function generatePin() {
//   let generatePin = Math.round(Math.random() * 10000);
//   return generatePin;
// }

// function getPin() {
//   let pin = generatePin();
//   let pinStr = pin + "";
//   if (pinStr.length === 4) {
//     return pinStr;
//   } else {
//     console.log("this is not 4 digit");
//     return getPin();
//   }
// }

function generatePin() {
  let randomNum = Math.round(Math.random() * 10000);
  let randomNumStr = randomNum + "";
  if (randomNumStr.length === 4) {
    return randomNumStr;
  } else {
    return generatePin();
  }
}

function generatePin() {
  let randomNum = Math.round(Math.random() * 10000);
  let randomNumStr = randomNum.toString();
  if (randomNumStr.length === 4) {
    return randomNumStr;
  } else {
    return generatePin();
  }
}
document
  .getElementById("generatePinBtn")
  .addEventListener("click", function () {
    let getInput = document.getElementById("inputOne");
    getInput.value = generatePin();
  });
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    let number = event.target.innerText;
    let inputValue1 = document.getElementById("inputTow");
    if (isNaN(number)) {
      if (number === "c") {
        inputValue1.value = "";
      }
    } else {
      inputValue1.value = inputValue1.value + number;
    }
  });

document.getElementById("submitBtn").addEventListener("click", function () {
  let inputOne = document.getElementById("inputOne");
  let inputOneValue = inputOne.value;
  let inputTow = document.getElementById("inputTow");
  let inputTowValue = inputTow.value;

  let num1 = document.getElementById("Correct");
  let num2 = document.getElementById("Incorrect");
  if (inputTowValue === inputOneValue) {
    num1.style.display = "block";
    num2.style.display = "none";
  } else {
    num2.style.display = "block";
    num1.style.display = "none";
  }
});

document.getElementById("copyBtn").addEventListener("click", function () {
  let inputOneValue = document.getElementById("inputOne");
  navigator.clipboard.writeText(inputOneValue.value);
  document.getElementById("copyBtn").innerText = "copped";
});
// document.getElementById("Correct").style.display = "none";
// document.getElementById("Incorrect").style.display = "none";

// 2222
function generatePin() {
  let pin = Math.round(Math.random() * 10000);
  let pinStr = pin.toString();
  if (pinStr.length === 4) {
    return pinStr;
  } else {
    return generatePin();
  }
}
document
  .getElementById("generatePinBtn")
  .addEventListener("click", function () {
    let inputOne = document.getElementById("inputOne");
    let inputOneValue = (inputOne.value = generatePin());
  });
document.getElementById("copyBtn").addEventListener("click", function () {
  let inputOneValue = document.getElementById("inputOne");
  navigator.clipboard.writeText(inputOneValue.value);
  document.getElementById("copyBtn").innerText = "copped";
});
