export const detectCollision = (ball,gameObject)=>{
let obTop = gameObject.position.y
let obBottom = gameObject.position.y + gameObject.height
let obRside = gameObject.position.x + gameObject.width
let obLside = gameObject.position.x

if(ball.position.y + ball.size >= obTop
   && ball.position.x >=obLside
   && ball.position.y  <= obBottom
   && ball.position.x >= obLside
   && ball.position.x + ball.size <= obRside
){
    return true
}else{ 
  return false
 }
}