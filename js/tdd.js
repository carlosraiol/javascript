function soma(num1, num2) {
    return (num1 && num2) ? Number(num1) + Number(num2): 'Está faltando um parametro!'
}
module.exports = {
    soma
}

console.log(soma(10, 20));