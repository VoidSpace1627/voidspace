const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

document.addEventListener('keydown', keydown, false)
document.addEventListener('keyup', keyup, false)

var playerX = innerWidth / 2
var playerY = innerHeight / 2    // player variables
var playerVelX = 0
var playerVelY = 0

var enemyVelX = 20   // enemy movement variables
var enemyVelY = 0.01

var projectileX = playerX
var projectileY = playerY   // projectile variables

var enemyRowCount = Math.random() * 20;
var enemyColumnCount = Math.random() * 5;
var enemyWidth = 50;
var enemyHeight = 50;    // enemy spawn feild variables
var enemyPadding = Math.random() * 50;
var enemyOffsetTop = Math.random() * 50;
var enemyOffsetLeft = Math.random() * 50;

var wpres = false
var apres = false
var spres = false   // keybinds 
var dpres = false

var alien = new Image()
alien.src = "../assets/alien.png"   // img assets 


function keydown(e) {
    if (e.key === "w") {
        playerVelY = - 5
    }
    if (e.key === "a") {
        playerVelX = - 5
    }
    if (e.key === "s") {
        playerVelY = + 5
    }
    if (e.key === "d") {
        playerVelX = + 5
    }
}

function keyup(e) {
    if (e.key === "w") {
        playerVelY = 0
    }
    if (e.key === "a") {
        playerVelX = 0
    }
    if (e.key === "s") {
        playerVelY = 0
    }
    if (e.key === "d") {
        playerVelX = 0
    }

}
class Player {
    constructor(playerX, playerY, radius, color,          // player class
        velocity) {
        this.x = playerX;
        this.y = playerY;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        //c.fillStyle = "red"
        //c.fillRect(playerX, playerY, 50, 50)
        c.drawImage(alien, playerX, playerY, 50, 50)
    }
    update() {
        playerX = playerX + playerVelX
        playerY = playerY + playerVelY
        this.draw();
    }
}

class Projectile {
    constructor(projectileX, projectileY, radius, color, velocity) {                    // projectile class
        this.x = projectileX;
        this.y = projectileY
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'green'
        c.fill()
    }
    update() {

        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
        this.draw();
    }
}

class Enemies {

    draw() {
        for (var i = 0; i < enemyColumnCount; i++) {                         // enemy class
            for (var j = 0; j < enemyRowCount; j++) {
                if (enemies[i][j].status == 1) { //1 is alive, 0 is dead. if the enemy is dead we don't draw them. 
                    //projectile collision check
                    for (let k = 0; k < projectiles.length; k++) {
                        const distance = Math.hypot(projectiles[k].x - (enemies[i][j].x + enemyWidth / 2),
                            projectiles[k].y - (enemies[i][j].y + enemyHeight / 2))

                        if (distance < enemyWidth / 2) {
                            enemies[i][j].status = 0
                        }

                    }

                    //movement code
                    enemies[i][j].x = enemies[i][j].x + enemyVelX
                    enemies[i][j].y = enemies[i][j].y + enemyVelY
                    c.drawImage(alien, enemies[i][j].x, enemies[i][j].y, enemyWidth, enemyHeight)

                    c.fillStyle = "green"
                    c.fillRect((enemies[i][j].x + enemyWidth / 2), (enemies[i][j].y + enemyHeight / 2), 2, 2)
                    if (enemies[i][j].x > window.innerWidth) {
                        enemyVelX = -enemyVelX
                        enemyVelY = enemyVelY 
                    }
                    if (enemies[i][j].x < 0) {
                        enemyVelX = -enemyVelX
                        enemyVelY = enemyVelY + 0.01
                    }
                    if (enemies[i][j].y > innerHeight / 2) {
                        enemyVelX = enemyVelX 
                        enemyVelY = -enemyVelY + 0.01
                    }
                    if (enemies[i][j].y < 20) {
                        enemyVelX = enemyVelX 
                        enemyVelY = -enemyVelY + 0.01
                    }
                }
            }
        }


    }

    update() {

        this.draw();
    }
}

const enemies = new Enemies()
//const enemies = []

for (var i = 0; i < enemyColumnCount; i++) {          // enemy array ?
    enemies[i] = [];
    for (var j = 0; j < enemyRowCount; j++) {
        enemies[i][j] = {
            x: (j * (enemyWidth + enemyPadding)) + enemyOffsetLeft,
            y: (i * (enemyHeight + enemyPadding)) + enemyOffsetTop,
            status: 1, //1 is alive, 0 is dead
            xVel: 1, // enemy movement code
            yVel: 0.01,
        };
    }
}

function collisionDetection() {                            // some enemy collision code block
    for (var i = 0; i < enemyColumnCount; i++) {
        for (var j = 0; j < enemyRowCount; j++) {
            var b = enemies[i][j];
            if (b.status == 1) {
                if (this.x > b.x && this.x < b.x + enemyWidth && this.y > b.y && this.y < b.y + enemyHeight) {
                    alert(hit)
                    b.status = 0;
                }
            }
        }
    }
}

const player = new Player()
const projectiles = []

let animationId
function animate() {
    //c.fillStyle = "blue"
    c.clearRect(0, 0, canvas.width, canvas.height)
    animationId = requestAnimationFrame(animate);

    player.update()
    enemies.update()
    collisionDetection()

    projectiles.forEach((projectile, index) => {             // more projectile code here 
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

    if (playerY < innerHeight / 2) { // top collsion
        playerY = innerHeight / 2
    }

    if (playerY > canvas.height - player.height) { // bottom collsion
        playerY = canvas.height - player.height
    }

    if (playerX < 0) { // left collsion
        playerX = 0
    }

    if (playerX > canvas.width - player.width) { // right collsion broken
        playerX = canvas.width - player.width
    }
}

addEventListener('click', (event) => {      // click event for projectile
    const angle = Math.atan2(
        event.clientY - playerY,
        event.clientX - playerX
    )
    const velocity = {
        x: Math.cos(angle) * 4,
        y: Math.sin(angle) * 4
    }
    projectiles.length <= 0
    projectiles.push(
        new Projectile(playerX, playerY,
            5, 'white', velocity)
    )

})

animate()