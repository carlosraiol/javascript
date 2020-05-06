function log(value) {
    console.log(value);
}

var logger = function(value) {
    console.log(value);
}

const logged = (value) => {
    console.log(value)
}

var sum = function(a, b) {
    return console.log(a + b);
}

function Car() {
    this.foo = 'bar'
}

log('test');
logger('Test');
logged('Tested');
sum(10, 12);
console.log(new Car());

//Arrow functions
// =>

//O RETURN é implícito
var soma = (a, b) => a + b;

//com um parametro não precisa utilizar parentese
var newLog = value => console.log(value);

//
var createObj = () => ({test: 12, func: 'Objeto'});

newLog(soma(54, 32));
newLog(createObj());