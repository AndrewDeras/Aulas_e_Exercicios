const cep = document.querySelector('#cep');
const rua = document.querySelector('#rua');
const bairro = document.querySelector('#bairro');
const municipio = document.querySelector('#municipio');
const estado = document.querySelector('#estado');

const isNumber = (number) => /^[0-9]+$/.test(number);

const validCep = (cep) => cep.length === 8 && isNumber(cep);

const insertData = (address) => {
    rua.value = address.logradouro;
    bairro.value = address.bairro;
    municipio.value = address.localidade;
    estado.value = address.uf;
};

const pesquisarCep = async () => {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if (validCep(cep.value)) {
        const data = await fetch(url);
        const address = await data.json();
        console.log(data);
        console.log(address);
        insertData(address);
    }
}

cep.addEventListener('focusout', pesquisarCep)