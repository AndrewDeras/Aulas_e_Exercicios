
const tableBody = document.querySelector('#tableBody');
const select = document.querySelector('#customers');
const nome = document.querySelector('#nome');
const cpf = document.querySelector('#cpf');
const celular = document.querySelector('#celular');

const customers = [
    { name: 'Allana Luiza Carolina da Rocha', cpf: '265.106.045-31', celular: '(68) 99845-6228' },
    { name: 'Davi Roberto Gomes', cpf: '652.982.402-24', celular: '(24) 99477-4292' },
    { name: 'Davi Matheus Pinto', cpf: '608.353.476-30', celular: '(67) 99733-8532' },
    { name: 'Leonardo Tiago Calebe Silveira', cpf: '710.591.654-06', celular: '(71) 98501-5169' },
    { name: 'João Nicolas Nascimento', cpf: '996.231.454-20', celular: '(65) 98188-6598' }
]

for (let i = 0; i < customers.length; i++) {
    const customersName = customers[i].name;
    select.innerHTML += `<option id="value${i + 1} "value="${customersName}">${customersName}</option>`;
}

select.addEventListener('change', (event)=>{
    var selectElement = event.target;
    var nameSelect = selectElement.value;

    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i];

        if (nameSelect === customer.name){
            nome.textContent = customer.name
            cpf.textContent = customer.cpf
            celular.textContent = customer.celular
        }  
    }
})





