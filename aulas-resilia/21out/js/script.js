/*Criando e adicionando elementos na página
utilizando o creatElement
apeend() => a minha tag sera inserida antes do fechamento da tag que eu selecionei
prepend() => a tag será inserida apos o inicio da tag selecionada
insertBefore() => a tag será inserida em um lugar especifico da tag selecionada

//append
const myDiv = document.createElement('div');
myDiv.innerText = 'made in riachuelo';
const myBody = document.querySelector('body');
const myHeader = myBody.querySelector('header')
const myH2 = myBody.querySelector('h2');
// myBody.append(myDiv);
//__________________________Prepend______________________________________
// myBody.prepend(myDiv);
//__________________________insertBefore______________________________________
myBody.insertBefore(myDiv, myH2);
*/
//___________________________EVENTOS_____________________________________
// onKeyDown --> colecionar(guardar) automaticamente os caracteres informados pelo usuário
const myInput = document.querySelector('input');

    myInput.onkeydown = (event)=>{
        console.log(event.currentTarget.value)
    };
//onKe)yUp --> colecionar(guardar) automaticamente os caracteres informados pelo usuário quando o usuário tirar os dedos do teclado.
    myInput.onkeyup = ()=>{      
    }
//Eventos no mouse pelo HTML
// function print(){
//     alert('cliquei') 
// }
// ______________addEventLinester()____________
// const myH1 = document.querySelector('h1');
//     myH1.addEventListener('click', print);
//     function print(){
//     alert('cliquei')
// }
// const myH1 = document.querySelector('h1');
//     myH1.addEventListener('mouseover', print);
//     function print(){
//     alert('perdeu')
// }






