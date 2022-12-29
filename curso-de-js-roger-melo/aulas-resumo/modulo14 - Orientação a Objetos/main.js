/*
		// orientação a objetos
		// spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2) // copia por referencia
const newArr = [...arr1, ...arr2]
console.log(newArr);
*/

/*
// uniao de objetos
const obj1 = { prop1: 1, prop2: 2 };
const obj2 = { prop3: 3, prop4: 4 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }

console.log(obj3);
*/

/* 
// como usar spread operator em strings e casos em funções.
const getRevesedString = string => [...string]
.reverse()
.join('');

console.log(getRevesedString('abc'));
*/

/* 
// maior ou menor numero com spread operator

const numbers = [7, 3, 5, 3.1, 9];

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
*/

/*
Introdução a classes

class User {
	constructor(name, email) {
		this.name = name
		this.email = email
		this.points = 0

	}

	login() {
		console.log(`${this.name} logou na aplicação.`);
		return this
	}

	logout() {
		return `${this.name} deslogou da aplicação.`
	}
	addPoints() {
		this.points++
		return `${this.name} agora tem ${this.points > 1 ? 'pontos' : 'ponto'}`
	}
}

const user1 = new User('Andrew', 'andrewderas7@gmail.com')
user1.login().addPoints()
console.log(user1);
*/

/*
herança de classes
*/

class Mammal {
	constructor(species, name, age) {
		this.species = species
		this.name = name
		this.age = age
	};

	incrementAge() {
		this.age++
	};
};

class Lion extends Mammal {
	constructor(species, name, age, manEater) {
		super(species, name, age)
		this.manEater = manEater
	}

	eatZebras(animals) {
		return animals.filter(animal => animal.species !== 'zebra');
	};
};

const zeca = new Mammal('zebra', 'Zeca', 6);
const pompeu = new Mammal('gnu', 'Pompeu', 5);
const angus = new Mammal('cavalo', 'Angus', 3);
const mufasa = new Lion('leão', 'Mufasa', 7, false)

const animals = [zeca, pompeu, angus];

console.log(mufasa, angus);




