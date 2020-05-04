function fn() {
    return 'code here!';
}
console.log(fn());

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //Mais de uma expressão
    return 'Code here!';
}

fn.prop = 'Posso criar propriedades';

//Receber parâmentros

const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
/*const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}*/

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

console.log(arrowFn());
console.log(arrowFn2());
console.log(fn.prop);

this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName,
}

console.log(user.getNameArrowFn());
console.log(user.getName());

const users = ['Carlos', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Carlos',
        age: 38,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    }
]

//Retornar a quantidade de itens de um array
console.log('Items', persons.length);

//Verificar se é Array
console.log('A variável persons é um array:', Array.isArray(persons));

//Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista apenas com homens:', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas:', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person)=> {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);

