const users = [
    {
        nome: "Abraão Farias",
        idade: 22,
        animal: "gato"
    },
    {
        nome: "Michelina Souza",
        idade: 12,
        animal: "Hamster"
    },
    {
        nome: "Venâncio Almeida",
        idade: 45,
        animal: ""
    },
    {
        nome: "Maria Silva",
        idade: 15,
        animal: "Coelho"
    },
    {
        nome: "José Eustáquio",
        idade: 32,
        animal: "Gato"
    },
]


const nomesAbv = users.map(({ nome }) => {
    let fullNameAbv = nome.split(' ');
    return `${fullNameAbv[0][0]}.${fullNameAbv[1][0]}`
})

console.log(nomesAbv);



let gostaDeGatos = []

users.map(({ nome, animal }) => {
    if (animal === 'gato' || animal === 'Gato') {
    return  gostaDeGatos.push(nome);
    }
});



let maiores = [];

const soMaioresDeIdade = users.map(user => {
    if (user.idade >= 18) {
        maiores.push(user.nome)
    };

});



console.log(maiores);
