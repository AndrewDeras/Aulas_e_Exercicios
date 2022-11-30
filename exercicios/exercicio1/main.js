const buttonCor = document.querySelector('#cor');
const buttonTextCor = document.querySelector('#textCor');
const buttonText = document.querySelector('#changeText');
const texto = document.querySelector('#texto');


function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function randomText() {
    var result = ''
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 150; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};


buttonCor.addEventListener('click', () => {
    document.body.style.background = generateColor();
});


buttonTextCor.addEventListener('click', () => {
    document.body.style.color = generateColor();
});

buttonText.addEventListener('click', ()=>{
    texto.textContent = randomText();
});



