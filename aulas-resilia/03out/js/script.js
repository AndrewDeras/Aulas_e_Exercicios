// Temos uma turma aonde precisamos saber o conceito de cada aluno da turma, com as seguintes observações


//Solicitar o nome do aluno com o prompt.
var nome = prompt("Digite seu nome");
var nota = prompt("Digite sua nota");
var conceito = "";


if(nota > 10.0){
    alert("Digite uma nota valida.")
}
// Se o aluno tirar uma nota maior ou igual a 9, ele receberá o CONCEITO A e ganhará uma mochila.
else if (nota>=9){
    conceito="A"
    alert(`Caro aluno ${nome}, seu conceito é: "${conceito}" e ganhou uma mochila de brinde.`);
}
  
// Se o aluno tirar uma nota entre 7 a 8.9, ele receberá o CONCEITO B E ganhará um caderno.
else if (nota <= 8.9 && nota >= 7){
    conceito="B"
    alert(`Caro aluno ${nome}, seu conceito é: "${conceito}" e ganhou um caderno de brinde.`);
}
// Se o aluno tirar uma nota entre 6 e 7, ele receberá o CONCEITO C e ele não irá ganhar nada.
else if (nota < 7 && nota >= 6){
    conceito="C"
    alert(`Caro aluno ${nome}, o seu conceito é: "${conceito}".`);
}
// Se o aluno tirar uma nota abaixo de 6, ele recebe CONCEITO D, e irá ganhar um castigo dos pais.
else {
    conceito="D"
    alert(`Caro aluno ${nome}, seu conceito é: "${conceito}" e ficará de castigo.`);
}

//OBS:
//Preciso que seja solicitado ao usuário a informação da nota do aluno através do prompt de comando.
//Preciso que o nome, CONCEITO e o brinde do aluno (se tiver), seja exibido como um alerta. 
//EX: o Aluno Joâo tirou 9 na prova, com isso teve CONCEITO A e ganhou uma mochila. Parabéns.
//Preciso que se o usuário digitar uma nota que não esteja mencionada, seja informado que ele precisa inserir uma nota válida.

//Utilizem prompt, alert, template string, if, else if, else...