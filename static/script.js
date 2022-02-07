let canvas = document.getElementById("canvas")
let context = canvas.getContext('2d')

// window.onload = function main(){

//     let ball_1 = new Balls(100, 100, 30, 30)

// 	var loop = function(){
//         context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight)
//         ball_1.show()
//         ball_1.move()
// 		requestAnimationFrame(loop)
// 	}

// 	loop()
// }


function Balls(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.xspeed = 1
    this.yspeed = 1
    this.r = Math.random()*50

    this.move = function(){
        if (this.x+this.r >= canvas.clientWidth) this.xspeed *= -1
        if (this.x-this.r <= 0) this.xspeed *= -1
        // if (this.y+this.r > canvas.clientHeight) this.xspeed *= -1
        // if (this.x-this.r < 0) this.xspeed *= -1
        this.x += this.xspeed
        // this.y += this.yspeed
    }
    this.show = function(){
        context.beginPath()
        context.arc(this.x, this.y, this.r, 0, Math.PI*2, true)
        context.fill()
    }

}