export default class Brick{
    constructor(game){
        this.image = document.getElementById("img_brick")
        this.size = 45
        this.gameWidth = game.gameWidth
        this.gameHeight = game.gameHeight

        this.game = game 

        this.position = {x:55, y:105}
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y,this.size,this.size)
    }

    update(){
    }
}

