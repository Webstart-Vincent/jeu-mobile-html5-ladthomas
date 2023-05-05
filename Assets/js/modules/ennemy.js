import { Game } from "./game.js"

export class Ennemy {
    sourceX = 0
    sourceY = 0

    fps = 1000 / 12 
    framesLength = 3 // nombre d'image ou frame en ligne 

    
    /**
     * @param{Game} game
     */

    constructor(game){
        this.image = new Image()
        this.image.src = './Assets/imag/ennemy.png'
    
        this.ctx = game.ctx
        
        const { canvas} = game
        this.canvasWidth = canvas.Width
        this.canvasHeight = canvas.Height

        this.frameWidth = 112
        this.frameHeight = 101

        this.reset()

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
       * @param {}
       */

    reset = () => {
        this.isActive = true
        this.destinationX = this.canvasWidth
        this.destinationY = Math.random() * ( this.canvasHeight - this.frameHeight)
        this.speed -= Math.random() * 50 * 100
    }
    
}