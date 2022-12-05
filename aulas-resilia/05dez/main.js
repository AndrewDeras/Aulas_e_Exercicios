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