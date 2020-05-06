//Lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}


//Default Function Arguments
function multiply(a, b = 1) {
    return a * b;
}

function sum(a, b = randomNumber()) {
    return a + b;
}

console.log(multiply(15));
console.log(sum(15));