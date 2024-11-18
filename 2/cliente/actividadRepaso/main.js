document.addEventListener("DOMContentLoaded", function() {
ocultarTeclado(1)
botton()
});
let arrayRecuperado = JSON.parse(localStorage.getItem('word')) || [];

function ocultarTeclado(vol){
   let div= document.getElementById("keyboard-cont")
   if(vol ===1){
   div.style.display='none'
}else{
    div.style.display='flex'}

}

function botton() {
    
    let buttons = document.getElementsByTagName('button');
    Array.from(buttons).forEach(element => {
        if(element.type === 'button'){
        element.addEventListener('click', function() {
            addArray(element.value); 
        });
        }
    });
}


let inputPassword = '';
document.addEventListener("keydown", function(event) {
    const input = event.key;
    inputPassword += input;
    if (inputPassword.includes('abracadabra')) {
            ocultarTeclado()
        inputPassword = '';
    }else if (inputPassword.includes('patadecabra')) {
        ocultarTeclado(1)
    inputPassword = ''
    }
       
})


let wordArray=[]
function addArray(letter){
   
    wordArray.push(letter)
    console.log(wordArray)
   
 }
 document.addEventListener('submit',function(event){
    let word = [wordArray.join('')]
    console.log(word)
    arrayRecuperado.push(word)
    localStorage.setItem('word', JSON.stringify(arrayRecuperado));
    wordArray=[]
    
})

 console.log(arrayRecuperado)