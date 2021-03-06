import Game from './game.mjs'

let canvas = document.getElementById("gameScreen")

let ctx = canvas.getContext("2d")
let tic

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

let game = new Game(GAME_WIDTH,GAME_HEIGHT)
game.start()

//let lastTime = 0


const gameLoop = (timestamp)=>{
    //let deltaTime = timestamp - lastTime
    //lastTime = timestamp
    cancelAnimationFrame(tic)
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT)
    game.update()
    game.draw(ctx)
    requestAnimationFrame(gameLoop)
}

tic =requestAnimationFrame(gameLoop)