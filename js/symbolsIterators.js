//Symbols

const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);
console.log(Object.getOwnPropertySymbols(obj))

// Well know symbols
Symbol.iterator
//Symbol.split
//Symbol.toStringTag

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
const str = 'Digital Innovation One';

//Antigo
while(true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }

    console.log(value);
}
console.log(' ');

//A Partir do ECMA 6
for (let value of arr) {
    console.log(value);
}

console.log(arr[Symbol.iterator]().next());
const obj1 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it2 = obj1[Symbol.iterator]();

for (let value of obj1) {
    console.log(value);
}

const arr3 = [...obj1];
console.log(arr3)