
let cube = document.getElementById('box');
let container = document.body; 

function moveCube() {
  let newLeft = Math.random() * container.clientWidth;
  let newTop = Math.random() * container.clientHeight;
  let transformString = "translate(" + newLeft + "px, " + newTop + "px) scale(" + (Math.random() * 2 + 0.5) + ")";
  let backgroundColorString = "rgb(" + Math.random() * 255 + ", " + Math.random() * 255 + ", " + Math.random() * 255 + ")";

  cube.style.transform = transformString;
  cube.style.backgroundColor = backgroundColorString;
}

setInterval(moveCube, 2000);
