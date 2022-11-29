// const element = document.getElementById('titleOne');
// const element2 = document.getElementsByClassName('my_P');
// const element3 = document.getElementsByTagName('h1');

// console.log(element);  
// console.log(element2);  
// console.log(element3);  

//-------------------------QUERYSELECTOR--------------------------------------------------------
// const element = document.querySelector('#titleOne');
// const element2 = document.querySelectorAll('.my_P');
//  const element3 = document.querySelector('h1');

//  element3.textContent += ' bla bla bla bla'
    // element3.innerHTML = ' <h6>La la , lalalaa, lalalaaa, hey jude</h6>' 
    // element3.innerText = 'La la , lalalaa, lalalaaa, hey jude';

// console.log(element);  
// console.log(element2);  
// console.log(element3);  

//-------------------ATRIBUTOS------------------------------------------

//textContent
//innerText
//value

// const email = document.querySelector('input');

// email.value = 'Email inválido'

const bodyP = document.querySelector('body');

bodyP.style.color = 'white';


const rdp = document.querySelector('footer');
    rdp.setAttribute('id', 'andrew')
    rdp.removeAttribute('class', 'deras')
rdp.innerHTML = 
`<div>
    <h1>rodapé</h1>
</div>`


