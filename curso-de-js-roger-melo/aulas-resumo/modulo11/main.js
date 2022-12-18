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

const getTodos = (url, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        const isRequestOk = request.readyState === 4 && request.status === 200;
        const isRequestNotOk = request.readyState === 4;

        if (isRequestOk) {
            const data = JSON.parse(request.responseText)
            callback(null, data);
            return
        };
        if (isRequestNotOk) {
            callback('Não foi possível obter os dados', null)
        };
    });

    request.open('GET', url);
    request.send();
};

getTodos('./todos.json', (error, data) => {
    console.log(data);
    getTodos('./todos-2.json', (error, data) => {
        console.log(data);
        getTodos('./todos-3.json', (error, data) => {
            console.log(data);
        });
    });
});



