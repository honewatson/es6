// import { fur, longEars } from './parts';
const { fur, longEars } = require('./parts');

class Rabbit {

    constructor(fur, longEars) {
        this._fur = fur;
        this._longEars = longEars;
    }

    ruffle() {
        return this._fur();
    }

    listen() {
        return this._longEars();
    }

}

let rabbit = new Rabbit(fur, longEars);

console.log(rabbit.ruffle());
console.log(rabbit.listen());