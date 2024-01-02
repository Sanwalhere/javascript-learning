const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");
let bg = document.querySelector(".bg");

btn.addEventListener("click", () => {
  let hexColorCode = [];
  const getRandomIndex = () => Math.floor(Math.random() * hex.length);

  while (hexColorCode.length <= 5) {
    hexColorCode.push(hex[getRandomIndex()]);
  }

  let hexColorCodeString = hexColorCode.toString().split(",").join("");
  console.log(hexColorCodeString);

  document.body.style.backgroundColor = `#${hexColorCodeString}`;
  color.textContent = `#${hexColorCodeString}`;
  bg.textContent = `${a(click)}`;
});
