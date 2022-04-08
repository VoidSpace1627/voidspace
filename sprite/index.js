const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//canvas.width = innerWidt 
//canvas.height = innerHeight 

var sy = 0
var sy1 = 0

var speedX = 10
var speedY = 10

var speedX2 = 10
var speedY2 = 10

var speedX1 = 10
var speedY1 = 10

var x = 700
var y = 350

var x1 = 750
var y1 = 400

var x2 = 800
var y2 = 350

var wpres = false
var apres = false
var spres = false
var dpres = false

var z1 = 'belly button'
var z2 = 'ketchup'
var z3 = 'bus'
var z4 = 'brick'
var z5 = 'chips'
var z6 = 'puppet'
var z7 = 'madman'
var z8 = 'potato'
var z9 = 'toilet paper'
var z10 = 'alter'
var z11 = 'join the cult brother'
var z12 = 'am I a robot?'
var z13 = 'Pleas dont press the button'
var z14 = 'I AM LEGEND!!!!!!!'
var z15 = 'Bob likes rumors'
var z16 = 'Shhhs im digging a hole'
var z17 = 'Cheese union insults spiders'
var z18 = 'toy butter error'
var z19 = 'service limit boots spinach'
var z20 = 'hello'



addEventListener('keydown', keydown, false)
addEventListener('keyup', keyup, false)

window.onload = function () {
    setInterval(draw, 100)
    //setInterval(random, 200)
    img = document.getElementById("spriteSheet");
    color = document.getElementById("color")
    run = document.getElementById("run")
}

function keydown(e) {
    if (e.key === 'w') {
        wpres = true
        if (sy === 0) {
            sy = 128
        } else {
            sy = 0
        }
    }
    if (e.key === 'a') {
        apres = true
        if (sy === 0) {
            sy = 128
        } else {
            sy = 0
        }
    }
    if (e.key === 's') {
        spres = true
        if (sy === 0) {
            sy = 128
        } else {
            sy = 0
        }
    }
    if (e.key === 'd') {
        dpres = true
        if (sy === 0) {
            sy = 128
        } else {
            sy = 0
        }
    }
}

function keyup(e) {
    if (e.key === 'w') {
        wpres = false
        if (sy === 0) {
            sy = 0
        } else {
            sy = 128
        }
    }
    if (e.key === 'a') {
        apres = false
        if (sy === 0) {
            sy = 0
        } else {
            sy = 128
        }
    }
    if (e.key === 's') {
        spres = false
        if (sy === 0) {
            sy = 0
        } else {
            sy = 128
        }
    }
    if (e.key === 'd') {
        dpres = false
        if (sy === 0) {
            sy = 0
        } else {
            sy = 128
        }
    }
}

function draw() {
    
    //c.globalAlpha = 0.1
    c.clearRect(0, 0, 5000, 5000)
    c.drawImage(img, 0, sy, 128, 76, x, y, 128, 76)   //image, sx, sy, sw, sh, dx, dy, dw, dh
    c.drawImage(color, 0, sy, 128, 76, x1, y1, 128, 76)
    c.drawImage(run, 0, sy1, 1024, 928, x2, y2, 128, 76)
    
    c.font = "20px Arial"
    c.fillStyle = "white"
    c.fillText('hello', x2, y2)
   
    if (sy === 0) {
        sy = 128
    } else {
        sy = 0
    }

    if (sy1 === 0) {
        sy1 = 928
    } else {
        sy1 = 0
    }

    if (wpres === false) {
        if (apres === false) {
            if (spres === false) {
                if (dpres === false) {
                    move()
                }
            }
        }
    }

    if (wpres === true) {
        y = y - 10
    }
    if (spres === true) {
        y = y + 10
    }
    if (apres === true) {
        x = x - 10
    }
    if (dpres === true) {
        x = x + 10
    }

    x1 = x1 - speedX1
    y1 = y1 - speedY1

    if (y1 > 550) {
        speedY1 = + 10
    }
    if (x1 > 1250) {
        speedX1 = + 10
    }

    if (y1 < 0) {
        speedY1 = - 10
    }
    if (x1 < 0) {
        speedX1 = - 10
    }
    
    x2 = x2 - speedX2
    y2 = y2 + speedY2 

    if (y2 > 550) {
        speedY2 = - 10
    }
    if (x2 > 1250) {
        speedX2 = + 10
    }

    if (y2 < 0) {
        speedY2 = + 10
    }
    if (x2 < 0) {
        speedX2 = - 10
    }

}

function move() {

    x = x + speedX
    y = y + speedY



    if (y > 550) {
        speedY = - 10
    }
    if (x > 1250) {
        speedX = - 10
    }

    if (y < 0) {
        speedY = + 10
    }
    if (x < 0) {
        speedX = + 10
    }


}