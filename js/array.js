const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

console.log(arr);
console.log(arr2);

const persons = Array.of('John', 'Cris', 'Jenny');

console.log(persons);

//forEach

const arr3 = [1, 2, 3, 4, 5];

arr3.forEach((value, index, arr3)=>{
    console.log(`${index}: ${value} : ${arr3}`);
});

//Map

const arr4 = [1, 2, 3, 4, 5];

console.log(arr4.map(value => value * 2));
//[2, 4, 6, 8, 10]

const frutas = ['Pera', 'Uva', 'Marça'];
console.log(frutas.map((fruta, index)=> `${index} - ${fruta}`));

//flat

const arr5 = [1, 2, [3, 4]];
console.log(arr5.flat());

const idades = [20, 34, [35, 60, [70,40]]];
console.log(idades.flat(2));

//flatMap

const arr6 = [1, 2, 3, 4];
console.log(arr6.flatMap(value => [value * 2]));
//[2, 4, 6, 8]
console.log(arr6.flatMap(value => [[value * 2]]));

//keys

const arr7 = [1, 2, 3, 4];
const arrIterator = arr7.keys();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());

//values
// Retorna um Array Iterator que contém os valores para casa elemento do array

const arr8 = [1, 2, 3, 4];
const arrIterator2 = arr8.values();

console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());
console.log(arrIterator2.next());

//entries
//retorna um Array Iterator que contém os pares chave/valor para cada elemento do array

const arr9= [1, 2, 3, 4];
const arrIterator3 = arr9.entries();

console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());
console.log(arrIterator3.next());

//find
//Retorna o primeiro item de um array que satisfaz a condição

const arr0 = [1, 2, 3, 4];
const firstGreaterThanTwo = arr0.find(value => value > 2);
console.log (firstGreaterThanTwo);
//3

//findIndex
// Retorna o índice do primeiro item de um array que satisfaz a condição

const arr01 = [1, 2, 3, 4];
const firstIndexGreaterThanTwo = arr01.findIndex(value => value > 2);
console.log (firstIndexGreaterThanTwo);
//2

//filter
// Retorna um novo array com todos os elementos que satisfazem a condição

const arr02 = [1, 2, 3, 4];
const allValuesGreaterThanTwo = arr02.filter(value => value > 2);
console.log (allValuesGreaterThanTwo);

//indexOf
//Retorna o primeiro índice em que um elemento pode ser encontrado no array

const arr03 = [1, 5, 2, 4, 3, 6, 3];
const firstIndexOfItem = arr03.indexOf(3);
console.log(firstIndexOfItem);

//lastIndexOf
//Retorna o último índice em que um elemento pode ser encontrado no array

const arr04 = [1, 5, 2, 4, 3, 6, 3];
const lastIndexOfItem = arr04.lastIndexOf(3);
console.log(lastIndexOfItem);

//includes
// Retorna um booleano verificando se determinado elemento existe no array

const arr05 = [1, 5, 4, 3, 6, 3];
const hasItemOne = arr05.includes(1);
//true
console.log(hasItemOne);
const hasItemTwo = arr05.includes(2);
//false
console.log(hasItemTwo);

//some
// Retorna um booleano verificando se pelo menos um item de um array satisfaz a condição

const arr06 = [1, 5, 4, 3, 6, 3];
const hasSomeEvenNumber = arr06.some(value => value % 2 === 0);
//true
console.log(hasSomeEvenNumber);

const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

console.log(students.some(student => student.grade >= 7));
//true
console.log(students.find(student => student.grade >= 7));
//{ name: 'John', grade: 7 }
console.log(students.findIndex(student => student.grade >= 7));
//0

//every
// Retorna um booleano verificando se todos os itens de um array satisfazem a condição

const arr07 = [1, 5, 4, 3, 6, 3];
const allEvenNumbers = arr07.every(value => value % 2 === 0);
//false
console.log(allEvenNumbers);

const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

console.log(students.every(student => student.grade >= 7));
//false

//sort
// Ordena os elementos de um array de acordo com a condição

const students = [
    {name: 'John', grade: 7},
    {name: 'Jenny', grade: 5},
    {name: 'Peter', grade: 4},
];

console.log(students.sort((current, next) => current.grade - next.grade));
//do menor para o maior
console.log(students.sort((current, next) => next.grade - current.grade));
//do maior para o menor

//reverse
// Inverte os elementos de um array

const arr08 = [1, 2, 3, 4];
console.log(arr08.reverse());

//join
// Junta todos os elementos de um array, separados por um delimitador e terona uma string

const arr09 = [1, 2, 3, 4];
console.log(arr09.join('-'));

//reduce
// Retorna um novo tipo de dado iterando cada posição de um array

const arr10 = [1, 2, 3, 4, 5];
console.log(arr10.reduce((total, value) => total += value, 0));
//15
