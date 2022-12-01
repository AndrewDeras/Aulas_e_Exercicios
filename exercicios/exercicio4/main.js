function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let timerColor = setInterval(() => {
        document.body.style.background = generateColor()
    }, 1000)
    

const btnStop = document.querySelector('.stop');
const btnStart = document.querySelector('.start');

