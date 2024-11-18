var url = [
    'http://127.0.0.1:5500/Archivos/src/postres/Flan%20con%20huevo.jpg',
    'http://127.0.0.1:5500/Archivos/src/postres/Flan%20con%20nata.jpg',
    'http://127.0.0.1:5500/Archivos/src/postres/Tarta%20de%20manzana.jpg',
    'http://127.0.0.1:5500/Archivos/src/postres/Tarta%20de%20queso.jpg',
    'http://127.0.0.1:5500/Archivos/src/postres/Tarta%20de%20zanahoria.jpg',
    'http://127.0.0.1:5500/Archivos/src/postres/Tiramisu.jpg'
];

var posicion = 0;
let imgen = document.getElementsByTagName('img')[1];
let texto = document.getElementsByTagName('h2')[0]; 
imgen.addEventListener('mousedown', function() {
    let img = document.getElementsByTagName('img')[1];
for (let index = 0; index < url.length; index++) {
    console.log(url[index])
    if (url[index] == img.src) {
        posicion  = index;
       
    }
    
}
    switch (posicion ) {
        case 0:
            texto.textContent = 'Flan con huevo';
            break;
        case 1:
            texto.textContent = 'Flan con nata';
            break;
        case 2:
            texto.textContent = 'Tarta de manzana';
            break;
        case 3:
            texto.textContent = 'Tarta de queso';
            break;
        case 4:
            texto.textContent = 'Tarta de zanahoria';
            break;
        case 5:
            texto.textContent = 'Tiramisu';
            break;
        default:
            texto.textContent = 'Postre no encontrado';
            break;
    }
});


imgen.addEventListener('mouseup', function() {
    let texto = document.getElementsByTagName('h2')[0]; 
    texto.textContent = 'Postres';  
});
