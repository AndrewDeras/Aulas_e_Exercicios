const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const resultado = document.querySelector('.resultado');

btn.addEventListener('click', () => {
    let soma = 0;

    for (let i = 0; i < inputs.length; i++) {
        const num = Number(inputs[i].value);
        soma += num
    };

    resultado.innerHTML = `<h3>O resultado da soma é: ${soma}</h3>`

});


