function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const btnStop = document.querySelector('.stop');
const btnStart = document.querySelector('.start');

let timerColor = null;

btnStart.addEventListener('click', ()=>{
    timerColor = setInterval(() => {
        document.body.style.background = generateColor();
    }, 1000)
});

btnStop.addEventListener('click', ()=>{
    clearInterval(timerColor);
    document.body.style.background = 'none';
})

 
    



