const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

var x = 100
var y = 100
var speedY = 0
var speedX = 0

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillStyle = 'green'
    c.fillRect(x, y, 50, 50)
    
    x = x + speedX
    y = y + speedY

    
}

animate()