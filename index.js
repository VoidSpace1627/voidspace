const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var circle1X = 100
var circle1Y = 100

var circle1W = Math.floor(Math.random() * 90) // circle width variable
var circle1H = 0

var circle2W = Math.floor(Math.random() * 90) // circle width variable
var circle2H = 0

var circle3W = Math.floor(Math.random() * 90) // circle width variable
var circle3H = 0

var circle4W = Math.floor(Math.random() * 90) // circle width variable
var circle4H = 0

var circle2X = 0
var circle2Y = 0

var circle3X = 200
var circle3Y = 20

var circle4X = 400
var circle4Y = 50

var speed4X = 5
var speed4Y = 5

var speed3X = 5
var speed3Y = 5

var speed2X = 5
var speed2Y = 5

var speedX = 5
var speedY = 5

var hue = Math.floor(Math.random() * 10000) // this is your color code that changes
var hue2 = Math.floor(Math.random() * 900)
var hue3 = Math.floor(Math.random() * 400)
var hue4 = Math.floor(Math.random() * 5767)

function circle1() { // draws a box (now a circle lol)
    c.beginPath()
    c.arc(circle1X, circle1Y, circle1W, 0, 2 * Math.PI)
    c.fillStyle = 'hsl(' + hue + ',1000%, 50%)' // you need this to set a starting color for each circle
    c.fill()
}

function circle2() { // draws a box (now a circle lol)
    c.beginPath()
    c.arc(circle2X, circle2Y, circle2W, 0, 2 * Math.PI)
    c.fillStyle = 'hsl(' + hue2 + ',1000%, 50%)'
    c.fill()
}

function circle3() { // draws a box (now a circle lol)
    c.beginPath()
    c.arc(circle3X, circle3Y, circle3W, 0, 2 * Math.PI)
    c.fillStyle = 'hsl(' + hue3 + ',1000%, 50%)'
    c.fill()
}

function circle4() { // draws a box (now a circle lol)
    c.beginPath()
    c.arc(circle4X, circle4Y, circle4W, 0, 2 * Math.PI)
    c.fillStyle = 'hsl(' + hue4 + ',1000%, 50%)'
    c.fill()
}

function animate() { // this is an animation loop the same thing as setinterval the code inside would go into what your setinterval is called
    c.clearRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)

    circle1() // calls the function that draws the corresponding name
    circle2()
    circle3()
    circle4()

    if (circle1W < 20) {
        circle1W = 20
    }
    if (circle2W < 20) { // keeps the circles from becomeing too small
        circle2W = 20
    }
    if (circle3W < 20) {
        circle3W = 20
    }
    if (circle4W < 20) {
        circle4W = 20
    }

    circle1X = circle1X + speedX
    circle1Y = circle1Y + speedY

    if (circle1Y > canvas.height - 45) {                    // this is the collsion code block
        speedY = speedY = - Math.floor(Math.random() * 10)
        hue = Math.floor(Math.random() * 10000)            // this is what changes the color when you bounce off the sides 
        circle1W = Math.floor(Math.random() * 90)         // changes the size of the circle when it bounces 
        //circle1H = Math.floor(Math.random() * 90)
    }
    if (circle1Y < 0) {
        speedY = speedY = + Math.floor(Math.random() * 10)
        hue = Math.floor(Math.random() * 134)
        circle1W = Math.floor(Math.random() * 90)
        //circle1H = Math.floor(Math.random() * 90)
    }
    if (circle1X > canvas.width - 45) {
        speedX = speedX = - Math.floor(Math.random() * 10)
        hue = Math.floor(Math.random() * 10000)
        circle1W = Math.floor(Math.random() * 90)
        //circle1H = Math.floor(Math.random() * 90)
    }
    if (circle1X < 0) {
        speedX = speedX = + Math.floor(Math.random() * 10)
        hue = Math.floor(Math.random() * 800)
        circle1W = Math.floor(Math.random() * 90)
        //circle1H = Math.floor(Math.random() * 90)
    }

    // circle2 collsion

    circle2X = circle2X + speed2X
    circle2Y = circle2Y + speed2Y

    if (circle2Y > canvas.height - 45) {
        speed2Y = speed2Y = - Math.floor(Math.random() * 10)
        hue2 = Math.floor(Math.random() * 400)
        circle2W = Math.floor(Math.random() * 90)
        //circle2H = Math.floor(Math.random() * 90)
    }
    if (circle2Y < 0) {
        speed2Y = speed2Y = + Math.floor(Math.random() * 10)
        hue2 = Math.floor(Math.random() * 134)
        circle2W = Math.floor(Math.random() * 90)
        //circle2H = Math.floor(Math.random() * 90)
    }
    if (circle2X > canvas.width - 45) {
        speed2X = speed2X = - Math.floor(Math.random() * 10)
        hue2 = Math.floor(Math.random() * 200)
        circle2W = Math.floor(Math.random() * 90)
        //circle2H = Math.floor(Math.random() * 90)
    }
    if (circle2X < 0) {
        speed2X = speed2X = + Math.floor(Math.random() * 10)
        hue2 = Math.floor(Math.random() * 800)
        circle2W = Math.floor(Math.random() * 90)
        //circle2H = Math.floor(Math.random() * 90)
    }

    // circle3 collsion

    circle3X = circle3X + speed3X
    circle3Y = circle3Y + speed3Y

    if (circle3Y > canvas.height - 45) {
        speed3Y = speed3Y = - Math.floor(Math.random() * 10)
        hue3 = Math.floor(Math.random() * 10000)
        circle3W = Math.floor(Math.random() * 90)
        //circle3H = Math.floor(Math.random() * 90)
    }
    if (circle3Y < 0) {
        speed3Y = speed3Y = + Math.floor(Math.random() * 10)
        hue3 = Math.floor(Math.random() * 134)
        circle3W = Math.floor(Math.random() * 90)
        //circle3H = Math.floor(Math.random() * 90)
    }
    if (circle3X > canvas.width - 45) {
        speed3X = speed3X = - Math.floor(Math.random() * 10)
        hue3 = Math.floor(Math.random() * 10000)
        circle3W = Math.floor(Math.random() * 90)
        //circle3H = Math.floor(Math.random() * 90)
    }
    if (circle3X < 0) {
        speed3X = speed3X = + Math.floor(Math.random() * 10)
        hue3 = Math.floor(Math.random() * 134)
        circle3W = Math.floor(Math.random() * 90)
        //circle3H = Math.floor(Math.random() * 90)
    }

    // circle4 collsion

    circle4X = circle4X + speed4X
    circle4Y = circle4Y + speed4Y

    if (circle4Y > canvas.height - 45) {
        speed4Y = speed4Y = - Math.floor(Math.random() * 10)
        hue4 = Math.floor(Math.random() * 10000)
        circle4W = Math.floor(Math.random() * 90)
        //circle4H = Math.floor(Math.random() * 90)
    }
    if (circle4Y < 0) {
        speed4Y = speed4Y = + Math.floor(Math.random() * 10)
        hue4 = Math.floor(Math.random() * 134)
        circle4W = Math.floor(Math.random() * 90)
        //circle4H = Math.floor(Math.random() * 90)
    }
    if (circle4X > canvas.width - 45) {
        speed4X = speed4X = - Math.floor(Math.random() * 10)
        hue4 = Math.floor(Math.random() * 10000)
        circle4W = Math.floor(Math.random() * 90)
        //circle4H = Math.floor(Math.random() * 90)
    }
    if (circle4X < 0) {
        speed4X = speed4X = + Math.floor(Math.random() * 10)
        hue4 = Math.floor(Math.random() * 134)
        circle4W = Math.floor(Math.random() * 90)
        //circle4H = Math.floor(Math.random() * 90)
    }

}
animate()