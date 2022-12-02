const btn = document.querySelector('button');
const div = document.querySelector('div');

btn.addEventListener('click', () => {
    if (div.style.display === 'block'){
       return div.style.display = 'none'
    }else {
       return div.style.display = 'block'
    }
});
