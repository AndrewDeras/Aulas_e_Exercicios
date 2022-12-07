/*
const paragraph = document.querySelector('p');

// paragraph.innerText += ' Texto inserido';

const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach((paragraph, index) => {
//     paragraph.innerText += ` Novo texto ${index + 1}`
// });

const div = document.querySelector('.content');

// div.innerHTML += '<h2>Novo H2</h2>'

const people = ['Andrew', 'Lindsay', 'Jeffrey'];

people.forEach(person => {
    div.innerHTML += `<p>${person}</P`
})


const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.youtube.com/');
link.innerText = 'youtube';

const paragraph = document.querySelector('p');

console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('class', 'success');

paragraph.setAttribute('style', 'color: blueviolet');


const title = document.querySelector('h1');

console.log(title.style.color);

title.style.margin = '50px';
title.style.color = 'pink';
title.style.fontSize = '40px';
title.style.margin = '';


const paragraph = document.querySelector('p');

paragraph.classList.add('error');
paragraph.classList.remove('error');
paragraph.classList.add('success');


const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    if (paragraph.textContent.includes('error')) {
        paragraph.classList.add('error');
    }

    if (paragraph.textContent.includes('success')) {
        paragraph.classList.add('success')
    }
});



const title = document.querySelector('h1');

title.classList.toggle('test');
title.classList.toggle('test');


//parents

const article = document.querySelector('article');

// Array.from(article.children).forEach(element => {
//     element.classList.add('article-element')
// })

const title = document.querySelector('h2');

console.log(title.previousElementSibling);

*/
const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');

    li.textContent = 'Novo Item.';
    ul.append(li)
});

ul.addEventListener('click', event => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'LI') {
        clickedElement.remove()
    }
})