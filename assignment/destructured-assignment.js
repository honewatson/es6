let obj = {
    first: 'Jane',
    last: 'Doe'
};

let { first: firstA, last: lastA } = obj;

// Jane
console.log(firstA);
// Doe
console.log(lastA);

let moreBeer = ['amber', 'ale'];

let [x, y] = moreBeer;

// amber
console.log(x);

// ale
console.log(y);

let [o] = moreBeer;

// amber
console.log(o);

let [,p] = moreBeer;
// ale
console.log(p);

let fn = ([name]) => console.log(name);
let fn2 = ([,name]) => console.log(name);

// amber
fn(moreBeer);

//ale
fn2(moreBeer);

let fn3 = ({magic}) => console.log(magic);

fn3({magic: 'merlin'});