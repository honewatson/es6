let n = [3,4,5];

// Spread operator extracts values for arrays and objects
n = [...n, 6,7,8];

console.log(n);

n = [1,2, ...n];

console.log(n);

let mm = {hello: "world"};
let m = { goodbye: "flu", ...mm};

console.log(m);