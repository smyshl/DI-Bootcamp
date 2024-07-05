const color_col = 3;
const color_row = 8;
const color_total = color_col * color_row;

const main_col = 60;
const main_row = 40;
const main_count = main_col * main_row;

const sidebar = document.querySelector("#sidebar");
const main = document.querySelector("#main");
const clear = document.querySelector("#clear");
const body = document.getElementsByTagName("body")[0];

let randomColors = [];
let color = null;
let mousedown = false;
let main_divs = [];

for (let i = 0; i < color_total; i++) {
  let div = document.createElement("div");
  div.style.backgroundColor = generateRandomColor();
  div.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
    console.log(color);
  });
  sidebar.appendChild(div);
}

for (let i = 0; i < main_count; i++) {
  let div = document.createElement("div");

  div.addEventListener("mousedown", function (event) {
    if (color != null) {
      event.target.style.backgroundColor = color;
    }
  });
  div.addEventListener("mouseover", function (event) {
    if (mousedown && color != null) {
      event.target.style.backgroundColor = color;
    }
  });
  main_divs.push(div);
  main.appendChild(div);
}

clear.addEventListener("click", function (event) {
  for (let x of main_divs) {
    x.style.backgroundColor = "white";
  }
});

body.addEventListener("mousedown", function (event) {
  mousedown = true;
});

body.addEventListener("mouseup", function (event) {
  mousedown = false;
});

function generateRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  if (randomColors.includes(color)) {
    return generateRandomColor();
  }
  randomColors.push(color);
  return color;
}
