/* import { Background } from "./background.js"
import { Player } from "./player.js"
import { InputHundler } from "./input-handler.js"


export class Game {
    score = 0
    gameOver = false
    lastTimeStamp = 0

    constructor() {
        /** @type {HTMLcanvasElement} 
        this.canvas = document.querySelector('canvas')
        this.canvas.width = 480
        this.canvas.height = 360
        this.ctx = this.canvas.getContext('2d')


        this.inputHundler = new InputHundler()


        this.background = new Background(this.ctx)

        this.player = new Player(this)

        this.lastTimeStamp = 0
        this.animate(0)
    }

    /**
     *  @param {number} timestamp 
     
     *
     
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


} */

import { Background } from './background.js'
import { BananaSkinPool } from './ennemy-skin/banana-skin-pool.js'
import { InputHandler } from './input-handler.js'
import { Player } from './player.js'

export class Game {
  score = 0
  gameOver = false

  constructor() {
    /** @type {HTMLCanvasElement} */
    this.canvas = document.querySelector('canvas')
    this.canvas.width = 480
    this.canvas.height = 360

    this.ctx = this.canvas.getContext('2d')

    this.inputHandler = new InputHandler()

    this.background = new Background(this.ctx)

    this.player = new Player(this)

    this.bananaSkinPool = new BananaSkinPool(this)

    this.lastTimeStamp = 0
    this.animate(0)
  }

  /**
   * @param {number} timeStamp Nombre de millisecondes écoulées depuis le début du jeu
   */
  animate = (timeStamp) => {
    const deltaTime = timeStamp - this.lastTimeStamp
    this.lastTimeStamp = timeStamp

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.background.draw()
    this.background.update(deltaTime)

    this.bananaSkinPool.render(timeStamp, deltaTime)

    this.player.draw()
    this.player.update(timeStamp)

    window.requestAnimationFrame(this.animate)
  }
}