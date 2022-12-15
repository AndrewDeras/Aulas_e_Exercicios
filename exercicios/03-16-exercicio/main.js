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

    constructor(id, nome, preco, qtd) {
        this.setId(id);
        this.setNome(nome);
        this.setPreco(preco);
        this.setImg();
        this.setQtd(qtd);
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

    setQtd(qtd) {
        this.qtd = qtd;
    }

    getQtd() {
        return this.qtd
    }

    setImg() {
        this.img = "./img/" + this.getNome().toLowerCase() + ".jpg";
    }

    getImg() {
        return this.img;
    }
};

class Carrinho {
    constructor() {
        this.produtos = [];
        this.total = document.querySelector('.total');
        this.total.innerText = 0;
    };

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.total.innerText = this.getTotal();
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos.getPreco();
        }
        return total;
    }

    getProdutos() {
        return this.produtos;
    }


};

class FabricaProduto {
    constructor(produtos) {
        this.produtos = [];
        for (let i = 0; i < produtos.length; i++) {
            this.produtos[i] = new Produto(i, produtos[i].nome, produtos[i].preco, 1);
        };
    }

    getProdutos() {
        return this.produtos;
    }

    exibirProdutos() {
        let store = document.querySelector('.store');
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
            store.innerHTML += `
            <div class="col">
                <div class="row">
                    <img style="width: 250; height: 200;" src="${produto.getImg()}" alt="" />
                </div>    
                <span class="row">
                    <h3>${produto.getNome()}</h3>
                </span>

                <span class="row price"> R$ ${produto.getPreco()} </span>
                <button id="${produto.getId()}" class="row add-cart btn btn-success">Adicionar ao Carrinho
                </button>
            </div>
            
            `
        }

    }
}

let fabrica = new FabricaProduto(produtos);
fabrica.exibirProdutos();


