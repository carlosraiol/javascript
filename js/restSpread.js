//Forma antes do ECMA 6
function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }
    return value;
}

console.log(sum(5, 6, 3, 4, 1, 2, 5, 6));

//rest operator, spread operator ...
function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(soma(5, 4, 3, 2 , 1, 6));

const sum1 = (...rest) => rest.reduce((acc, value) => acc + value, 0)
console.log(sum1(5, 3, 6, 7, 9, 1));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
console.log(multiply(2, 3, 4));

const sum2 = (...rest) => {
//spread operator
    return multiply(...rest);
    //return multiply.apply(undefined, rest);
};

console.log(sum2(5, 6, 3, 4));

//Spread operator pode ser usado em: strings, arrays, objects e objetos iteraveis

const str = 'Digital innovation One';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}
const arr2 = [...arr, 5, 6, 7];

const obj = {
    test: 123
};

const obj2 = {
    ...obj, //Usar spread operator para construir novos objetos
    test: 'hello'
};

//const arr3 = [...obj]

logArgs(...str);
logArgs(...arr);
console.log(arr2);
console.log(obj2);
//console.log(arr3);