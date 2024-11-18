document.addEventListener("click", function(){
    primero()
    segundo()
    tercero()
    quarto()
})

function primero(){
let parrafo = document.getElementsByTagName('p')[0]
parrafo.style.color = "red"
parrafo.style.fontWeight="bold"
parrafo.style.fontSize ="20px"
parrafo.style.fontFamily="monospace"
}
function segundo(){
let parrafo2 = document.getElementsByTagName('p')[1]
parrafo2.style.fontFamily="monospace"
parrafo2.style.color = "yellow"
parrafo2.style.fontSize ="30px"
parrafo2.style.fontWeight="bold"
}

function tercero(){
    let parrafo3 = document.getElementsByTagName('p')[2]
    parrafo3.style.fontFamily="monospace"
    parrafo3.style.color = "blue"
    parrafo3.style.fontSize ="40px"
    parrafo3.style.fontWeight="bold"
    }

    function quarto(){
        let parrafo4 = document.getElementsByTagName('p')[3]
        parrafo4.style.fontFamily="monospace"
        parrafo4.style.color = "green"
        parrafo4.style.fontSize ="50px"
        parrafo4.style.fontWeight="bold"
        }
    
