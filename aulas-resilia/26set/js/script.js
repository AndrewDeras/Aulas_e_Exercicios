// function produtosVariados(item, valor){
//     return 
// }
// produtosVariados("abobora", 3.20);
// produtosVariados("maça", 1.00);

// function liquidificador(item1, item2, item3) {
//     if (item1 == "maça" && item2=="morango" && item3=="leite") {
//         return "Vitamina de frutas vermelhas."
//     }
//     else{
//         return "Não é a vitamina que eu quero"
//     }   
// }
// console.log(liquidificador("item1", "item2", "item3"));

// ===============================================================================================
// VERIFICAR SE UMA PESSOA PODE TIRAR SUA HABILITAÇÃO E PODE VOTAR

// function verificao(idade) {
//     if (idade>=18) {
//         return "Você pode tirar sua habilitação e também votar"
//     }
//     else if (idade>=16 && idade<=17){
//         return "Você pode votar mas não pode tirar sua habilitação"
//     }
//     else{
//         return "Você não pode tirar sua habilitação e também não pode votar"
//     }
// }
// console.log(verificao("18"));

// =====================================================================================================

//  Rodagem média carro

function previsaoRodagem (qtdLitros, mediaKmLitro, prevKmRodados) {
    prevKmRodados = qtdLitros * mediaKmLitro ;
    if (prevKmRodados<=25){  
        console.log("Tem pouco combustível");
    }
    else if (prevKmRodados<=50){
        console.log("Tem combustivel suficiente. ");
    }
    else {
        console.log("Tem combustivel sobrando");
    }
    return "A previsão da distância percorrida nas condições fornencidas é: "+prevKmRodados+"km" ;
}
console.log(previsaoRodagem("10", "6"));

//======================================================================================================

// var nomeUsua = prompt("Qual é o seu nome? ");
// // var minhaSaudacao = "Seja muito bem vindo "+nomeUsua+ " ao meu site."
// var minhaSaudacao = `${nomeUsua}, seja muito bem vindo ao meu site`;
// alert(minhaSaudacao);

//==========================================================

// var meuTexto = "Andrew"
// console.log(meuTexto.toLowerCase());
// console.log(meuTexto.toUpperCase());

//=======================================================================================================

// 000000000

//========================================================================================================