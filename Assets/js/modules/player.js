import { Game } from "./game.js"
import { key } from "./input-handler.js"



export class Player{
    sourceX = 0
    sourceY = 0
    frameWidth = 77.2
    frameHeight = 72
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
        this.inptKeys = game.inputHundler.keys
      }

      draw() {
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
      }
    /**
     * 
     * @param {number} timestamp 
     */
      update(timestamp) {
        const frameIndex = Math.floor(timestamp/ this.fps) % this.framesLength
        this.sourceX = frameIndex * this.frameWidth

        if(this.inptKeys.has(key.ArrowUp)) this.destinationY -= this.speed
      }
    
}


