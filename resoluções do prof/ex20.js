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
                return new Gato(animal.nome, animal.cor, animal.idade, animal.numeroPatas, animal.corOlho);
            case "cavalo":
                return new Cavalo(animal.nome, animal.cor, animal.idade, animal.comprimento, animal.altura);
            default:
                console.log("animal não encontrado.");
                break;
        }

    }

    gerarAnimaisAleatorios(quantidade, nomes, cores, pelagems, tipos){
        let animaisAleatorios = [];
    
        for(let i = 0; i<quantidade; i++){
    
            let charTipo = Math.floor(Math.random()*tipos.length);
            let charNome = Math.floor(Math.random()*nomes.length);
            let charCor = Math.floor(Math.random()*cores.length);
            let charPelagem = Math.floor(Math.random()*pelagems.length);
            let charCorOlho = Math.floor(Math.random()*cores.length);
        
            let especie = tipos[charTipo];
            let animalAliatorio;
        
            switch(especie){
                case "cachorro":
                    animalAliatorio = {
                        nome: nomes[charNome],
                        cor: cores[charCor],
                        idade: Math.floor(Math.random()*20),
                        numeroPatas: 4,
                        pelagem: pelagems[charPelagem],
                    };
                    break;
                case "gato":
                    animalAliatorio = {
                        nome: nomes[charNome],
                        cor: cores[charCor],
                        idade: Math.floor(Math.random()*20),
                        numeroPatas: 4,
                        corOlho: cores[charCorOlho],
                    };
                    break;
                case "cavalo":
                    animalAliatorio = {
                        nome: nomes[charNome],
                        cor: cores[charCor],
                        idade: Math.floor(Math.random()*20),
                        comprimento: (Math.random()*2).toFixed(2),
                        altura: (Math.random()*2).toFixed(2),
                    };
                    break;
                default:
                    console.log("animal não encontrado.");
                    break;
            }
        
            animaisAleatorios.push(this.fabricarAnimal(animalAliatorio, especie));
        }
    
        return animaisAleatorios;
    }

}

let nomes = ["Bidu", "Cascao", "Monicao", "Bixano", "Nono", "Jojo", "Mumu", "Bibi", "Fomfom", "Zureta"];
let cores = ["azul", "vermelho", "verde", "amarelo", "roxo", "lilás", "branco", "preto", "cinza", "bege"];
let pelagems = ["espessa", "macia", "fina", "fofa", "lisa"];
let tipos = ["cachorro", "gato", "cavalo"];

let fabrica = new FabricaAnimal();

let animaisAleatorios = fabrica.gerarAnimaisAleatorios(3, nomes, cores, pelagems, tipos);

for(let i = 0; i<animaisAleatorios.length; i++){
    animaisAleatorios[i].imprimir();
}