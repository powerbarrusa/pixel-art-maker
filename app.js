var canvasHeight = 750;
var canvasWidth = 750;
var canvas = document.getElementById("canvas");


document.addEventListener("DOMContentLoaded", function(event) {

  var onClick = function(event) {
    canvas.classList.toggle("black");
    };
    canvas.addEventListener("click", onClick);
    
    for (var i = 0; i < 961; i++){
      var newBox = document.createElement("div");
      newBox.classList.add("pixel");
      canvas.appendChild(newBox);
    }

    for (var i = 0; i)
});




// var black = document.getElementById("swatch1");
//         var red = document.getElementById("swatch2");
//         var blue = document.getElementById("swatch3");
//         var yellow = document.getElementById("swatch4");
//         var green = document.getElementById("swatch5");
//         var orange = document.getElementById("swatch6");
//         var purple = document.getElementById("swatch7");
//         var white = document.getElementById("swatch8");
//         var brown = document.getElementById("swatch9");


// canvas.addEventListener("click", onClick)