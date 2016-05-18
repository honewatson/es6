var hello = "G'day";
// Assignment short hand
var obj = {
    hello
};

console.log(obj.hello);

// Computed property keys
obj = {
    ["Hello" + " Goodbye"]: "Beatles"
};

console.log(obj['Hello Goodbye']);