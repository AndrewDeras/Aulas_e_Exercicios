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

// testando as classes

let animal = new Animal("Tobi", "marrom", 3);
let cachorro = new Cachorro("Bidu", "caramelho", 5, 4, "lisa");
let gato = new Gato("Fofão", "branco", 2, 4, "preto");
let cavalo = new Cavalo("Edi", "Marrom", 7, 2.3, 1.5);

animal.emitirSom();
animal.locomover();
animal.imprimir();

cachorro.emitirSom();
cachorro.locomover();
cachorro.imprimir();
cachorro.uivar();

gato.emitirSom();
gato.locomover();
gato.imprimir();
gato.cuspirBolaPelo();

cavalo.emitirSom();
cavalo.locomover();
cavalo.imprimir();
cavalo.trotar();

console.log(typeof cavalo);