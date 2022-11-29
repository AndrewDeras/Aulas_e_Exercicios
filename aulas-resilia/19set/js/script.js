// Senac Sabores - Marguerita, Quatro queijos e Calabresa

var saborPizza = prompt("Qual o sabor da pizza?");

if (saborPizza =="marguerita"){
    console.log("O cliente pediu a pizza "+ saborPizza + " que custa 32.00 R$");
}
else if (saborPizza =="quatro queijos"){
    console.log("O cliente pediu a pizza "+ saborPizza + " que custa 30.90 R$");
}
else if (saborPizza =="calabresa"){
    console.log("O cliente pediu a pizza "+ saborPizza + " que custa 35.00 R$");
}
else if (saborPizza =="peperoni"){
    console.log("O cliente pediu a pizza "+ saborPizza + " que custa 40.00 R$");
}
else {
    console.log("Escolha uma pizza do cardápio");
}
