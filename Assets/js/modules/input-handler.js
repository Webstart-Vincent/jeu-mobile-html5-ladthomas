export class InputHandler{
    constructor(){
        
        /** @type {Set<key>} */
        this.keys = new Set()

        window.addEventListener('keydown',({code}) => {
            
        
        if (Object.keys(key).includes(code)) this.keys.add(code)
        })

      window.addEventListener('keyup',({code}) => this.keys.delete(code))
    }
}



export const key = Object.freeze({

    ArrowDown : 'ArrowDown',
    ArrowUp : 'ArrowUp',
    ArrowLeft : 'ArrowLeft',
    ArrowRight: 'ArrowRight',
    Space : 'space',
    Enter : 'enter',
})