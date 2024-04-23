export default class Diary {
    #messages = [];

    getMessages = (lock) => (!lock?.isLocked()) ? this.#messages : ''
        
    addEntry = (message) => {
        if (typeof message  === 'string') {
            this.#messages.push(message);
        } 
    }

    viewEntries = (lock) => (!lock?.isLocked()) ? console.log(...this.#messages): ''

    
}