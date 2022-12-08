const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');

const save = document.querySelector('#save');

const ulMaiores = document.querySelector('.maiores-de-idade');
const ulMenores = document.querySelector('.menores-de-idade');

let pessoas = [];
let maiores = [];


save.addEventListener('click', () => {
    pessoas.push({ name: nome.value, age: idade.value });
    maiores = pessoas.filter(pessoa => pessoa.idade >= 18)
    console.log(maiores);
    nome.value = '';
    idade.value = '';
});
console.log(maiores);
















    // { name: 'Andrew', age: 24 },
    // { name: 'Lindsay', age: 16 },
    // { name: 'Jeffrey', age: 30 },
    // { name: 'Alexandre', age: 62 },
    // { name: 'Maria', age: 50 }