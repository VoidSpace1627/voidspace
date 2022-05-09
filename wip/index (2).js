const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const scoreEl = document.querySelector('#scoreEl')
const startGameBtn = document.querySelector('#startGameBtn')
const modalEl = document.querySelector('#modalEl')
const bigScore = document.querySelector('#bigScore')

document.addEventListener('keydown', keydown, false)
document.addEventListener('keyup', keyup, false)

setInterval(animate,250)

window.onload = function () {
    img = document.getElementById("spriteSheet");
    //image, sx, sy, sw, sh, dx, dy, dw, dh
    //setInterval(player, 150)
}

    var direction = {
        stationaryUpX: [69, 69, 69, 69, 69, 69, 69],
        stationaryUpY: [2, 1, 2, 1, 2, 1, 2],
        flyUpX: [69, 136, 7, 136, 7, 136],
        flyUpY: [0, 0, 0, 0, 0, 0],
        turnLeftX: [69, 7, 136, 136, 7, 69],
        turnLeftY: [261, 261, 261, 328, 328, 328],
        turnRightX: [69, 7, 136, 136, 7, 69],
        turnRightY: [72, 72, 72, 133, 133, 133],
        flyDownX: [69, 7, 136, 69, 7, 136],
        flyDownY: [72, 72, 72, 449, 449, 449],
    }

var sx = direction.stationaryUpX
var sy = direction.stationaryUpY

var spriteIndex = 0

var width = 100
var height = 100

var alien = new Image()
alien.src = "../assets/alien.png"

var missile = new Image()
missile.src = "../assets/missile.png"

var enemy = new Image()
enemy.src = "../assets/enemy.png"

var explosion = new Image()
explosion.src = "../assets/explosion.png"

var heart = new Image()
heart.src = "../assets/heart.png"

var heart = new Image()
heart.src = "../assets/heart.png"

var blackHeart = new Image()
blackHeart.src = "../assets/blackHeart.png"

var ammunition = new Image()
ammunition.src = "../assets/ammunition.png"

var x = 0
var y = 0
var speedX = 0
var speedY = 0

var playerX = innerWidth / 2
var playerY = innerHeight / 2
var PspeedX = 0
var PspeedY = 0

var enemyX = 5
var enemyY = 3
var EspeedX = 0
var EspeedY = 0

var wpres = false
var apres = false
var spres = false
var dpres = false

var itemCountdown = 0
var itemX = 0
var itemY = 0

var heartX1 = 0
var heartY1 = 10

var heartX2 = 30
var heartY2 = 10

var heartX3 = 60
var heartY3 = 10

var num = 0

var check = 0

var Toggle = 0

console.log(Toggle)

var hit1 = 0
var hit2 = 0
var hit3 = 0
var hit4 = 0

var explosion1 = new Audio('../assets/Explosion1.mp3');
var explosion10 = new Audio('../assets/Explosion10.mp3');
var pickup = new Audio('../assets/pickup.mp3');
var thruster = new Audio('../assets/thruster.mp3');
var rocket1 = new Audio('../assets/rocket1.mp3');

explosion1.volume = 1;
explosion10.volume = 0.1;
pickup.volume = 1;
thruster.volume = 0.1;
rocket1.volume = 0.1;
myAudio.volume = 1;

function randomNumber() {
    Toggle = Math.floor(Math.random() * 100) <= 40
}

function removeHeart() {
    ctx.beginPath();
    ctx.drawImage(blackHeart, heartX3, heartY3, 50, 50)
    ctx.fill();
}

function drawItems() {
    ctx.beginPath();
    ctx.drawImage(heart, itemX, itemY, 50, 50)
    ctx.fill();
}

function drawAmmo() {
    ctx.beginPath();
    ctx.drawImage(ammunition, itemX, itemY, 50, 50)
    ctx.fill();
}

function drawLife1() {
    ctx.beginPath();
    ctx.drawImage(heart, heartX1, heartY1, 50, 50)
    ctx.fill();
}

function drawLife2() {
    ctx.beginPath();
    ctx.drawImage(heart, heartX2, heartY2, 50, 50)
    ctx.fill();
}

function drawLife3() {
    ctx.beginPath();
    ctx.drawImage(heart, heartX3, heartY3, 50, 50)
    ctx.fill();
}

function keydown(e) {
    if (e.key === 'w') {
        wpres = true
        y = y - 5
        sx = direction.flyUpX
        sy = direction.flyUpY
    }
    if (e.key === 'a') {
        apres = true
        x = x - 5
        sx = direction.turnLeftX
        sy = direction.turnLeftY
        if (spriteIndex === 5) {
            spriteIndex = 3
        }
    }
    if (e.key === 's') {
        spres = true
        y = y + 5
        sx = direction.flyDownX
        sy = direction.flyDownY
        if (spriteIndex === 5) {
            spriteIndex = 3
        }
    }
    if (e.key === 'd') {
        dpres = true
        x = x + 5
        sx = direction.turnRightX
         sy = direction.turnRightY
         if (spriteIndex === 5) {
            spriteIndex = 3
         }
    }
}

function keyup(e) {
    if (e.key === 'w') {
        wpres = false

    }
    if (e.key === 'a') {
        apres = false

    }
    if (e.key === 's') {
        spres = false

    }
    if (e.key === 'd') {
        dpres = false

    }
}

class Player {
    constructor(playerX, playerY, radius, color,
        velocity) {
        this.x = playerX;
        this.y = playerY;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(playerX * 2, playerY * 2, 0, 0, Math.PI * 2, false);
        ctx.drawImage(img, sx[spriteIndex], sy[spriteIndex], 53, 63, playerX, playerY, width, height)
        //ctx.drawImage(alien, playerX, playerY, 50, 50)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.fillStyle = "white"
        ctx.font = ctx.font = "30px Arial";
        ctx.fillText(spriteIndex, playerX, playerY)
        spriteIndex++
         sx = direction.stationaryUpX
         sy = direction.stationaryUpY
         if (spriteIndex === 6) {
             spriteIndex = 0
         }
    }
}

class Projectile {
    constructor(playerX, playerY, radius, color, velocity) {
        this.x = playerX;
        this.y = playerY;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(missile, this.x, this.y, 17, 17)
        ctx.fill()
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class Enemy {
    constructor(x, y, radius, color,
        velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        ctx.beginPath();
        ctx.drawImage(enemy, this.x, this.y, 50, 50)
        ctx.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

const friction = 1
class Particle {
    constructor(x, y, radius, color,
        velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1
    }
    draw() {
        ctx.save()
        ctx.globalAlpha = this.alpha
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.drawImage(explosion, this.x, this.y, 40, 40)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore()
    }
    update() {
        this.draw();
        this.velocity.x *= friction
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.alpha -= 0.01
    }
}

let player = new Player(playerX, playerY, 10, `hsl(${Math.random() * 360}, 50%, 50%)`);
let projectiles = [];
let enemies = [];
let particles = []

function init() {
    player = new Player(playerX, playerY, 10, `hsl(${Math.random() * 360}, 100%, 50%)`);//new player calls on constructor
    projectiles = [];
    enemies = [];
    particles = []
    score = 0
    num = 0
    scoreEl.innerHTML = score
    bigScore.innerHTML = score
}

function spawnEnemies() {
    setInterval(() => {
        const radius = 20;

        let x
        let y

        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.
                width + radius
            y = Math.random() * canvas.height
        } else {
            x = Math.random() * canvas.height
            y = Math.random() < 0.5 ? 0 - radius : canvas.
                width + radius
        }

        const color = `hsl(${Math.random() * 360}, 50%, 50%)`;

        const angle = Math.atan2(
            playerY - y,
            playerX - x
        )
        const velocity = {
            x: Math.cos(angle) * 3,
            y: Math.sin(angle) * 3
        }

        enemies.push(new Enemy(x, y, radius, color,
            velocity))

    }, 1000)
}

let animationId
let score = 0
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'rgba(0, 0, 0, 0)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    player.draw();
    if (num <= 0) {
        drawLife1()
        drawLife2()
        drawLife3()
    }
    if (num === 1) {
        drawLife2()
        drawLife3()
    }
    if (num === 2) {
        drawLife3()
    }
    if (num === 4) {
        removeHeart()
    }
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1)
        } else {
            particle.update()
        }
    })
    projectiles.forEach((projectile, index) => {
        projectile.update()

        if (projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height
        ) {
            setTimeout(() => {
                projectiles.splice(index, 1)
            }, 0)
        }
    })

    if (num < 0) {
        num = 0
    }

    enemies.forEach((enemy, index) => {
        enemy.update();

        const dist = Math.hypot(playerX - enemy.x,
            playerY - enemy.y)

        if (dist - enemy.radius - player.radius < 1) {/*collision between enemy and player and ends game*/

            explosion1.play();

            num = num + 1 // hit time code

            if (num === 4) { // hit time code
                cancelAnimationFrame(animationId)
                modalEl.style.display = 'flex'
                bigScore.innerHTML = score
            }

            enemies.splice(index, 1)
        }

        if (itemCountdown > 0) {
            drawItems()
            if (playerX < itemX + 20) {
                if (playerX > itemX - 10) {
                    if (playerY < itemY + 10) {
                        if (playerY > itemY - 10) {
                            if (num <= 4) {
                                num = num - 1
                            }
                            pickup.play();
                            itemCountdown = 0
                        }
                    }
                }
            }
            itemCountdown = itemCountdown - 1
        }

        /*if (itemCountdown > 0) {
            drawAmmo();
            if (playerX < itemX + 20) {
                if (playerX > itemX - 10) {
                    if (playerY < itemY + 10) {
                        if (playerY > itemY - 10) {
                            if (num <= 4) {
                                num = num - 1
                            }
                            pickup.play();
                            itemCountdown = 0
  
                        }
                    }
                }
            }
            itemCountdown = itemCountdown - 1
        }*/

        projectiles.forEach((projectile, projectileIndex) => {
            const dist = Math.hypot(projectile.x - enemy.x,
                projectile.y - enemy.y)

            if (dist - enemy.radius - projectile.radius < 1) {  /*collision between bullet and enemy*/

                explosion10.play();

                if (Math.floor(Math.random() * 100) <= 40) {
                    itemCountdown = 20 * 200 //fps * seconds. to change the ammout of seconds, change the seconds
                    itemX = enemy.x
                    itemY = enemy.y
                }


                for (let i = 0; i < enemy.radius * 2; i++) {
                    particles.push(
                        new Particle(projectile.x,
                            projectile.y,
                            Math.random() * 2,
                            enemy.color, {
                            x: (Math.random() - 1) * (Math.random
                                () * 8),
                            y: (Math.random() - 0.5) * (Math.random
                                () * 8)
                        }))
                }

                if (enemy.radius - 15 > 5) {

                    score += 100
                    scoreEl.innerHTML = score

                    gsap.to(enemy, {
                        radius: enemy.radius - 10
                    })
                    setTimeout(() => {
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                } else {

                    score += 250
                    scoreEl.innerHTML = score

                    setTimeout(() => {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
            }
        })
    });

    playerX = playerX
    playerY = playerY

    if (wpres === true) {
        playerY = playerY - 2

    }
    if (apres === true) {
        playerX = playerX - 2

    }
    if (spres === true) {
        playerY = playerY + 2

    }
    if (dpres === true) {
        playerX = playerX + 2

    }
    if (playerX > canvas.width) {
        playerX = canvas.width / 2
    }
    if (playerX < 0) {
        playerX = canvas.width / 2
    }
    if (playerY > canvas.height) {
        playerY = canvas.height / 2
    }
    if (playerY < 0) {
        playerY = canvas.height / 2
    }
    
    //animationId = requestAnimationFrame(animate);
}

// click event, shoots when clicked
addEventListener('click', (event) => {
    const angle = Math.atan2(
        event.clientY - playerY,
        event.clientX - playerX
    )
    const velocity = {
        x: Math.cos(angle) * 5,
        y: Math.sin(angle) * 5
    }
    if (projectiles.length <= 100) {
        projectiles.push(
            new Projectile(playerX, playerY,
                5, 'white', velocity)
        )
    }

    if (check === 2) {
        rocket1.play()
    }

})

startGameBtn.addEventListener('click', () => {
    init()
    animate();
    spawnEnemies();
    modalEl.style.display = 'none'
    check = 3
    if (check > 2) {
        check = 2
        if (check < 0) {
            check = 0
        }
    }
})

MusicBtn.addEventListener('click', () => {
    myAudio.src = "../songs/" + (Math.floor(Math.random() * 134)) + ".mp3 "
    function playAudio() {
        var myAudio = document.getElementById('myAudio');
        myAudio.loop = true
        myAudio.play();
        myAudio.pause();
    }

    function playAudio() {
        document.getElementById("myAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.currentTime = 0
        }
    }

    //loop function
    myAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play()
})

