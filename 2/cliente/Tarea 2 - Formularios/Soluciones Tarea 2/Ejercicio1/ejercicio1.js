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

function testDni() {
    let dni = document.getElementsByTagName('input')[3].value;
    if (dni === '' || isNaN(dni) || dni.length !== 8) {
        document.getElementsByTagName('input')[3].value = '';
        return alert('Por favor, introduce un DNI correcto.');
    } else {
        let letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
        return letters[dni % 23]
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
    
    let dni = testDni();
    if (dni !== undefined && test === true) {
        alert(`Tu letra del DNI es ${dni}`);
        form[0].reset();
    }
}


form[0].addEventListener('submit', (event) => testForm(event));