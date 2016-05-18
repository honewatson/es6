// Generators can use very low memory
// for large datasets in the iterative form

function* three() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
let three3 = three();

//A generator pauses on every yield so other stuff can happen.

console.log(three3.next().value);
console.log(three3.next().value);
console.log(three3.next().value);
console.log(three3.next().value);
console.log(three3.next().value);

// Create a new generator instance
for(let n of three()) {
    console.log(n);
}

//yield* yields every yield inside a called generator
function* flatten(arr) {
    for (let x of arr) {
        if (x instanceof Array) {
            yield* flatten(x);
        } else {
            yield x;
        }
    }
}

let t = flatten([1, 2, [3, 4, [5, 6]]]);

for(let n of t) {
    console.log(n);
}
