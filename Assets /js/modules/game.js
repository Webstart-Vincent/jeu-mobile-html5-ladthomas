import { background } from "./background.js"


export class game {
    score = 0
    gameOver = false
    lastTimeStamp = 0

    constructor() {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.background = new background()

        this.animate(0)
    }

    /**
     *  @param {number} timestamp 
     
     *
     */
    animate(timestamp) {}


}