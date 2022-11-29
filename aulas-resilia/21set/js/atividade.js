// var idade = prompt("Qual a sua idade?")

// function verificarPermissoes(){
//     if (idade>=18){
//         console.log("Você pode tirar sua habilitação e também votar");
//     }
//     else if (idade==16){
//         console.log("Você pode votar mas não pode tirar CNH");
//     }
//     else{
//         console.log("Não pode votar e nem dirigir");
//     }
// }
// console.log(verificarPermissoes());
//=============================================================================

// IMC

var altura = parseInt(prompt("Qual sua altura?"));
var peso = parseInt(prompt("Qual seu peso?"));
var imc = peso/(altura*altura);


    if (imc < 17){
        console.log("Muito abaixo do peso");
    }
    else if (imc >= 17 && imc<=18.49){
        console.log("Abaixo do peso");
    }
    else if (imc >= 18.50 && imc<24.99){
        console.log("Peso normal");
    }
    else if (imc >= 25 && imc<29.99){
        console.log("Acima do peso");
    }
    else if (imc >= 30 && imc<34.99){
        console.log("Obesidade I");
    }
    else if (imc >= 35 && imc<39.99){
        console.log("Obesidade II (severa)");
    }
    else{
        console.log("Obesidade III (mórbida)");
    }
}
console.log(massaCorporal());

//==========================================MEDIA=====================================================================================

// var nota1 = parseInt(prompt("Informe a nota do primeiro Bimestre"));
// var nota2 = parseInt(prompt("Informe a nota do segundo Bimestre"));
// var nota3 = parseInt(prompt("Informe a nota do terceiro Bimestre"));
// var nota4 = parseInt(prompt("Informe a nota do quarto Bimestre"));
// var media = (nota1+nota2+nota3+nota4)/4;

// function situacao(){
//     if (media>5){

//         console.log("Você está aprovado.");
//     }
//     else if (media==5){
        
//         console.log("Você está na média.");
//     }
//     else{
//         console.log("Você está reprovado.");
//     }

//     }
//     console.log("Nota do primeiro bimestre: "+nota1+" \nNota do segundo bimestre: "+nota2+"\nNota do terceiro bimestre: "+nota3+"\nNota do quarto bimestre: "+nota4);
//     console.log("Sua média é: "+media);
//     console.log(situacao());
    
    //=================================================================================================================================================================
