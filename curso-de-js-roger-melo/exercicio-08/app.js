/*
  01

  - Utilizando function declaration, implemente uma função que recebe 2 números  
    por parâmetro e retorna o resultado da multiplicação entre esses 2 números;
  - Previna que esses parâmetros recebam undefined;
  - Exiba o resultado no console, sem inserir um console.log() dentro da função.

function multiply(num1 = 0, num2 = 0) {
  return num1 * num2
}

console.log(multiply(5, 5));
*/

/*
  02

  - Faça o mesmo que o exercício acima pede, mas desta vez, implemente uma  
    **function expression** que retorne o resultado da **divisão** entre esses  
    2 números.


const division = function (num1 = 0, num2 = 0) {
  return num1 / num2
}

console.log(division());
*/

/*
  03

  - Implemente uma função que apenas exibe no console o valor recebido por  
    parâmetro;
  - Previna que o parâmetro dessa função receba undefined;
  - Faça a string abaixo ser exibida 7x no console;
  - A cada exibição, substitua o "X" pela informação correta;
  - Não repita (manualmente) a invocação da função ou do console.log().

  "Esta é a Xª vez que essa string é exibida."


function showResult(numberOfTimes = 7) {
  for (let i = 1; i <= numberOfTimes; i++) {
    console.log(`Esta é a ${i}ª vez que essa string é exibida.`);
  } 
}
showResult()
*/

/*
  04

  - Comente o código acima, de forma que a string não seja mais exibida no  
    console;
  - Implemente uma função que retorna um novo array com as strings do array  
    "millennialWords" em letras maiúsculas;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.


const millennialWords = ['lol', 'yolo', 'troll', 'stalkear', 'selfie', 'influencer', 'crush', 'fitness', 'hater', 'bae', 'random', 'kawaii', 'outfit', 'mood', 'fail']

function toUpperCaseArray(array = []) {
  let mWUpperCase = []
  for (let i = 0; i < array.length; i++) {
    let wordInUpperCase = array[i].toUpperCase();
    mWUpperCase.push(wordInUpperCase);
  }
  return mWUpperCase
};

const millennialWordsUpperCase = toUpperCaseArray(millennialWords);

console.log(millennialWordsUpperCase);
*/

/*
  05

  - Implemente uma função que retorna se um número é positivo;
  - Use essa função para descobrir quantos números positivos o array 
    "randomNumbers" possui;
  - Exiba a frase abaixo no console, inserindo as informações corretas.

  "O array "randomNumbers" possui XX números, sendo XX positivos e XX negativos."


const randomNumbers = [-2, 93, 34, -1, 1, 93, 11, -7, 47, -3];

function isPositiveNumber(array){
  let positiveNumberAmount = 0;
  for (let i = 0; i < array.length; i++) {
    const isPositive = array[i] > 0;
    if (isPositive) {
      positiveNumberAmount++
    }
  }
  return `O array "randomNumbers" possui ${array.length} números, sendo ${positiveNumberAmount} positivos e ${array.length - positiveNumberAmount} negativos.`
}
console.log(isPositiveNumber(randomNumbers));
*/

/*
  06

  - Descomente a invocação da função abaixo e implemente-a;
  - Ela deve retornar um novo array com apenas os números ímpares do array 
    passado por argumento;
  - Exiba o novo array no console, sem inserir um console.log() dentro da  
    função.


function getOddNumbers(array) {
  let oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
const number = array[i]

    const isOddNumber = number % 2 !== 0;

    if (isOddNumber) {
      oddNumbers.push(number);
    }
  }
  return oddNumbers
}
const oddNumbers = getOddNumbers([83, 52, 31, 73, 98, 37, 61, 56, 12, 24, 35, 3, 34, 80, 42]);

console.log(oddNumbers);
*/

/*
  07

  - Forme uma frase com o array abaixo e exiba-a no console.
*/

const functions = [
  function () { return 'Plymouth' },
  function () { return 'é' },
  function () { return 'uma' },
  function () { return 'cidade' },
  function () { return 'fantasma' },
  function () { return 'localizada' },
  function () { return 'na' },
  function () { return 'ilha' },
  function () { return 'de' },
  function () { return 'Montserrat,' },
  function () { return 'um' },
  function () { return 'território' },
  function () { return 'ultramarino' },
  function () { return 'do' },
  function () { return 'Reino' },
  function () { return 'Unido' },
  function () { return 'localizado' },
  function () { return 'na' },
  function () { return 'cadeia' },
  function () { return 'de' },
  function () { return 'Ilhas' },
  function () { return 'de' },
  function () { return 'Sotavento' },
  function () { return 'nas' },
  function () { return 'Pequenas' },
  function () { return 'Antilhas,' },
  function () { return 'Índias' },
  function () { return 'Ocidentais.' }
]

function showAll(array){
  let phrase = [];
  for (let i = 0; i < array.length; i++) {
    phrase.push(array[i]());
  }
  return phrase.join(' ');
}
console.log(showAll(functions));

