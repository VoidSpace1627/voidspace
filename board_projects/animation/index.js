const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

var q
var b
var x
var y
var width
var height
var rotation
var paddingGap
var rotationIncrement


function int() {
    q = [j]
    b = [j]


    for (var j = 0; j < 1000; j++) {
        q.push(Math.floor(Math.random() * 80))
        b.push(Math.floor(Math.random() * 90))
    }

    x = [(canvas.width - canvas.height) / 2] // 300
    y = [0]//90
    width = [canvas.height] //420 
    height = [canvas.height] //400
    rotation = []
    paddingGap = q[j]
    rotationIncrement = Math.PI / 360
    //these craete the initial box and the padding in px

    for (i = 0; i < b[j]; i++) { //this creates more boxes 
        x.push(x[i] + paddingGap) //move the new box over to create padding. using [i] selects the previous x
        y.push(y[i] + paddingGap)
        width.push(width[i] - paddingGap * 2) //you have to reduce the width and height by double the padding gap to make it all even
        height.push(height[i] - paddingGap)
        rotation.push(0)
    }

}
int()

var z = 0.1

function animate() {
    requestAnimationFrame(animate)
    
    c.globalAlpha = z
    c.clearRect(0, 0, canvas.width, canvas.height)
    for (var i = 0; i < x.length; i++) {//displays all the boxes. x.lenght gives you the number of boxes to draw

        c.save()//if you take out the save and restore rotate will work like normal, but with save and restore then you can set it to an exact direction

        c.translate(x[i] + (width[i] / 2), y[i] + (height[i] / 2)) //put the top left corner of the canvas at the center of the box. you use the width and height to get to the actual center of the box instead of the top left of it

        //also translate isn't moving it to a coordinate, it's increasing it by that x and y. so if x,y is 0,0, and you do translate(10,10) twice, your x y is now 20,20. thats why you need save an restore, it puts you back to 0,0
        if (i % 2 === 0) {//coinflip if to flip the colors
            for (var k = 0; k < 100; k++) {

                var hue = k 
                c.fillStyle = 'hsl(' + hue + ',1000%, 50%)'
                //c.beginPath()
               // c.arc(x[i], y[i], width[i], height[i], 2 * Math.PI)
               // c.strokeStyle = 'hsl(' + hue + ',1000%, 50%)'
                //c.stroke()
            }
            rotation[i] = rotation[i] + (rotationIncrement * (i + 1) / 10)
        } else {
            for (var k = 10; k > 0; k--) {

                var hue = k 
                c.fillStyle = 'hsl(' + hue + ',1000%, 50%)'
                //c.beginPath()
               // c.arc(x[i], y[i], width[i], height[i], 2 * Math.PI)
               // c.strokeStyle = 'hsl(' + hue + ',1000%, 50%)'
                //c.stroke()
                
            }
            rotation[i] = rotation[i] - (rotationIncrement * (i + 1) / 10)
        }
        c.rotate(rotation[i]);//whatever you set this too, it will INCREASE not CHANGE the rotation. this is like doing rotation = rotation + something. so if you do rotate(90) it is rotation BY 90 every time, not changing the rotation to 90 degrees.

        c.translate(-(x[i] + (width[i] / 2)), -(y[i] + (height[i] / 2)))

        //c.fillRect(x[i], y[i], width[i], height[i])
        c.strokeStyle(x[i], y[i], width[i], height[i])

        c.restore()
    }
}
animate()
function ClearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    int()
}
