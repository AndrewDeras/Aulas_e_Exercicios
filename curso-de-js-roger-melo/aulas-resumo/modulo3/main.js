/*
// function declaration
function sayHi () {
    console.log('oi');
}

//function expression

const showFood = function () {
    console.log('pizza');
}

sayHi() 
showFood()


//Argumentos, parâmetros e default parameters

const myFunc = function(name = 'Lindsay', lastName = 'Barbosa'){
    console.log(`Oi, ${name} ${lastName}!`);
};

myFunc('Andrew', 'Deras');
myFunc();


//Retornando Valores

const double = function (number) {
    return number * 2;
}


const result = double(3);
const showResult = function(value){
    return `O resultado é ${value}`
}
console.log(showResult(result));


//ARROW FUNCTION

const double = number => number * 2

const result = double();

console.log(`O resultado é ${result}`);


const nome = 'Andrew';
//FUNÇÕES
const sayHi = () => 'Oi';

const greet = sayHi();
console.log(greet);

//MÉTODOS

const nameInUpperCase = nome.toUpperCase();
console.log(nameInUpperCase);

//forEach e callbacks

const myFunc = callBack => {
    const value = 77;

    callBack(value);
};

myFunc(number => {
    console.log(number);
})


const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];

const logArrayinfo = (socialNetwork, index, array) => {
    console.log(index, socialNetwork, array);
};

socialNetworks.forEach(logArrayinfo);
*/

// utilizando callbacks

const ul = document.querySelector('[data-js="ul"]');

const socialNetworks = ['youtube', 'twitter', 'instagram', 'facebook'];
let HTMLTemplate = '';

socialNetworks.forEach(socialNetwork => {
    HTMLTemplate += `<li style="color: blueviolet;" >${socialNetwork}</li>`
});

ul.innerHTML = HTMLTemplate;