var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var STANLEY_X = x(.5);
var STANLEY_Y = y(.5);

$(document).ready(function() {
  setInterval(function() {
    STANLEY_X++;
    STANLEY_Y++;
    canvas();
  }, 1000 / 60)
  canvas();

  window.onresize = resize;

  window.onmousemove = trackMouse;
});

function trackMouse(e) {
  MOUSE_X = e.screenX;
  MOUSE_Y = e.screenY;
}

function resize() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  canvas()
}

function x(percent) {
  return Math.round(WIDTH * percent);
}

function y(percent) {
  return Math.round(HEIGHT * percent);
}
// var WIDTH = screen.width;
// var HEIGHT = screen.height;



function canvas() {


  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;

  ctx.fillStyle = 'white';
  ctx.fillRect(0,0, WIDTH, HEIGHT);

  ctx.fillStyle = 'black'
  ctx.fillText("Stanley", STANLEY_X, STANLEY_Y);

//   ctx.fillStyle = 'yellow';
//   ctx.fillRect(100,100,300,300);
//   ctx.strokeRect(100,100,300,300);

//   // fillRect(x, y, width, height)
//   ctx.fillStyle = 'green';
//   // ctx.fillRect(0 + WIDTH / 4, 0 + HEIGHT / 4, WIDTH / 2, HEIGHT / 2);
//   ctx.fillRect(x(.25), y(.25), x(.5), y(.5));

//   ctx.strokeStyle = 'black';
//   ctx.lineWidth = '5';
//   ctx.strokeRect(0 + WIDTH / 4, 0 + HEIGHT / 4, WIDTH / 2, HEIGHT / 2);
}
