/* EXERCICIO 1 */
const alunos = ['Alice', 'Gabriela', 'João', 'Francisco', 'Natália', 'Giovana', 'Gabriel'];

const [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7] = alunos;
console.log(aluno1);

// console.log(aluno1);
/* EXERCICIO 2 */
const disciplinas = ['Matemática', 'Física', 'Química', 'Língua Portuguesa', 'Biologia'];

const [disciplina1, disciplina2, disciplina3, disciplina4, disciplina5] = disciplinas;

// console.log(disciplina1);
/* EXERCICIO 3 */
const dadosCliente = {
    nome: 'Fabio',
    idade: 45,
    endereco: {
        logradouro: 'Rua das Palmeiras',
        numero: 42,
        bairro: 'Barra da Tijuca',
        cidade: 'Rio de Janeiro'
    },
    assinanteDesde: 2017
}

const { nome, idade, endereco: { logradouro, numero, bairro, cidade, assinanteDesde } } = dadosCliente;

// console.log(cidade);

// console.log(nome);

/* EXERCICIO 4 */
const vestimenta = {
    camisa: {
        listrada: true,
        cor: 'Vermelha e branca',
        colecao: 'Outono/Inverno 2019'
    },
    calca: {
        cor: 'Azul escuro',
        colecao: 'Primavera/Verão 2021'
    }
};

const { camisa: { listrada: camisaListrada, corCamisa: cor, camisaColecao: colecao },
    calca: { cor: corCalca, colecao: colecaoCalca } } = vestimenta;

console.log(corCalca);

// const {{ }}

/* EXERCICIO 5 - IF/ELSE/ELSE IF */
/*
Você irá escrever uma condicional que avaliará um saldo de conta e retornará um texto:
SE o saldo for 0 irá exibir 'Não há saldo disponível'
SE o saldo estiver abaixo de 0 irá exibir 'Possivelmente no cheque especial'
SE o saldo for maior que zero, irá exibir o saldo formatado em reais
*/

function avaliaSaldo(saldo) {
    // seu código aqui
    if (saldo === 0) {
        return `Não há saldo disponível.`
    }
    if (saldo < 0) {
        return `Possivelmente no cheque especial.`
    }
    if (saldo > 0) {
        return `Seu saldo é: ${saldo}`
    }
}
console.log(avaliaSaldo(1000)); // teste a saída passando-a como argumento


/* EXERCICIO 6 - SWITCH/CASE */
/*
Você irá escrever uma condicional que avaliará um texto e retornará um hexadecimal:
SE for 'vermelho' exibirá '#e81c0e'
SE for 'amarelo' exibirá '#eef211'
SE for 'roxo' exibirá '#b322e3'
SE não vier texto válido, exibirá a cor branca '#fff'
*/

function retornaCor(cor) {
    // seu código aqui
    switch (cor) {
        case 'vermelho':
            return '#e81c0e';
        case  'amarelo':
            return '#eef211';
        case  'roxo':
            return '#b322e3'
        default:
            return '#fff';
    }
}

console.log(retornaCor('vermelho'));// teste a saída passando-a como argumento

/* EXERCICIO 7 - Object Literal */
/*
Você irá escrever uma condicional que avaliará o produto e definirá uma seção para o mesmo:
Deverá ser criado um objeto chamado secoes
SE for 'cadeira' retornará 'móveis'
SE for 'lápis' retornará 'material escolar'
SE for 'fone de ouvido' retornará 'acessórios eletrônicos'
SE for 'camisa' retornará 'vestuário'
*/




