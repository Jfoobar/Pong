import { detectCollision } from "./collision.mjs"
export default class Ball {
    constructor(game){
        this.image = document.getElementById("img_ball")
        this.size = 20
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game // make game available so paddle position can be known

        this.position = {x:5, y:5}
        this.speed = {x: 2, y:2}
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y,this.size,this.size)
    }

    update(){
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        //bounce off wall
        if (this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x
        }

        //bounce off top or bottom
        if(this.position.y < 0 || this.position.y + this.size > this.gameHeight){
            this.speed.y = -this.speed.y
        }

        //bounce off paddle if bottom of ball > top of paddle:
        if(detectCollision(this, this.game.paddle)){        
            this.speed.y = -this.speed.y
            this.position.y = this.game.paddle.position.y - this.size
         }

        
    }
}