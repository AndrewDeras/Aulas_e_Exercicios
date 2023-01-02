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
*/

/*
== funções construtoras

class Student {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	comment() {
		return `${this.name} comentou.`
	}
	static formatToDataBase(aString) {
		return aString
			.toUpperCase()
			.replaceAll(' ', '_')
	}
}
*/
/*Prototypes *Herança prototipal
function Student(name, email) {
	this.name = name;
	this.email = email;
}

Student.prototype.login = function login() {
	return `${this.name} fez login`
}

Student.prototype.comment = function comment() {
	return `${this.name} comentou.`
}

Student.formatToDataBase = function (aString) {
	return aString
		.toUpperCase()
		.replaceAll(' ', '_')
}

function TeacherAssiteat(name, email, scheduledWeekPosts) {
	Student.call(this, name, email);
	this.scheduledWeekPosts = scheduledWeekPosts
}

TeacherAssiteat.prototype = Object.create(Student.prototype);

TeacherAssiteat.prototype.giveBadge = function giveBasge({ name }) {
	return `${this.name} deu uma medalha para ${name}`
}

const andrewDeras = new Student('Andrew Deras', 'andrewderas7@gmail.com');
const lindsayDeras = new TeacherAssiteat('Lindsay Deras', 'lindsayderas@gmail.com', false);

console.log(andrewDeras, lindsayDeras);
console.log(lindsayDeras.giveBadge(andrewDeras));
console.log(lindsayDeras.login());
console.log(lindsayDeras.login === andrewDeras.login);
*/

/*
*Factory Function e composição de objetos
*/
class User {
	constructor(name, email) {
		this.name = name;
		this.email = email
	}
}

const createUser = (name, email) => {
	let counter = 0;
	return {
		name,
		email,
		incrementar: () => ++counter
	}
}

const user = new User('Andrew', 'andrewderas7@gmail.com');
const user2 = createUser('Andrew 1', 'andrewderas70@gmail.com');
const user3 = createUser('Andrew 2', 'andrewderas71@gmail.com');

console.log(user, user2);
console.log(user2.incrementar());
console.log(user2.incrementar());
console.log(user3.incrementar());
console.log(user3.incrementar());



