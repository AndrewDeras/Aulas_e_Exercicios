// senac sabores - pizza marguerita, quintas vai com refri


// se dia for quinta e pizza marguerita, refri gratias

// var saborPizza = "marguerita";
// var dia = "quinta";

// if (saborPizza=="marguerita" && dia=="quinta"){
//     console.log("Pizza no forno");
//     console.log("PROMOÇÃO refri grátis");
// }
//===============================================================================================================

// senac sabores - terça e quarta o cliente ganha frete grátis


// var dia = prompt("Qual o dia? ")

// if(dia=="terça" || dia=="quarta"){
//     console.log("Você ganhou frete grátis")
// }
// else{
//     console.log("O frete é de : R$156454.5")
// }
//==============================================================================================================================================

// Senac sabores - Ela está aberta

// var aberto = true;

// if (!!aberto){
//     console.log("Pizzaria fechada");
// }
//===========================================================================================

//SENAC SABORES -  marguerita na quarta ou no sábado, a pizza é em dobro

var sabor = prompt("Qual o sabor da pizza?");
var dia = prompt("Que dia é hoje?");

if( sabor=="marguerita" && (dia=="terça" || dia=="sabado")){
    console.log(" Pizza no forno \n Promoção de pizza em dobro \n O pedido é duas pizzas de sabor: "+ sabor)
}
