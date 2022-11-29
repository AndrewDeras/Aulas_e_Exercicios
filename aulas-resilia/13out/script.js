    let text = document.getElementById('txt');
    let text1 = document.getElementById('txt1');
    
    let result
    
function entrada(){
  
    arrayText = text.value.split('');
    // console.log(arrayText);
    arrayText1 = text1.value.split('');
    // console.log(arrayText1);
    let r3 = arrayText.filter( a => !arrayText1.includes( a ) );
    
    document.getElementById('resultado').innerHTML += r3;

}
