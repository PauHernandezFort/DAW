let form = document.getElementsByTagName("form")[0];
console.log(form);

function valid(evento) {
    evento.preventDefault();
    let name = document.getElementsByTagName('input')[0].value;
    let apellido = document.getElementsByTagName('input')[1].value;
    let apellido2 = document.getElementsByTagName('input')[2].value;
    let correo = document.getElementsByTagName('input')[3].value;

    validName(name);
    validApellido(apellido);
    validApellido2(apellido2);
    validCorreo(correo);
    vaciarCampos();
}

function validCorreo(correo) { 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(correo)) {
        return alert("Tu correo no es válido");
    } else {
        alert(`El correo ${correo} es válido.`);
    }
}

function validName(name) {
    if (name == false || !isNaN(name)) {
        return alert('El nombre no es correcto');
    }
}

function validApellido(apellido) {
    if (apellido == false || !isNaN(apellido)) {
        return alert('El apellido no es correcto');
    }
}

function validApellido2(apellido2) {
    if (apellido2 == false || !isNaN(apellido2)) {
        return alert('El apellido 2 no es correcto');
    }
}

function vaciarCampos() {
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
    document.getElementsByTagName('input')[2].value = '';
    document.getElementsByTagName('input')[3].value = '';
}

form.addEventListener('submit', (evento) => valid(evento));
