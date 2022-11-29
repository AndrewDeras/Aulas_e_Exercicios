console.log("andrew");

function abrirP (){
    let status = document.getElementById('status');
    let btn = document.getElementById('abrir')
    let btn2 = document.getElementById('fechar')
    status.innerHTML = `<p id="pTemp">Estamos Abertos!!!</p>`
    btn.style.color = 'white';
    btn.style.background = 'green';
    btn.style.border = '3px solid black';
    btn2.style.color = 'black';
    btn2.style.background = 'white';
    btn2.style.border = 'none';
}

function fecharP(){
    let paragrafo = document.getElementById('pTemp');
    let btn = document.getElementById('fechar')
    let btn2 = document.getElementById('abrir')
    paragrafo.innerText = "Estamos Fechados!!!"
    btn.style.color = 'white';
    btn.style.background = 'red'; 
    btn.style.border = '3px solid black';
    btn2.style.color = 'black';
    btn2.style.background = 'white';
    btn2.style.border = 'none';
}
