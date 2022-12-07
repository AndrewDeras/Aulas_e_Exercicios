//Aula 1
/*
console.log('Andrew');

const email = 'andrewderas7@gmail.com';

console.log(email);

const firstName = 'Andrew';
const lastName = 'Deras';
const fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(fullName[4]);

console.log(fullName.toLocaleUpperCase());

console.log(fullName.length);

const result = fullName.toLocaleLowerCase();

console.log(result, fullName);

const index = email.indexOf('@');

console.log(index);

//metodos comuns de strings

const email = 'realmadrid@gmail.com';

//const lastIndexOfArroba = email.lastIndexOf('@');
//const emailSlice = email.slice(0, lastIndexOfArroba);

const emailReplace = email.replace('real', 'hala');

console.log(emailReplace, email);
*/

//NUMBERS
// operadores de incremento de decremento

//let postLikes = 10;
//postLikes++
//postLikes--

//postLikes = postLikes + 10;
//postLikes+= 10;
//postLikes = postLikes - 10;
//postLikes-= 10;

//console.log(postLikes)

//NaN - not a number
//console.log(10 / 'a');

//TEMPLATE STRINGS

const postTitle = 'é biscoito ou bolacha?';
const postAuthor = 'Andrew Deras';
const postComments = 15;

const postMessage = `O post "${postTitle}", do autor ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessage);

const html = `
<h2>${postTitle}</h2>
<p>${postAuthor}</p>
<span>Este post tem ${postComments} comentários.</span>
`

console.log(html);