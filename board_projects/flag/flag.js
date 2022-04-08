const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var r = 0;
var g = 0
var b = 0;

function starBox() {
    c.fillStyle = 'rgb(' + r +', ' + g +', ' + b +')'
    c.fillRect(0, 0, 350, 360)
}

function stars() {

}

function redLine() {
    c.fillStyle = 'rgb(' + r +', 0, 0)'
    c.fillRect(350, 0, canvas.width, 40)
    c.fillRect(350, 120, canvas.width, 40)
    c.fillRect(350, 240, canvas.width, 40)
    c.fillRect(0, 360, canvas.width, 40)
    c.fillRect(0, 480, canvas.width, 40)
    c.fillRect(0, 600, canvas.width, 40)
}

function whiteLine() {
    c.fillStyle = 'rgb(' + r +', ' + g +', ' + b +')'
    c.fillRect(350, 40, canvas.width, 40)
    c.fillRect(350, 160, canvas.width, 40)
    c.fillRect(350, 280, canvas.width, 40)
    c.fillRect(0, 400, canvas.width, 40)
    c.fillRect(0, 520, canvas.width, 40)
}

function blueLine() {
    c.fillStyle = 'rgb(0, 0, '+ b +', 1)'
    c.fillRect(350, 80, canvas.width, 40)
    c.fillRect(350, 200, canvas.width, 40)
    c.fillRect(350, 320, canvas.width, 40)
    c.fillRect(0, 440, canvas.width, 40)
    c.fillRect(0, 560, canvas.width, 40)
}

setInterval(blue, 190);
function blue() {
    color = 'rgb(0, 0, ' + b +')';
    document.body.style.backgroundColor = color;
    b < 255 ? b++ : 0;
  if(b === 255){
  b = 62
}
//console.log(b)
}

setInterval(red, 150);
function red() {
    color = 'rgb(' + r +', 0, 0)';
    document.body.style.backgroundColor = color;
    r < 255 ? r++ : 0;
  if(r === 255){
  r = 62
}
//console.log(r)
}

setInterval(white, 100);
function white() {
    color = 'rgb(' + r +', ' + g +', ' + b +')';
    document.body.style.backgroundColor = color;
    g < 255 ? g++ : 0;
  if(g === 255){
  g = 62
}
//console.log(g)
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)

    starBox()
    redLine()
    whiteLine()
    blueLine()
  
}
animate()