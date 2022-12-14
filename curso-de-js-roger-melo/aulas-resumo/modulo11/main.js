/*async function 

console.log(1);
console.log(2);
setTimeout(() => {
		console.log('function async');
}, 2000)
console.log(3);
console.log(4);

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


// FETCH
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json()
	})
	.then(users => console.log(users))
	.catch(error => console.log(error))


// async - await

const getUsers = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	return await response.json();
}

const logUsers = async () => {
	const users = await getUsers();
	console.log(users);
}
console.log(1);
console.log(2);
logUsers()
console.log(3);
console.log(4);


// request paralelos vs sequenciais 

const getPokemons = async () => {
	const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1');
	const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4');
	const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7');

	const results = await Promise.all([bulbasaur, charmander, squirtle])

	results.forEach(async response => console.log(await response.json()));
};

getPokemons();


//try and catch
try {
	console.log(oi);
} catch (error) {
	if (error.name === 'ReferenceError' && error.message === 'oi is not defined') {
		const oi = 'const oi criada';
		console.log(oi);
	}
}

console.log('oi');
*/

// try and catch em request
const getUsers = async () => {
	try {
		const response = await fetch('./todos.json');

		if (!response.ok) {
			throw new Error('Não foi possível obter os dados');
		}

		return response.json();
	} catch (error) {
		console.log(error.message);
	}
}

const logUsers = async () => {
	const users = await getUsers();
	console.log(users);
}

logUsers()