/*
const pessoas = [
    {nome: "Julio", idade: 22},
    {nome: "Laura", idade: 35},
    {nome: "Manu", idade: 15},
    {nome: "Jefferson", idade: 17}
   ];

let podemBeber = [];

pessoas.filter(pessoa => {
    if(pessoa.idade >= 18){
        podemBeber.push(pessoa)
    }
})
console.log(podemBeber);
*/

const form = document.querySelector('form');
const nome = document.querySelector('#nome');
const email = document.querySelector('#email'); 
const telefone = document.querySelector('#telefone'); 

const info = document.querySelector('.info');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    info.innerHTML = `<h1>Nome: ${nome.value}<br> Email: ${email.value}<br> Telefone: ${telefone.value}</h1>`
});

