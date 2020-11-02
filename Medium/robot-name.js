// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.



let usedNames = []

function randoNumber(min,max){
    return Math.random() * (max-min) + min;
}

function makeName(){
    var name = ""
    let cnt 
    for (cnt = 0; cnt < 100; cnt++)  {
        name = ""
        name += String.fromCharCode(randoNumber(65,90))             // first random letter
        name += String.fromCharCode(randoNumber(65,90))             // second random letter
        for (let digit = 0; digit < 3; digit++) {
            name += Math.floor(randoNumber(0,9))
        }
        if (usedNames.findIndex(uname => name === uname) === -1) {
            break
        }
        if ( cnt === 100) {
            throw new Error("Max Tried exceeded")
        }  
    }
    usedNames.push(name)            // save unique name
    return name                     // reutn unique name 
}

export class Robot { 
    constructor() {
        this._name = makeName()
    }
    get name() {
        return this._name
    }
    reset () {
        this._name = makeName()
    }
}

Robot.releaseNames = () => { usedNames = []};