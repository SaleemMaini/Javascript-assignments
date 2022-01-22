// #1
let font = document.getElementById("fontSelect");
let color = document.getElementById("colorSelect");
let fontSize = document.getElementById("fontSizeSelect");

let update = () => {
  localStorage.setItem("fontFamily", font.value);
  localStorage.setItem("fontColor", color.value);
  localStorage.setItem("fontSize", fontSize.value);

  document.body.style.fontFamily = localStorage.getItem("fontFamily");
  document.body.style.color = localStorage.getItem("fontColor");
  document.body.style.fontSize = localStorage.getItem("fontSize");
};

update();
