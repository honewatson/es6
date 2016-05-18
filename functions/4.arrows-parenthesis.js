// Parenthesis require the return keyword

// Returns 'hello world'
let greet = hello => `${hello} world`;

console.log(greet('hello 1'));

// Returns nothing
greet = hello => {
    `${hello} world`;
};

console.log(greet('hello 2'));

// Returns 'hello world'
greet = hello => {
    return `${hello} world`;
};

console.log(greet('hello 3'));
