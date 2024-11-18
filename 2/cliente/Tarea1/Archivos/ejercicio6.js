let imagenes = document.getElementsByTagName('img')
window.addEventListener("load", ocultar)
window.addEventListener("dblclick", click)
let contador = 0
function ocultar(){
    for (let index = 0; index < imagenes.length; index++) {
        imagenes[index].style.display = "none";
    }
 
}
function mostrar(){
    for (let index = 0; index < imagenes.length; index++) {
        imagenes[index].style.display = "block";
    }
}

function click(){
 contador +=1
if(contador %2 == 0){
    ocultar()
}else{
    mostrar()
}

}