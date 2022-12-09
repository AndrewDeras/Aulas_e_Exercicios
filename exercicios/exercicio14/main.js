const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');

const btn = document.querySelector('#save');

const ulMaiores = document.querySelector('.maiores-de-idade');
const ulMenores = document.querySelector('.menores-de-idade');

let pessoas = []
btn.addEventListener('click', () => {
    pessoas.push({ nome: nome.value, idade: idade.value })
})
 console.log(pessoas);
for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    ulMaiores+=`
    <li class="list-group-item list-group-item-dark">
        ${pessoa.nome}.
    </li>
    `
}













    // { name: 'Andrew', age: 24 },
    // { name: 'Lindsay', age: 16 },
    // { name: 'Jeffrey', age: 30 },
    // { name: 'Alexandre', age: 62 },
    // { name: 'Maria', age: 50 }