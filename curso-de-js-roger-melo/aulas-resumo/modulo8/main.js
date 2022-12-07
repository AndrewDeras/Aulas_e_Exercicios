/**/
const randomNumbers = ['5', '10', '20', '2', '69'];

const doubleNumbers = randomNumbers.map(num => num * 2);

console.log(doubleNumbers);

const numbersGreaterThan15 = randomNumbers.filter(num => num > 15);

console.log(numbersGreaterThan15);


const users = [
    {name: 'Andrew', premium: true},
    {name: 'Lindsay', premium: false},
    {name: 'Jeffrey', premium: true},
    {name: 'Maria', premium: true},
    {name: 'Alexandre', premium: false}
];

const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);
const numbers = [1, 2, 3, 4, 5];

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResult);


const phaseScores = [
    { name: 'Andrew', score: 39 },
    { name: 'Lindsay', score: 24 },
    { name: 'Jeffrey', score: 17 },
    { name: 'Maria', score: 50 },
    { name: 'Alexandre', score: 62 }
];

const andrewScore = phaseScores.reduce((accumulator, phaseScore) => {
    if (phaseScore.name === 'Andrew'){
        accumulator+= phaseScore.score;
    }

    return accumulator
} , 0);

console.log(andrewScore);


// ordenando strings
const names = ['Leão', 'Puma', 'Arara'];

names.sort()

console.log(names);

// ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((score1, score2) => score1 - score2);

console.log(scores);

// ordenando objetos

const theBigfamily = [
    { name: 'Andrew', score: 20 },
    { name: 'Lindsay', score: 10 },
    { name: 'Jeffrey', score: 50 },
    { name: 'Alexandre', score: 70 },
    { name: 'Maria', score: 99 }
];

// theBigfamily.sort((item1, item2) => {
//     if (item1.score > item2.score) {
//         return -1
//     } else if (item2.score > item1.score) {
//         return 1 
//     }

//     return 0
// });

theBigfamily.sort((item1, item2)=> item2.score - item1.score);

console.log(theBigfamily);




const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
];

const booksOnSale = books
    .filter(({price}) => price > 20)
    .map(({name, price}) => 
        `O preco do livro: "${name}" caiu para ${price} reais`);

debugger