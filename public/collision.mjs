export const detectCollision = (ball,gameObject)=>{
let ballBottom = ball.position.y + ball.size
let ballTop = ball.position.y

let obTop = gameObject.position.y
let obBottom = gameObject.position.y + gameObject.height
let obRside = gameObject.position.x + gameObject.width
let obLside = gameObject.position.x

if(ballBottom >= obTop
   && ballTop  <= obBottom
   && ball.position.x >=obLside
   && ball.position.x + ball.size <= obRside
){
    return true
}else{ 
  return false
 }
}