// Closures are easy to create

const greetCls = (greeting) => (name) =>
        `${greeting} ${name}!`;

const hello = greetCls("G'day");


console.log(hello('David'));

console.log(hello('Fel'));

console.log(hello('Tom'));