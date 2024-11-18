let postres = ["src/postres/Flan con huevo.jpg", "src/postres/Flan con nata.jpg", "src/postres/Tarta de manzana.jpg", "src/postres/Tarta de queso.jpg", "src/postres/Tarta de zanahoria.jpg", "src/postres/Tiramisu.jpg"];
let posicion = 0;

let imagen=  document.getElementsByTagName('img')[1];

document.getElementById('anterior').addEventListener('click', function() {
    console.log('hola')

    posicion -= 1;
    if (posicion < 0) {
        posicion = 0;
    }
    imagen.src = postres[posicion]
    console.log(posicion);

})

document.getElementById('siguiente').addEventListener('click', function() {
    console.log('hola')

    posicion += 1;
    if (posicion > 5) {
        posicion = 5;
    }
   let imagen=  document.getElementsByTagName('img')[1];
   imagen.src = postres[posicion]
    console.log(posicion);
});


