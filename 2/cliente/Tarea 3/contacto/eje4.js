
let div1 = document.createElement('div');
let div = document.getElementsByClassName('header')[0];
let form = document.createElement('form');
div.insertAdjacentElement("afterend", form);
form.appendChild(div1);

let div2 = document.createElement('div');
form.appendChild(div2);

let input1 = document.createElement('input');
input1.type = 'text';
input1.placeholder = 'nombre';

let input2 = document.createElement('input');
input2.type = 'text';
input2.placeholder = 'apellido';

let input3 = document.createElement('input');
input3.type = 'text';
input3.placeholder = 'segundo apellido';

let input4 = document.createElement('input');
input4.type = 'number';
input4.placeholder = 'telefono';

let boton = document.createElement('input');
boton.type = 'submit';
boton.value = 'enviar';


div1.appendChild(input1);
div1.appendChild(input2);

div2.appendChild(input3);
div2.appendChild(input4);

form.appendChild(boton);


input1.classList.add('input');
input2.classList.add('input');
input3.classList.add('input');
input4.classList.add('input');
boton.classList.add('send'); 


function valid(evento) {
    evento.preventDefault();
    let name = input1.value.trim();
    let apellido = input2.value.trim();
    let apellido2 = input3.value.trim();
    let numero = input4.value.trim();

    if (name === "" || !isNaN(name)) {
        return alert('El nombre no es correcto');
    } 
    if (apellido === "" || !isNaN(apellido)) {
        return alert('El apellido no es correcto');
    } 
    if (apellido2 === "" || !isNaN(apellido2)) {
        return alert('El segundo apellido no es correcto');
    } 
    if (numero === "" || isNaN(numero) || numero.length !==9) {
        return alert('El número no es correcto');
    }

    alert('todo bien mi rey :)');
}


form.addEventListener('submit', valid);
