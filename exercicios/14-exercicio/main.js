const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');

const btn = document.querySelector('#save');
const btnMaiores = document.querySelector('#maiores');
const btnMenores = document.querySelector('#menores');

const ulMaiores = document.querySelector('.maiores-de-idade');
const ulMenores = document.querySelector('.menores-de-idade');
const menoresCol = document.querySelector('.menoresCol');
const maioresCol = document.querySelector('.maioresCol');

let pessoas = []

btn.addEventListener('click', () => {
    pessoas.push({ nome: nome.value, idade: idade.value });
    nome.value = '';
    idade.value = '';
    console.log({ pessoas });
});

btnMaiores.addEventListener('click', () => {
    let maiores = pessoas.reduce((maiores, pessoa) => {
        if (pessoa.idade >= 18) {
            maiores.push(pessoa)
        }
        return maiores
    }, []);

    for (let i = 0; i < maiores.length; i++) {
        const person = maiores[i];
        maioresCol.textContent = `${maiores.length} maiores de idade.`
        ulMaiores.innerHTML += `
        <li class="list-group-item list-group-item-success">
            ${person.nome}
        </li>`
    }
});

btnMenores.addEventListener('click', () => {
    let menores = pessoas.reduce((menores, pessoa) => {
        if (pessoa.idade < 18) {
            menores.push(pessoa)
        }
        return menores
    }, []);

    for (let i = 0; i < menores.length; i++) {
        const person = menores[i];
        menoresCol.textContent = `${menores.length} menores de idade.`
        ulMenores.innerHTML += `
        <li class="list-group-item list-group-item-danger">
            ${person.nome}
        </li>`
    }

})


















    // { name: 'Andrew', age: 24 },
    // { name: 'Lindsay', age: 16 },
    // { name: 'Jeffrey', age: 30 },
    // { name: 'Alexandre', age: 62 },
    // { name: 'Maria', age: 50 }