import { Background } from "./background.js"
import { Player } from "./player.js"


export class Game {
    score = 0
    gameOver = false
    lastTimeStamp = 0

    constructor() {
        /** @type {HTMLcanvasElement} */
        this.canvas = document.querySelector('canvas')
        this.canvas.width = 480
        this.canvas.height = 360
        this.ctx = this.canvas.getContext('2d')

        this.background = new Background(this.ctx)

        this.player = new Player(this.ctx)

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

        this.player.draw()
        this.player.update(timestamp)

        window.requestAnimationFrame(this.animate)
    }


}