let heroes = [
    'Ironman',
    'Thor',
    'Starlord'
];

const ages = [10,20,30,40];

const random = ['andrew', 24 , 'deras'];

//METODOS

const joinHeroes = heroes.join('-');
const indexOf30 = ages.indexOf(30);
const moreHeroes = heroes.concat(['Spiderman', 'Superman']);
const pushToHeroes = heroes.push('Hulk','Flash'); //altera valor orginal = mutação 
const popHeroes = heroes.pop(); //tmb modifica

console.log(popHeroes);

// NULL E UNDEFINED

