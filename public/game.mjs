import Paddle from './paddle.mjs'
import InputHandler from './input.mjs'
import Ball from './ball.mjs'
import Brick from './brick.mjs'

export default class Game {

    constructor(gameWidth,gameHeight){
       this.gameWidth = gameWidth
       this.gameHeight = gameHeight
    }

    start(){
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        this.brick = new Brick(this)
        this.gameObjects = [this.ball,this.paddle, this.brick]
        new InputHandler(this.paddle);
    }

    update(){
        
        this.gameObjects.map(ob=>ob.update())

    }

    draw(ctx){
       
        this.gameObjects.map(ob=>ob.draw(ctx))
    }

}