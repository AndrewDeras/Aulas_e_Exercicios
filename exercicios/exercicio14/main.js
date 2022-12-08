const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');

const button = document.querySelector('button');

let pessoas = []
let maiores = []
button.addEventListener('click', ()=>{
    pessoas.push({nome: nome.value, idade: idade.value})
    
    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i];

        if (pessoa.idade >= 18) {
            maiores.push(pessoa)
        }        
    }
    
});
console.log(pessoas);
console.log(maiores);