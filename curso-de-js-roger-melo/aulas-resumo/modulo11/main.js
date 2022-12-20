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

const getPokemon = url => new Promise((resolve, reject) => {
	const request = new XMLHttpRequest()

	request.addEventListener('readystatechange', () => {
		const isRequestOk = request.readyState === 4 && request.status === 200
		const isRequestNotOk = request.readyState === 4

		if (isRequestOk) {
			const data = JSON.parse(request.responseText)
			resolve(data);
		}

		if (isRequestNotOk) {
			reject('Não foi possível obter os dados')
		}
	});

	request.open('GET', url);
	request.send();

});

// sintaxe de uma Promise
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
	.then(bulbasaur => {
		console.log(bulbasaur)
		return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
	})
	.then(charmander => {
		console.log(charmander)
		return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
	})
	.then(console.log)
	.catch(error => console.log(error))




