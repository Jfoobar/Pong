import Paddle from "./paddle.mjs";
export default class InputHandler {
    constructor(paddle){
        document.addEventListener("keydown",event =>{
            console.log(event.key)
            switch(event.key){
                case 'ArrowLeft':
                    paddle.moveLeft()
                    break

                case 'ArrowRight':
                    paddle.moveRight()
                    break
            }
        })

        document.addEventListener("keyup",event =>{
           switch(event.key){
                case 'ArrowLeft':
                   if(paddle.speed < 0)paddle.stop() //if moving left. makes transition smoother
                   break

                case 'ArrowRight':
                   if(paddle.speed > 0) paddle.stop()
                   break

           }
        })
        
    }
}