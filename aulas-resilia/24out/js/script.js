console.log('andrew');

const cachioro = {
    nome : 'simba',
    raca : 'srd',
    cor : 'amarelo',
    latir(){
        return 'o cachorro latiu'
    },
    morder(){
        return 'o cachorro mordeu'
    },
    comer(){
        return ' o cachorro comeu.'
    }
}
cachioro.nome = 'rex';
console.log(cachioro);

//____________________________THIS______________________________________
/*
escopo global, padrão não está dentro de nada
escopo local, está contido dentro de algum contexto
*/
//lampada

const lampada = {
    cor : 'amarelo',
    acesa : false,
    acender (){
        if (!this.acesa.value){
            return !acesa
        }
    } 
}
console.log(lampada);