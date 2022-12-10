const coeficienteA = document.querySelector('#coefiA');
const coeficienteB = document.querySelector('#coefiB');

const resultado = document.querySelector('#resultado');

const button = document.querySelector('button');

let conta = 0;



button.addEventListener('click', () => {
    conta = (-(coeficienteB.value) / coeficienteA.value);

    resultado.textContent = conta
})

