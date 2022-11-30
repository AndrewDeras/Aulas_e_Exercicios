class Pilha {
    constructor(){
        this.pl = []
    }

    adicionar(dado){
        this.pl[this.pl.length] = dado;
    }

    remover(){
        
    }

    exibir(){
        console.log(this.pl);
    }
}

let p = new Pilha();

p.adicionar(10)
p.adicionar(8)
p.adicionar(9)
p.adicionar(1)
p.exibir()
p.remover()
p.exibir()