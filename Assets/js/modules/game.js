import { Background } from "./background.js"


export class Game {
    score = 0
    gameOver = false
    lastTimeStamp = 0

    constructor() {
        /** @type {HTMLcanvasElement} */
        this.canvas = document.querySelector('canvas')
        this.canvas.width = 480
        this.canvas.heigth = 360
        this.ctx = this.canvas.getContext('2d')

        this.background = new Background(this.ctx)

        this.animate(0)
    }

    /**
     *  @param {number} timestamp 
     
     *
     */
    animate = (timestamp) => {
        const deltaTime = timestamp - this.lastTimeStamp
        this.lastTimeStamp = timestamp

        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.heigth)
        
        this.background.draw()
        this.background.update(deltaTime)
        //console.log('texte')

        window.requestAnimationFrame(this.animate)
    }


}