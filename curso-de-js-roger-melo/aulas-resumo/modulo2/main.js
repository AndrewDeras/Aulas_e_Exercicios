//FOR LOOP

const names = [
    'Andrew',
    'Lindsay',
    'Jeffrey',
    'Maria',
    'Alexandre'
];
/*
for (let i = 0; i < names.length; i++) {
    const HTMLTemplate = `<p>${names[i]}</p>`;
    console.log(HTMLTemplate);
};

*/

//WHILE LOOP

let i = 0;

while (i < names.length) {
    // console.log(names[i]);
    i++
}

/// IF STATEMENT

const age = 18;

if (age >= 18) {
    // console.log('Voce tem mais de 18 anos.');
}

const simpsons = ['Marge', 'Homer', 'Lisa', 'Bart'];

if (simpsons.length >= 4) {
    // console.log('Tem personagens suficientes.');
}

const password = '12345';

if (password.length >= 12 && password.includes('1')) {
    console.log('Sua senha é muito forte');
} else if (password.length >= 8 || password.includes('1') && password.length >= 5) {
    console.log('Sua senha é forte.');
} else {
    console.log('Sua senha tem menos de 8 caracteres');
};

// operadores lógicos OU '||', e E '&&'

//BREAK AND CONTINUE

const scores = [50, 60, 0, 100, 70, 80, 90];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue
    }

    console.log(`sua pontuação é: ${scores[i]}`);

    if (scores[i] === 100) {
        console.log('Parabens, você atingiu a pontuação máxima');

        break
    }
};

//SWITCH STATEMENT

const grade = 'F';

switch (grade) {
    case 'A':
        console.log('Você tirou um A');
        break;
    case 'B':
        console.log('Você tirou um B');
        break;
    case 'C':
        console.log('Você tirou um C');
        break;
    case 'D':
        console.log('Você tirou um D');
        break;
    case 'E':
        console.log('Você tirou um E');
        break;
    default:
        console.log('Nota inválida');
}

//USANDO IF STATEMENTS

// if (grade === 'A') {

// } else if (grade === 'B') {

// } else if (grade === 'C') {

// } else if (grade === 'D') {

// } else if (grade === 'E') {

// } else {

// }