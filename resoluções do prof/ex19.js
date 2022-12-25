class Animal {

    constructor(nome, cor, idade){
        this.setNome(nome);
        this.setCor(cor);
        this.setIdade(idade);
    }

    setNome(nome){
        this.nome = nome;
    }

    getNome(){
        return this.nome;
    }

    setCor(cor){
        this.cor = cor;
    }

    getCor(){
        return this.cor;
    }

    setIdade(idade){
        this.idade = idade;
    }

    getIdade(){
        return this.idade;
    }

    emitirSom(){
        console.log("Animal emitindo som!\n");
    }

    locomover(){
        console.log("Animal se locomovendo!\n");
    }

    imprimir(){
        let str = `Classe Animal\n nome: ${this.getNome()}\n cor: ${this.getCor()}\n idade: ${this.getIdade()}\n`;
        console.log(str);
    }

}

class Cachorro extends Animal {
    constructor(nome, cor, idade, numeroPatas, pelagem){
        super(nome, cor, idade);
        this.setNumeroPatas(numeroPatas);
        this.setPelagem(pelagem);
    }

    setNumeroPatas(numeroPatas){
        this.numeroPatas = numeroPatas;
    }

    getNumeroPatas(){
        return this.numeroPatas;
    }

    setPelagem(pelagem){
        this.pelagem = pelagem;
    }

    getPelagem(){
        return this.pelagem;
    }

    emitirSom(){
        super.emitirSom();
        console.log(`${this.getNome()} Latindo! Auauauauauauau!\n`);
    }

    locomover(){
        console.log(`${this.getNome()} andando em ${this.getNumeroPatas()} patas!\n`);
    }

    imprimir(){
        let str = `Classe Cachorro\n nome: ${this.getNome()}\n cor: ${this.getCor()}\n idade: ${this.getIdade()}\n numero de patas: ${this.getNumeroPatas()}\n pelagem: ${this.getPelagem()}\n`;
        console.log(str);
    }

    uivar(){
        console.log(`${this.getNome()} uivando!\n`)
    }

}

class Gato extends Animal {
    constructor(nome, cor, idade, numeroPatas, corOlho){
        super(nome, cor, idade);
        this.setNumeroPatas(numeroPatas);
        this.setCorOlho(corOlho);
    }

    setNumeroPatas(numeroPatas){
        this.numeroPatas = numeroPatas;
    }

    getNumeroPatas(){
        return this.numeroPatas;
    }

    setCorOlho(corOlho){
        this.corOlho = corOlho;
    }

    getCorOlho(){
        return this.corOlho;
    }

    emitirSom(){
        super.emitirSom();
        console.log(`${this.getNome()} Miando! Miiiiaaaaaaaaaaaaaaaaauuuuuuuuu!\n`);
    }

    locomover(){
        console.log(`${this.getNome()} andando em ${this.getNumeroPatas()} patas!\n`);
    }

    imprimir(){
        let str = `Classe Gato\n nome: ${this.getNome()}\n cor: ${this.getCor()}\n idade: ${this.getIdade()}\n numero de patas: ${this.getNumeroPatas()}\n cor do olho: ${this.getCorOlho()}\n`;
        console.log(str);
    }

    cuspirBolaPelo(){
        console.log(`Senhor ${this.getNome()} cuspiu uma bola de pelo!\n`)
    }

}

class Cavalo extends Animal {
    constructor(nome, cor, idade, comprimento, altura){
        super(nome, cor, idade);
        this.setComprimento(comprimento);
        this.setAltura(altura);
    }

    setComprimento(comprimento){
        this.comprimento = comprimento;
    }

    getComprimento(){
        return this.comprimento;
    }

    setAltura(altura){
        this.altura = altura;
    }

    getAltura(){
        return this.altura;
    }

    emitirSom(){
        super.emitirSom();
        console.log(`${this.getNome()} Relinchando! hiin in in hinir!\n`);
    }

    locomover(){
        console.log(`${this.getNome()} em galope!\n`);
    }

    imprimir(){
        let str = `Classe Cavalo\n nome: ${this.getNome()}\n cor: ${this.getCor()}\n idade: ${this.getIdade()}\n comprimento: ${this.getComprimento()}\n altura: ${this.getAltura()}\n`;
        console.log(str);
    }

    trotar(){
        console.log(`${this.getNome()} está trotando!\n`);
    }

}

class FabricaAnimal {

    fabricarAnimal(animal, especie){

        switch(especie){
            case "cachorro":
                return new Cachorro(animal.nome, animal.cor, animal.idade, animal.numeroPatas, animal.pelagem);
            case "gato":
                return new Gato(animal.nome, animal.cor, animal.idade, animal.NumeroPatas, animal.corOlho);
            case "cavalo":
                return new Cavalo(animal.nome, animal.cor, animal.idade, animal.comprimento, animal.altura);
            default:
                console.log("animal não encontrado.");
                break;
        }

    }

}

let cachorros = [
    {
        nome: "Bidu",
        cor: "caramelho",
        idade: 5,
        numeroPatas: 4,
        pelagem: "lisa",
    },
    {
        nome: "Cascao",
        cor: "cinza",
        idade: 1,
        numeroPatas: 4,
        pelagem: "fofa",
    },
    {
        nome: "Monicao",
        cor: "marrom",
        idade: 7,
        numeroPatas: 4,
        pelagem: "espessa",
    }
];

let gatos = [
    {
        nome: "Bixano",
        cor: "preto",
        idade: 5,
        numeroPatas: 4,
        corOlho: "azul",
    },
    {
        nome: "Nono",
        cor: "cinza",
        idade: 2,
        numeroPatas: 4,
        corOlho: "verde",
    },
    {
        nome: "Mumu",
        cor: "branco",
        idade: 12,
        numeroPatas: 4,
        corOlho: "castanho",
    }
];

let cavalos = [
    {
        nome: "Bibi",
        cor: "caramelho",
        idade: 2,
        comprimento: 1.6,
        altura: 1,
    },
    {
        nome: "Fonfon",
        cor: "cinza",
        idade: 9,
        comprimento: 2.1,
        altura: 1.7,
    },
    {
        nome: "Zureta",
        cor: "marrom",
        idade: 12,
        comprimento: 1.9,
        altura: 1.4,
    }
];

//código de execução para fazer três animais de cada espécie

let fabrica = new FabricaAnimal();

let arrayObjCachorro = [];
let arrayObjGato = [];
let arrayObjCavalo = [];

for(let i = 0; i<3; i++){
    arrayObjCachorro.push(fabrica.fabricarAnimal(cachorros[i], "cachorro"));
    arrayObjGato.push(fabrica.fabricarAnimal(gatos[i], "gato"));
    arrayObjCavalo.push(fabrica.fabricarAnimal(cavalos[i], "cavalo"));
}

for(let i = 0; i<3; i++){
    arrayObjCachorro[i].imprimir();
    arrayObjGato[i].imprimir();
    arrayObjCavalo[i].imprimir();
}
