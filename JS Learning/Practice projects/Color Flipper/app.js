const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomColors = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColors];
  color.textContent = colors[randomColors];
});
