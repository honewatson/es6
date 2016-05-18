var arr = ['a', 'b', 'c'];

let it = arr[Symbol.iterator]();

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);