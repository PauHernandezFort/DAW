let p = document.getElementsByTagName('h1')[1];

let imagen1 = document.createElement('img');
imagen1.src = 'src/cafe/1.jpg';
let imagen2 = document.createElement('img');
imagen2.src = 'src/infusiones/1.jpg';
let imagen3 = document.createElement('img');
imagen3.src = 'src/alcohol/1.jpg';

let texto1 = document.createElement('p')
texto1.textContent='caffe'
let texto2 = document.createElement('p')
texto2.textContent='alcohol'
let texto3 = document.createElement('p')
texto3.textContent='infusiones'

let tabla = document.createElement('table');
let fila = document.createElement('tr');
let celda1 = document.createElement('td');
let celda2 = document.createElement('td');
let celda3 = document.createElement('td');
let fila2 = document.createElement('tr');
let celda4 = document.createElement('td');
let celda5 = document.createElement('td');
let celda6 = document.createElement('td');

celda1.appendChild(imagen1);
celda2.appendChild(imagen2);
celda3.appendChild(imagen3);


fila.appendChild(celda1);
fila.appendChild(celda2);
fila.appendChild(celda3);

celda4.appendChild(texto1);
celda5.appendChild(texto3);
celda6.appendChild(texto2);


fila2.appendChild(celda4);
fila2.appendChild(celda5);
fila2.appendChild(celda6);

tabla.appendChild(fila);
tabla.appendChild(fila2);


p.insertAdjacentElement("afterend", tabla);
