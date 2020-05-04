//Patterns
// Function Factory
/*
function Pessoa(customProperties) {
    return {
        name: 'Carlos',
        lastname: 'Raiol',
        ...customProperties
    }
}

const p = Pessoa({name: 'Emanuel', age: 38});
console.log(p);

//Function Singleton

function Person() {
    if(!Person.instance) {
        Person.instance = this;
    }

    return Person.instance;
}

const pn = Person.call({name:'Carlos'});
const pn2 = Person.call({name:'Emanuel'});

console.log(pn);
console.log(pn2);

// Function Decorator
let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn();
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(()=> sum(2,3)));
loggedIn = true;
console.log(callIfAuthenticated(()=> sum(2,3)));
loggedIn = false;
console.log(callIfAuthenticated(()=> sum(2,3)));*/

class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

const o = new Observable();
const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);
o.notify('notified 2');

const {getName, setName} = require('./module.js');

console.log(getName());
setName('Carlos');
console.log(getName());