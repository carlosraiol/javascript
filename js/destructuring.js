// Forma antiga em Array
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var arr2 = [{ name: 'Apple', type: 'fruit' }];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
var fruit1 = arr2[0].name;
console.log(apple, banana, orange, tomato, fruit1);
// Em Objetos
var obj = {
    name: 'Carlos',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }

};

var age = obj.props.age;
var color1 = obj.props.favoriteColors[0];

var name = obj.name;
console.log(name, age, color1);

//functions

function sum(arr) {
    return arr[0] + arr[1];
}
console.log(sum([5, 5]));

//Destructuring Assigment
//Array
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
var [{ name: fruitName }] = arr2;

console.log(apple, apple2, tomato2, fruitName);

//Object
var { name: name2 } = obj;
var { props: { age: age2, favoriteColors: [color1, color2] } } = obj;

console.log(name2, age2, color2);

//functions
//Array
function soma([a, b]) {
    return a + b;
}
console.log(soma([5, 5]));

//Object
function soma2({ a, b }) {
    return a + b;
}
console.log(soma2({a: 5, b: 5}));