//Short Range variable
var prop1 = 'Digital Inovation One';

var obj = {
    prop1
};
//Short Range function
function method1() {
    console.log('Method called');
}

var obj2 = {
    method1
};

var obj3 = {
    sum: function sum(a, b) {
        return a + b;
    }
}
//Short Range ECMA 6
var obj4 = {
    sum(a, b) {
        return a + b;
    }
}
var propName = 'Teste'
var obj5 = {
    [propName]: 'Prop value'
}

console.log(obj);
obj2.method1();
console.log(obj3.sum(10, 5));
console.log(obj4.sum(14, 13));
console.log(obj5);

