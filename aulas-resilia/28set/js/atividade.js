//--------------------------REVISÃO------------------------------------

// IMC

// var altura = prompt("Qual é sua altura?");
// var peso = prompt("Qual é seu peso?");
// var imc = (peso/(altura*altura));

// function massaCorporal(){
//     if (imc < 17){
//         return("Muito abaixo do peso");
//     }
//     else if (imc == 17 && imc<=18.49){
//         return("Abaixo do peso");
//     }
//     else if (imc == 18.50 && imc<=24.99){
//         return("Peso normal");
//     }
//     else if (imc == 25 && imc<=29.99){
//         return("Acima do peso");
//     }
//     else if (imc == 30 && imc<=34.99){
//         return("Obesidade I");
//     }
//     else if (imc == 35 && imc<=39.99){
//         return("Obesidade II (severa)");
//     }
//     else{
//         return("Obesidade III (mórbida)");
//     }
// }
// alert(massaCorporal());

//___________________________________________________________________________________

// var nome = prompt("Qual é seu nome?");
// var altura = prompt(`Informe sua altura ${nome}:`);
// var peso = prompt(`Informe o seu peso ${nome}:`);

// alert(`${nome} possuí uma altura de ${altura} e o peso de ${peso}kg `);

//_________________________________________STRING - OPERADOR PONTO________________________________________________________

// var nome = prompt("Qual é seu nome?");
// alert(nome.toLowerCase());
// alert(nome.toUpperCase());

//__________________________REPLACE____________________________________________________

// var instrutorHard = "Hoje é aula do instrutor(a) William."
// var instrutorSoft = instrutorHard.replace("William", "Patrícia");

// alert(instrutorSoft);

//________________________________________aula28set________________________________________________________________________________

//  var manoelFeira = "Manoel foi á feira. e comrprou um pastel"
// var tamanhoFrase = manoelFeira.length;

// alert(tamanhoFrase);

// -----------------------------Accesso a propriedade-----------------

// alert(manoelFeira[25]);
// alert(manoelFeira[8]);
// alert(manoelFeira[35]);

//________________________________IndexOF___________________________________________________

// alert(manoelFeira.indexOf("foi"));
// alert(manoelFeira.indexOf("sono"));

//________________________________while___________________________________________________
var nMastigadas = 0;
while(nMastigadas < 20) {
 alert(`Mastigada de número ${nMastigadas} realizada`);
 nMastigadas++;
}
console.log('Finalmente engoliu!');
