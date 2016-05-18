/**
 *  Arrows share the same lexical this
 *  as their surrounding code
 */
class Person {
    constructor(name) {
        this._name = name;
        this._greetings = [
            "Hi my name is ",
            "Yes I really am "
        ];
    }

    greet() {

        this._greetings.forEach(
            (item) => console.log(item + this._name)
        )
    }
}

const hone = new Person('Hone');

hone.greet();