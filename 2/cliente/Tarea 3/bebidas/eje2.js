 imagen1.addEventListener('click', () => cambiar(imagen1.src));
imagen2.addEventListener('click', () => cambiar(imagen2.src));
imagen3.addEventListener('click', () => cambiar(imagen3.src));

function cambiar(src) {
    tabla.remove();
    console.log(src);
    let p = document.getElementsByTagName('h1')[1];

    let tabla2 = document.createElement('table');
    let fila = document.createElement('tr');
    tabla2.appendChild(fila);
    
    if (src === 'http://127.0.0.1:5500/Tarea%203/bebidas/src/cafe/1.jpg') {
        for (let index = 1; index <= 5; index++) {
            let celda = document.createElement('td');          
            fila.appendChild(celda);
            let ruta = 'src/cafe/' + index + '.jpg';
            let img = document.createElement('img');
            img.src = ruta;
            celda.appendChild(img);
        }
    } else if (src === 'http://127.0.0.1:5500/Tarea%203/bebidas/src/infusiones/1.jpg') {
        for (let index = 1; index <= 5; index++) {
            let celda = document.createElement('td');          
            fila.appendChild(celda);
            let ruta = 'src/infusiones/' + index + '.jpg';
            let img = document.createElement('img');
            img.src = ruta;
            celda.appendChild(img);
        }
    } else {
        for (let index = 1; index <= 5; index++) {
            let celda = document.createElement('td');          
            fila.appendChild(celda);
            let ruta = 'src/alcohol/' + index + '.jpg';
            let img = document.createElement('img');
            img.src = ruta;
            celda.appendChild(img);
        }
    }

    p.insertAdjacentElement("afterend", tabla2);
    let añadir = document.createElement('img'); 
    tabla2.insertAdjacentElement("afterend",añadir);
    
    tabla2.addEventListener("click", function(event) {
     
            let agrandar = event.target.src;     
            añadir.src = agrandar; 
            añadir.style.width = '50%';  
              
    
    });
}
