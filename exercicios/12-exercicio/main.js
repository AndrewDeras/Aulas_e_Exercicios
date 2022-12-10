const valor = document.querySelector('#valor');
const desconto = document.querySelector('#desconto');
const resultado = document.querySelector('#resultado');

const button = document.querySelector('button');

let valorComDesconto = 0;

function calcularDesconto() {
    return valorComDesconto = valor.value * (1 - desconto.value / 100);
};


button.addEventListener('mousemove', () => {
    resultado.innerHTML = calcularDesconto();
});