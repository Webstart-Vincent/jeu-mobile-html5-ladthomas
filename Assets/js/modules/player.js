import { Game } from "./game.js"
import { key } from "./input-handler.js"



export class Player{
    sourceX = 0
    sourceY = 0
    //frameWidth = 77.2
    //frameHeight = 72
    destinationX = 25
    destinationY = 100

    fps = 1000 / 12 
    framesLength = 2 // nombre d'image ou frame en ligne 

    speed = 3
    


    /**
     * 
     * @param {Game} game
     *
     */
    constructor(game) {
        this.image = new Image()
        this.image.src = './Assets/imag/player-spritesheet.png'
    
        this.ctx = game.ctx
        this.inptKeys = game.inputHandler.keys

        this.frameWidth = 77.2
        this.frameHeight = 72

        const {canvas} = game 
        this.maxDestinationX = canvas.width - this.frameWidth
        this.maxDestinationY = canvas.height - this.frameHeight
      }

     /* draw() {
        this.ctx.drawImage(
            this.image,
            this.sourceX,
            this.sourceY,
            this.frameWidth,
            this.frameHeight,
            this.destinationX,
            this.destinationY,
            this.frameWidth,
            this.frameHeight,
            
            
            
            )
      }*/


  draw() {
    // La source c’est le fichier .png
    // La destination c’est le canvas
    this.ctx.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.frameWidth, // cadrage dans la source
      this.frameHeight, // cadrage dans la source
      this.destinationX,
      this.destinationY,
      this.frameWidth, // dimension dans la destination
      this.frameHeight // dimension dans la destination
    )
  }
    /**
     * 
     * @param {number} timestamp 
     */
      update(timestamp) {
        const frameIndex = Math.floor(timestamp/ this.fps) % this.framesLength
        this.sourceX = frameIndex * this.frameWidth

        if(this.inptKeys.has(key.ArrowUp)) this.destinationY -= this.speed
        if(this.inptKeys.has(key.ArrowRight)) this.destinationX += this.speed
        if(this.inptKeys.has(key.ArrowDown)) this.destinationY += this.speed
        if(this.inptKeys.has(key.ArrowLeft)) this.destinationX -= this.speed

        /* if(this.destinationY < 0) this.destinationY = 0
        if(this.destinationX < 0) this.destinationX = 0
        if(this.destinationY > this.maxDestinationY) this.destinationY = this.maxDestinationY
        if(this.destinationX > this.maxDestinationX) this.destinationX = this.maxDestinationX */

        if (this.destinationY < 0) this.destinationY = 0
        if (this.destinationX < 0) this.destinationX = 0
        if (this.destinationY > this.maxDestinationY)
          this.destinationY = this.maxDestinationY
        if (this.destinationX > this.maxDestinationX)
          this.destinationX = this.maxDestinationX
      }
    
}


