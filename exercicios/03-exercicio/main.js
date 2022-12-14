const produtos = [
    {
        nome: 'TvLG',
        preco: 3000,
    },
    {
        nome: 'TvSamsung',
        preco: 2500,
    },
    {
        nome: 'Fogao',
        preco: 900,
    },
    {
        nome: 'Microondas',
        preco: 750,
    },
    {
        nome: 'Geladeira',
        preco: 1000,
    },
];

class Produto {

    constructor(id, nome, preco) {
        this.setId(id);
        this.setNome(nome);
        this.setPreco(preco);
        this.setImg();
    }

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }

    setPreco(preco) {
        this.preco = preco;
    }

    getPreco() {
        return this.preco;
    }

    setImg() {
        this.img = "./img/" + this.getNome().toLowerCase() + ".jpg";
    }

    getImg() {
        return this.img;
    }
};

class Carrinho {
    constructor(){
        this.produtos = [];
        this.total = document.querySelector('.total');
        this.total.innerText = 0;
    };

    
}