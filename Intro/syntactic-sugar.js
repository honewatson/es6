/** ES5 **/
function Person5(name) {
    this.name = name;
    this.greet = function greet() {
        console.log(`Hi my name is ${this.name}`);
    }
}

var person5 = new Person5('Johnny');

person5.greet();


/** ES6 **/
class Person6 {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi my name is ${this.name}`);
  }
}

let person6 = new Person6('Hone');

person6.greet();