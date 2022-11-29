const buttonCor = document.querySelector('#cor');
const buttonTextCor = document.querySelector('#textCor');
const buttonText = document.querySelector('#changeText');
const texto = document.querySelector('#texto');
console.log(texto);

const body = document.body;

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomText() {
    var result = ''
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 150; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


buttonCor.addEventListener('click', () => {
    body.style.background = generateColor()
});


buttonTextCor.addEventListener('click', () => {
    body.style.color = generateColor()
});

buttonText.addEventListener('click', ()=>{
    texto.textContent = randomText()
})



