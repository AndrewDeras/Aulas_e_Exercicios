console.log("email");

function validaEmail(){
    var email = prompt("Digite seu email.");
    if (email != "@gmail.com" || email != "@outlook.com"){
        alert("email Invalido");
    }
}