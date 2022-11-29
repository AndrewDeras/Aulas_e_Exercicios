//string
// var nomeAluno = "Andrew";
// //Number (inteiro)
// var idadeAluno = 24;
// //Number (real)
// var alturaAluno = 1.75;
// //boolean
// var compreiBolo = true;

// console.log("Meu nome é "+nomeAluno+" tenho "+idadeAluno+" anos, altura "+alturaAluno);

//=====================================================================================================================

//SENAC ABRE DOMINGO ?

// var dia = prompt("Que dia é hoje ?");
//      if ( dia=="domingo"){
//         console.log("Hoje o Senac não abre.");
//     }
//     else{
//         console.log("Hoje o Senac está aberto");
//     }

//=======================================================================================================================

// preciso de uma verificação para informar ao usuario que se o dia for seguda, quarta ou sexta ele poderá corta o cabelo

var dia = prompt("Que dia é hoje?");
var turno = prompt("Qual o turno?");

//  barbearia(){
    if ((dia=="segunda" || dia=="quarta" || dia=="sexta")&& turno=="manha"){
         console.log("Bom dia, seja bem-vindo.");
}
    else if ((dia=="segunda" || dia=="quarta" || dia=="sexta")&& turno!=="manha"){
         console.log("Oi, a barbearia está aberta mas o cliente não poderá cortar o cabelo.");
}
    else if(dia =="terça" || dia=="quinta" || dia=="sabado") {
        console.log("Oi, a barbearia está aberta mas o cliente não poderá cortar o cabelo.");;
    }
    else{
        console.log("Barbearia fechada.");
    }
// }       
//     console.log(barbearia());