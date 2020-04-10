function clicou() {
   document.getElementById('agradecimento').innerHTML = "<b>Obrigado por Clicar</b>";

}
function redirecionar() {
    window.open('https://google.com.br/');
    //window.location.href = 'https://google.com.br/';
}
function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert('Trocar texto');
}
function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert('Página carregada');
}
function funChange(elemento) {
    console.log(elemento.value);
}
/*function validaIdade (idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = prompt('Qual a sua idade?');
if (validaIdade(idade) == true) {
    alert('Você é maior de idade!');
} else {
    alert('Você é menor de idade!');
}
*/
/*
function soma (n1, n2) {
    return n1 + n2;
}

function setReplace (frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}
alert(setReplace('Vai Japão', "Japão", "Brasil"));

let ent1 = Number(prompt('Digite o primeiro número!'));
let ent2 = Number(prompt('Digite o segundo número')); 
alert(`A soma é: ${soma(ent1, ent2)}`);
console.log(`A soma é: ${soma(ent1, ent2)}`);

*/
/*let d = new Date();
console.log(("0" + d.getDate()).slice(-2) + "/" + ("0" + (d.getMonth() + 1)).slice(-2) + "/" + d.getFullYear());
*/
/*let count;

for(count = 0; count <= 5; count++ ) {
    console.log(count);
}*/


/*let count = 0;

while (count <= 5) {
    console.log(count);
    count ++;
}*/

/*let idade = prompt('Qual sua idade?');

if(idade >= 18) {
    alert('Você é maior de idade!');
    console.log('Você é maior de idade!');
} else {
    alert('Você é menor de idade!');
    console.log('Você é menor de idade!');
}*/

//let frutas = [{nome:'maça', cor:'vermelha'}, {nome:'pêra', cor:'amarela'}];
//console.log(frutas[1].cor);
//let fruta = {nome:'maça', cor:'vermelha'};
//console.log(fruta);
//let lista = ['maçã', 'pêra', 'laranja'];
//lista.push('uva');
//lista.pop()
//console.log(lista[0]);
//console.log(lista.toString());
//console.log(lista.join(' - '));

//let nome = 'Carlos Raiol';
//let idade = 38;
//let idade2 = 10;

//alert(`${nome} tem ${idade} anos`);
//console.log(`${nome} tem ${idade} anos`);