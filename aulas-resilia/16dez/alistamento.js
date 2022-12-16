// function alistamento(nome, sexo, idade) {
//     if (sexo === 'homem' && idade >= 18) {
//         return `${nome} está apto para o alistamento.`;
//     }
//     else {
//         return `${nome} não está apto para se alistamento`;
//     };
// }

const alistamento = (nome, sexo, idade) =>
    sexo === 'homem' && idade >= 18
        ? `${nome} está apto para o alistamento.`
        : `${nome} não está apto para se alistamento`;

console.log(alistamento('Andrew', 'homem', 24));

const numbers = [1, 2, 3, 4, 5, 6, 7];

const somaTwo = numbers.map(num => num + 2);

console.log(somaTwo);