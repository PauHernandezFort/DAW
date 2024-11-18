var url=['src/postres/Flan con huevo.jpg','src/postres/Flan con nata.jpg','src/postres/Tarta de manzana.jpg','src/postres/Tarta de queso.jpg','src/postres/Tarta de zanahoria.jpg','src/postres/Tiramisu.jpg']
 var num =0
 add()
let bottonNext = document.getElementById('siguiente')
let bottonBack = document.getElementById('anterior')
bottonNext.addEventListener('click', next)
bottonBack.addEventListener('click', back)

function add(){
    let img=document.getElementsByTagName('img')[1]
    img.src=url[num]
   
}
function next(){
   
    num ++
    if(num > url.length -1) {
        num =0
    }
    add()
}
function back(){
    num --
    if(num < 0){
        num = url.length -1
    }
    add()
}
