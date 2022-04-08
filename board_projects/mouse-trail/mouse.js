const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var pointerX = -1;
var pointerY = -1;
var x = 100
var y = 100
var centX = canvas.width / 2
var centY = canvas.height / 2
var speedX = 7
var speedY = 7



document.onmousemove = function (event) {
  pointerX = event.pageX;
  pointerY = event.pageY;
}


setInterval(draw, 50)
setInterval(line, 50)

function draw() {
  c.globalAlpha = 0.3
  c.clearRect(0, 0, canvas.width, canvas.height)
  c.fillRect(pointerX / 2, pointerY / 2, pointerX, pointerY)
  var hue = pointerX - pointerY
  c.fillStyle = 'hsl(' + hue + ',1000%, 50%)'

}

function boxes() {

}

function line() {
  // c.clearRect(0, 0, canvas.width, canvas.height)
  //c.globalAlpha = 0.3
  //c.strokeStyle = "red"
  //c.strokeWeight = "3"
  // c.beginPath()
  //c.moveTo(pointerX + 50, pointerY + 50)
  //c.lineTo(pointerX, pointerY)
  //c.stroke()
}
