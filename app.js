var canvas = document.getElementById("canvas");
var redColor = "red";
var blueColor = "blue";

document.addEventListener("DOMContentLoaded", function(event) {

  for (var i = 0; i < 25; i++){
    var newBox = document.createElement("div");
    newBox.classList.add("pixel");

    var onClick = function(event) {
      event.target.classList.toggle(blueColor);
    };
    newBox.addEventListener("click", onClick);
    canvas.appendChild(newBox);
  }
});