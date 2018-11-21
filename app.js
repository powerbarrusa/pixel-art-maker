document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
  var onClick = function(event) {
    var canvas = document.querySelectorAll(".canvas")
    canvas.classList.add("swatch1");
    };
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