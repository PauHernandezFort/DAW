let ruta ='http://127.0.0.1:5500/AEV1%20-%20JavaScript%20Avanzado/Ejercicio%203/src/';
let file=['alcohol','cafe','entrantes','fruta','infusiones','tartas']
let number =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg',]
let title =['bebidas','postres','entrantes']
let title2 =['alcohol','tartas','entrantes']
let bebidas=['alcohol','cafe','infusiones']
let postres =['tartas','fruta']
let text=document.getElementsByTagName('h1')[0]
let position =0
let position2 =0
let buttons = document.getElementsByTagName('td');
let img = document.getElementsByTagName('img')[0]
img.src = `${ruta}/${file[0]}/${number[0]}`;
text.textContent=title[0]
change(0)
function change(vol) {
       
     if (vol === 3) {
      position++;
       }
      else if (vol === 2) {
         position--;
      }

      if (position >=3){
        position = 0
    }else if (position <0){
        position =2
    }

     text.textContent=title[position]
     img.src = `${ruta}/${title2[position]}/${number[0]}`;

    buttons[3].addEventListener('click', function() { secondChange(2,position); });
    buttons[4].addEventListener('click', function() { secondChange(3,position); });
      
}
function secondChange(vol,cont) {
         
    if (vol === 3) {
        position2++;
         }
    else if (vol === 2) {
           position2--;
    }
  
    if (cont===0) {
        if(position2<0){
            position2=2
        }else if(position2 >=3){
            position2=0
        }
     
        img.src = `${ruta}/${bebidas[position2]}/${number[0]}`;
       
    }else if( cont ===1){

        if(position2<0){
            position2=0
        }else if(position2 >=2){
            position2=1
        }
       
        img.src = `${ruta}/${postres[position2]}/${number[0]}`;
        console.log(position2)
    }

 }   
 function menu(){
    img.style.display='none'
   let div=document.createElement('div')
   div.className='myKing'
   console.log(position)
   console.log(position2)
    for (let index = 0; index < number.length; index++) {
        let icon = document.createElement('img')
        if(position === 0){
            icon.src = `${ruta}/${bebidas[position2]}/${number[index]}`;
        }else if(position === 1){
            icon.src = `${ruta}/${postres[position2]}/${number[index]}`;
    }   else{
         icon.src = `${ruta}/${title[2]}/${number[index]}`
    }
    icon.style.width='70px'
    icon.addEventListener('click', function() { big(icon.src) })
    div.appendChild(icon)
 } 
 img.insertAdjacentElement('afterend',div)
}

function big(selected){
let div=document.getElementsByClassName('myKing')[0]
div.remove()
    img.src = selected
    img.style.display='block'
    text.addEventListener('click',function(){
        img.src= `${ruta}/${title2[position]}/${number[0]}`
    })
}
 img.addEventListener('click',function(){menu();})
buttons[1].addEventListener('click', function() { change(3); });
buttons[0].addEventListener('click', function() { change(2); });
