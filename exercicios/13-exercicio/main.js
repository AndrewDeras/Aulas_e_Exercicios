const button = document.querySelector('button');
const div = document.querySelector('div');
const time = document.querySelector('#time');

button.addEventListener('click', () => {
    if (div.style.display === 'block') {
        return div.style.display = 'none'
    } else {
        return div.style.display = 'block'
    }
});

function currentDate() {
    let dateString = new Date().toLocaleString();
    time.innerHTML = dateString;
}

setInterval(currentDate, 1000);

