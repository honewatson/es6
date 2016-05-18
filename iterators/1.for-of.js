var arr = ['a', 'b', 'c'];

// es5 for loop
for (var i in arr) {
    console.log(arr[i]);
}

// for of loop allows direct access
for (let j of arr) {
    console.log(j);
}

// es6 one liner
arr.forEach(x => console.log(x));