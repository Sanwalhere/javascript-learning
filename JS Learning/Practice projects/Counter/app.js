let value = document.getElementById("value");
let btnDecrease = document.querySelector(".decrease");
let btnReset = document.querySelector(".reset");
let btnIncrease = document.querySelector(".increase");

let positive = "green";
let negitive = "red";

btnDecrease.addEventListener("click", () => {
  value.textContent--;
  if (value.textContent > 0) {
    value.style.color = positive;
  } else if (value.textContent < 0) {
    value.style.color = negitive;
  } else {
    value.style.color = "hsl(209, 61%, 16%)";
  }
});

btnIncrease.addEventListener("click", () => {
  value.textContent++;
  if (value.textContent > 0) {
    value.style.color = positive;
  } else if (value.textContent < 0) {
    value.style.color = negitive;
  } else {
    value.style.color = "hsl(209, 61%, 16%)";
  }
});

btnReset.addEventListener("click", () => {
  value.textContent = 0;
  value.style.color = "hsl(209, 61%, 16%)";
});
