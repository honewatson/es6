// ES6 Class syntax

// You can not define a property inside a class
class Person {
  // constructor method called on instantiation
  constructor(name) {
    this.name = name;
  }
  // new syntax for writing class methods
  _greeting() {
      return `Hi my name is ${this.name}`
  }

  greet() {
    console.log(this._greeting());
  }

}

const donald = new Person('Donald');

donald.greet();

// Interitance
class FunnyPerson extends Person {
    constructor(name, joke) {
        // Super keyword
        // Super is available in any overridden method
        // Calls person constructor
        super(name);
        this._joke = joke;
    }
    // Override Person.greet
    greet() {
        console.log(
            `${this._greeting()} and ${this._joke}`
        )
    }
}

const funnyPerson = new FunnyPerson(
    'Mat',
    'the chicken crossed the road'
);

funnyPerson.greet();
