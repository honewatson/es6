// functions are hoisted

x();

function x() {
    console.log('hoisted x');
}

// classes are not

// new X();

class X {}

new X();

// let variables are not hoisted

// console.log(y);

let y = 'hello';

console.log(y);