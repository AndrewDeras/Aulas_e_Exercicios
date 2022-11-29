console.log("cpf");


function validaCPF(){
   var cpf = prompt("Digite seu CPF sem pontos ou traços");
    if (cpf.length > 11 ){
        alert("CPF Invalido")
    }
}