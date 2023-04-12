export class Player{
    sourceX = 0
    sourceY = 0
    frameWidth = 77.2
    frameHeight = 72
    destinationX = 25
    destinationY = 100


    /**
     * 
     * @param {canvasRenderingContext2D} ctx 
     */
    constructor(ctx) {
        this.image = new Image()
        this.image.src = './Assets/imag/player-spritesheet.png'
    
        this.ctx = ctx
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
      update(timestamp) {}
    
}


