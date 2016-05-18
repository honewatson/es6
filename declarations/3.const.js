// const makes a constant reference

const a = {};

// Will raise error
// a = 1;
// a = {};

// you can still change an object property
// of a const
// a.b = 1;
//
// console.log(a.b);

// use Object.freeze to prevent property changes

a.b = 1;
a.d = {};
Object.freeze(a);
a.b = 'Change to b';
a.c = 'Added C prop';
console.log(a.b);
console.log(a.c);

// Object.freeze doesn't go deep

a.d.e = "Me";

console.log(a.d.e);

