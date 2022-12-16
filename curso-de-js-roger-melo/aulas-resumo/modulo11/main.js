/*async function 

console.log(1);
console.log(2);
setTimeout(() => {
    console.log('function async');
}, 2000)
console.log(3);
console.log(4);
*/

//Request HTTP - API ou Banco de dados

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');

request.send()


