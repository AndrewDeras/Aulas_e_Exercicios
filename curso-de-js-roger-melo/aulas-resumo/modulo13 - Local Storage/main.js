/* 
localStorage.setItem('name', 'Andrew');
localStorage.setItem('age', '24');

let nome = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(nome, age);
*/

const myArray = [
    { a: 1, b: 2 },
    { c: 3, d: 4 },
    { e: 5, f: 6 }
]

const myArrayStr = JSON.stringify(myArray);
localStorage.setItem('myArray', myArrayStr);

const myArrayFromLocalStorage = localStorage.getItem('myArray');
const convertedArrayFromLS = JSON.parse(myArrayFromLocalStorage);

console.log(convertedArrayFromLS);