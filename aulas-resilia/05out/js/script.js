// var listaConvidados = [
//     "ERIC",
//     "THAIS",
//     "MONIQUE",
//     "ANDREW"
// ];
// //________________________adicionando um novo integrante_________________________________________

// listaConvidados.push("RUAN");

// //_________________________________remover da lista______________________________________________

// var desconvidados = [listaConvidados.pop()]
// console.log(listaConvidados);
// console.log(desconvidados);

//______________________________ LOOPS E REPETIÇÃO COM ARRARYS______________________________________

//QUERO QUE SEJA MOSTRADO NO CONSOLE CADA MORIDADA QUE FOI DADA ANTES DE ENGOLIR A COMIDA

// var nMastigadas = 1;

// while ( nMastigadas <= 20) {
//     console.log(`Você deu ${nMastigadas} mastigadas, estão faltando ${20 - nMastigadas} para poder engolir.`);
//     nMastigadas++
// }
// console.log("Terminou");

//___________________________________________________________
var listaConvidados = [
    "ERIC",
    "THAIS",
    "MONIQUE",
    "ANDREW",
    "DANILO",
    "KAREN"
];

// var contador = 0;

// while(contador < listaConvidados.length){

//     console.log(`Entrada liberada do convidado(a) ${listaConvidados[contador]}`);
//     contador++
// }
// console.log("Lista chegou ao fim.");

//________________________________________________________________________________

// var sorteioMegaSena39 = [ 3, 7, 20, 33, 45, 58];

// var sorteioMegaSena = [
//     [8, 10, 12, 14, 16, 18],
//     [9, 11, 13, 15, 17, 19],
//     [10, 12, 14, 16, 18, 20]
// ];

//---------------------------REMOVER POSIÇÃO ESPECÍFICA-----------------------------------------------------
// console.log(listaConvidados);

// listaConvidados = listaConvidados.splice(1,3);

// console.log(listaConvidados);

//___________________________SUBSTITUIÇÃO_______________________________________________________________________________
// console.log(listaConvidados);

// listaConvidados [1] = "CAMILA"; 

// console.log(listaConvidados);

//__________________________________________________________________________________________________________
for(var i = 0; i < listaConvidados.length; i++){
    console.log(`Entrada liberada dos convidados ${listaConvidados[i]}`);
}
console.log("Fim da lista.");