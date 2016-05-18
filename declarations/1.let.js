// var is a function scope

if(true) {
    var x = 'hello x';
}

// will print
console.log(x);

// let is a block scope
if(true) {
    let y = 'goodbye y';
}

// Will raise error because outside of block
console.log(y);