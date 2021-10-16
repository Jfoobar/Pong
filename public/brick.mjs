import {detectCollision} from "./collision.mjs"
export default class Brick{
    constructor(game){
        this.image = document.getElementById("img_brick")
        this.width = 75
        this.height = 45
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game 

        this.position = {x:200, y:105}
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y,this.width,this.height)
    }

    update(){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y
            this.width , this.height = 0
        }
    }
}

