// make circle bounce screen saver that uses a slider to change the color of the circles using rgba and or hsl with a rgba background making a trail

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

 - 20;
canvas.width = innerWidth - 20;
canvas.height = innerHeight
var x = []
var y = []
var d = []
var speedX = []
var speedY = []

for (i = 0; i < 200; i++) {
    x.push(Math.random() * 10)
    y.push(Math.random() * 10)
    speedX.push(Math.random() * 20 + 10)
    speedY.push(Math.random() * 20 + 10)
    d.push(Math.random() * 50 + 10)

}

function circle() {

    var r = document.getElementById("Red").value
    var g = document.getElementById("Green").value
    var b = document.getElementById("Blue").value
    var s = document.getElementById("Spawn").value


    for (i = 0; i < s; i++) {
        c.beginPath()
        c.arc(x[i], y[i], d[i], 0, 2 * Math.PI)
        c.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')'
        c.fill()

    }

}

function animate() {
    circle()
    requestAnimationFrame(animate)
    c.globalAlpha = 0.3
    c.fillStyle = "black"
    c.fillRect(0, 0, canvas.width, canvas.height)


    for (i = 0; i < x.length; i++) {

        x[i] = x[i] + speedX[i]
        y[i] = y[i] + speedY[i]

        if (y[i] >= canvas.height) {
            speedY[i] = - Math.random() * 5 //20 + 10
        }
        if (y[i] <= 0 - 30) {
            speedY[i] = + Math.random() * 5 //20 + 10
        }
        if (x[i] > canvas.width) {
            speedX[i] = - Math.random() * 5 //20 + 10
        }
        if (x[i] < 0) {
            speedX[i] = + Math.random() * 5 //20 + 10
        }
    }
}

//console.log(a)

animate()