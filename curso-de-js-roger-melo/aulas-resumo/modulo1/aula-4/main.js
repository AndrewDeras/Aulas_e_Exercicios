//BOOLEANS  e comparações

// console.log(true, false, 'true', 'false');

//metodos podem retornar boleans
const email = 'andrewderas7@gmail.com'
const includes = email.includes('@');

const names = ['Andrew', 'Jeffrey', 'Lindsay'];
const arrayIncludes = names.includes('Andrew');

//comparação

const age = 24;
// console.log(age === 24);

//CONVERSÃO DE TIPOS

let score = '100';
score = Number(score);

// console.log(score + 100);

const crazyCovertion = Number('maça');
const covertedNumber = String(98);
console.log(covertedNumber, typeof covertedNumber);