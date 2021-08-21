import Paddle from './paddle.mjs'
import InputHandler from './input.mjs'
import Ball from './ball.mjs'

export default class Game {

    constructor(gameWidth,gameHeight){
       this.gameWidth = gameWidth
       this.gameHeight = gameHeight
    }

    start(){
        this.paddle = new Paddle(this)
        this.ball = new Ball(this)
        this.gameObjects = [this.ball,this.paddle]

        new InputHandler(this.paddle);
    }

    update(deltaTime){
        
        this.gameObjects.map(ob=>ob.update(deltaTime))

    }

    draw(ctx){
       
        this.gameObjects.map(ob=>ob.draw(ctx))
    }

}