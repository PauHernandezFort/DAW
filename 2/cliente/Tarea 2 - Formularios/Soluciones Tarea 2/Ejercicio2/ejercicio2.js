let form = document.getElementsByTagName('form');

function testString(value, num) {
    let attribute = document.getElementsByTagName('input')[num].value;
    if (attribute === '' || !isNaN(attribute)) {
        document.getElementsByTagName('input')[num].value = '';
        return alert(`Por favor, introduce un ${value} correcto.`);
    } else {
        return true;
    }
}

function testEmail() {
    let email = document.getElementsByTagName('input')[3].value;
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
    if (regex.test(email)) {
        return regex.test(email);
    } else {
        document.getElementsByTagName('input')[3].value = '';
        return alert('Por favor, introduce un email correcto');
    }
}

function testForm(event) {
    event.preventDefault();
    
    let strings = ['nombre', 'primer apellido', 'segundo apellido'];
    let test = true;
    for (let i = 0; i < strings.length; i++) {
        let check = testString(strings[i], i);
        if (check === undefined) {
            test = false;
        }
    }

    let email = testEmail();
    if (email !== undefined && test === true) {
        alert('Tus datos se han introducido correctamente');
        form[0].reset();
    }
}

form[0].addEventListener('submit', (event) => testForm(event));