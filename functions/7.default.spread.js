function f(x, y = 12) {
    // y is 12 if not passed (or passed as undefined)
    return x + y;
}

// = 15
console.log(f(3));

// = 13
console.log(f(3, 10));

// Rest parameters
function greet(hello, ...names) {
    // names is an Array
    for(let name of names) {
        console.log(`${hello} ${name}`);
    }
}

greet("G'day", 'Michael', 'Jonesy');

function add(x, y, z) {
    return x + y + z;
}

// Spread operator ...
// Pass each elem of array as argument

console.log(add(...[1, 2, 3]));