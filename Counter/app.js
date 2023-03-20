let count = document.getElementById("field");

document.getElementById("up").addEventListener("click", function () {
  count.innerHTML++;
});

document.getElementById("down").addEventListener("click", function () {
  count.innerHTML--;
});

document.getElementById("reset").addEventListener("click", function () {
  count.innerHTML = 0;
});
