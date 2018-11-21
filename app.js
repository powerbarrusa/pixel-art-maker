var color = "white"
var canvas = document.getElementById("canvas");
var blueColors = document.getElementById("swatch3")
blueColors.addEventListener("click", () => {
  color = "blue"
})
var blackColors = document.getElementById("swatch1")
blackColors.addEventListener("click", () => {
  color = "black"
})
var yellowColors = document.getElementById("swatch4")
yellowColors.addEventListener("click", () => {
  color = "yellow"
})
var greenColors = document.getElementById("swatch5")
greenColors.addEventListener("click", () => {
  color = "green"
})
var brownColors = document.getElementById("swatch9")
brownColors.addEventListener("click", () => {
  color = "brown"
})
var orangeColors = document.getElementById("swatch6")
orangeColors.addEventListener("click", () => {
  color = "orange"
})
var purpleColors = document.getElementById("swatch7")
purpleColors.addEventListener("click", () => {
  color = "purple"
})
var whiteColors = document.getElementById("swatch8")
whiteColors.addEventListener("click", () => {
  color = "white"
})
var redColors = document.getElementById("swatch2")
redColors.addEventListener("click", () => {
  color = "red"
})



document.addEventListener("DOMContentLoaded", function(event) {

  for (var i = 0; i < 25; i++){
    var newBox = document.createElement("div");
    newBox.classList.add("pixel");

    var onClick = function(event) {
      event.target.classList.toggle(color)
    };

    newBox.addEventListener("click", onClick);
    canvas.appendChild(newBox);
  }
});


