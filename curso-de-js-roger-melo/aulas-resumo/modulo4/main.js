//criando um objeto literal

// variaveis e escopo de bloco
/*
let age = 31 // variavel global

if (true) {
    let name = 'Andrew';
    let age = 24;

    console.log(`Dentro do 1 bloco de código ${age} ${name}`);

    if (true) {
        console.log(`Dentro do 2 bloco de código ${age}`);
    }
}

console.log(`Fora do bloco de código ${age} `);
*/

let user = {
    name: 'Andrew',
    age: 24,
    email: 'andrewderas7@gmail.com',
    city: 'Rio de Janeiro',
    blogPost: [
        { title: 'Real Madrid', likes: 10 },
        { title: 'Fórmula 1', likes: 8 }
    ],
    logIn: () => console.log('Usuário logado'),
    logOut: () => console.log('Usuário Deslogado'),
    logBlogPost() {
        console.log(`${this.name} escreveu os seguintes posts: `);

        this.blogPost.forEach(post => {
            console.log(post.title, post.likes);
        })
    }
};

user.logIn();
user.logOut();
user.logBlogPost();

// objeto math


const area = 7.2;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// numeros aleatorios

const randomNumber = Math.random();

console.log(randomNumber);

console.log(Math.round(randomNumber * 100));

