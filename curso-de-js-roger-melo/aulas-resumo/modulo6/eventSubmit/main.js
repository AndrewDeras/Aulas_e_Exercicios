const form = document.querySelector('.signup-form');
// const userNameInput = document.querySelector('#username');



form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(form.username.value);
})

const userName = 'andrew';

const pattern = /^[a-z]{6,}$/

const isAMatch = pattern.test(userName);

console.log(isAMatch);

if (isAMatch){
    console.log('o teste passou.');
}else{
    console.log('o teste não passou.');
}