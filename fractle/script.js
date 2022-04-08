addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const c = canvas.getContext('2d')
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    c.lineCap = 'round';
    c.shadowColor = 'hsl(' + Math.floor(Math.random() * 359 + 1) + ', 100%, 50%)'
    c.shadowOffsetX = 10
    c.shadowOffsetY = 5
    c.shadowBlur = 15

    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3
    const maxLevel = 2 // determins max depth of fractle
    const branches = 2 // the number of branches that split from the main branch 

    let rpres = false // keep the varibles as let due to them being called in multiple functions they need to stay as a global

    let sides = 5 // diff number of branches
    let scale = 0.5 // how much smaller the segments are comapred to parent b ranch
    let spread = 0.8 // angle between parent branch and segments
    let color = 'hsl(' + Math.floor(Math.random() * 359 + 1) + ', 100%, 50%)'
    let lineWidth = Math.floor(Math.random() * 9 + 3)
    let currentSide = 0

    // code block for button

    const randomize = document.getElementById('randomize')
    const slider_spread = document.getElementById('spread')
    const lable_spread = document.querySelector('[for="spread"]')
    slider_spread.addEventListener('change', function (e) {
        spread = e.target.value

        c.clearRect(0, 0, canvas.width, canvas.height)
        drawFractle()

    })

    function drawBranch(level) {
        if (level > maxLevel) return;
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(size, 0);
        c.stroke();
        for (let i = 0; i < branches; i++) {
            c.save()
            c.translate(size - (size / branches) * i, 0)
            c.scale(scale, scale)

            c.save()
            c.rotate(spread);
            drawBranch(level + 1)
            c.restore()

            c.save()
            c.rotate(-spread)
            drawBranch(level + 1)
            c.restore()

            c.restore()
        }

    }

    function drawFractle() {
        if (currentSide < sides) {
            c.save()
            c.lineWidth = lineWidth;
            c.strokeStyle = color;
            c.translate(canvas.width / 2, canvas.height / 2)
            //c.scale(1, 1)
            //c.rotate(0)
            c.rotate((Math.PI * 2) / sides)
            drawBranch(0)
            c.restore()
            currentSide++
        }

    }
    setInterval(drawFractle, 100)

    function randomizeFractle() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        sides = Math.floor(Math.random() * 7 + 2) // diff number of branches
        scale = Math.random() * 0.2 + 0.4 // how much smaller the segments are comapred to parent b ranch
        spread = Math.random() * 2.9 + 0.1 // angle between parent branch and segments
        color = 'hsl(' + Math.floor(Math.random() * 359 + 1) + ', 100%, 50%)'
        lineWidth = Math.floor(Math.random() * 9 + 3)
        c.shadowColor = 'hsl(' + Math.floor(Math.random() * 359 + 1) + ', 100%, 50%)'
        drawFractle()

    }

    randomize.addEventListener('click', function () {
        randomizeFractle()
        drawFractle()
    })

    addEventListener('keypress', keypress)

    function keypress(e) {
        if (e.key === "r") {
            rpres = true
            randomizeFractle()
        }
    }
})