const produtos = [
    {
        nome: "Ventilador",
        preco: 89.9
    },
    {
        nome: "Mesa",
        preco: 123
    },
    {
        nome: "Cadeira",
        preco: 45.3
    },
    {
        nome: "Geladeira",
        preco: 1889.9
    },
    {
        nome: "Fogao",
        preco: 89.9
    },
    {
        nome: "Monitor",
        preco: 649.35
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

}

class Carrinho {
    constructor() {
        this.produtos = [];
        this.total = document.getElementById("total");
        this.total.innerText = 0;
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.total.innerText = this.getTotal();
    }

    removerProduto(idProduto) {
        for (let i = 0; i < this.produtos.length; i++) {
            if (this.produtos[i].getId() == idProduto) {
                this.produtos.splice(i, 1);
                break;
            }
        }
        this.total.innerText = this.getTotal();
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].getPreco();
        }
        return total;
    }

    getProdutos() {
        return this.produtos;
    }

    exibirProdutos() {

        let container = document.getElementById("listaCarrinho");

        let html = ``;
        let count = 2;

        for (let i = 0; i < this.produtos.length; i++) {

            if (i % 3 == 0) {
                html += `<div class="row">`;
                if (i != 0) {
                    count += 3;
                }
            }

            html += `<div class="col">
                        <div class="row">
                            <img src="${this.produtos[i].getImg()}" style="width: auto; height: 200;">
                        </div>
                        <div class="row">
                            <h3>${this.produtos[i].getNome()}</h3>
                        </div>
                        <div class="row">
                            <h3>${this.produtos[i].getPreco()}</h3>
                        </div>
                        <div class="row">
                            <div class="container">
                                <button type="button" class="btn btn-danger" onclick="removerCarrinho(${this.produtos[i].getId()})">Remover Produto</button>
                            </div>
                        </div>
                    </div>`;

            if (i == count) {
                html += `</div>`;
            }

        }

        container.innerHTML = html;
    }

}

class FabricaProduto {
    constructor(produtos) {
        this.produtos = [];
        for (let i = 0; i < produtos.length; i++) {
            this.produtos[i] = new Produto(i, produtos[i].nome, produtos[i].preco);
        }
    }

    getProdutos() {
        return this.produtos;
    }

    exibirProdutos() {

        let container = document.getElementById("listaProduto");

        let html = ``;
        let count = 2;

        for (let i = 0; i < this.produtos.length; i++) {

            if (i % 3 == 0) {
                html += `<div class="row">`;
                if (i != 0) {
                    count += 3;
                }
            }

            html += `<div class="col">
                        <div class="row">
                            <img src="${this.produtos[i].getImg()}" style="width: auto; height: 200;">
                        </div>
                        <div class="row">
                            <h3>${this.produtos[i].getNome()}</h3>
                        </div>
                        <div class="row">
                            <h3>${this.produtos[i].getPreco()}</h3>
                        </div>
                        <div class="row">
                            <div class="container">
                                <button type="button" class="btn btn-primary" onclick="adicionarCarrinho(${this.produtos[i].getId()})">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>`;

            if (i == count) {
                html += `</div>`;
            }

        }

        container.innerHTML = html;
    }

}

let fabrica = new FabricaProduto(produtos);
fabrica.exibirProdutos();
let produtosMontados = fabrica.getProdutos();

let carrinho = new Carrinho();

function adicionarCarrinho(id) {
    let produto = produtosMontados[id];
    carrinho.adicionarProduto(produto);
    carrinho.exibirProdutos();
}

function removerCarrinho(id) {
    let produto = produtosMontados[id];
    carrinho.removerProduto(produto.getId());
    carrinho.exibirProdutos();
}