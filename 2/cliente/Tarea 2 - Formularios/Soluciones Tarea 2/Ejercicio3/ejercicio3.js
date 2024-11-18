let form = document.getElementsByTagName('form');

function testWord(value, num) {
    let attribute = document.getElementsByTagName('input')[num].value;
    if (attribute === '' || !isNaN(attribute)) {
        document.getElementsByTagName('input')[num].value = '';
        return alert(`Por favor, introduce un ${value} correcto.`);
    } else {
        return attribute;
    }
}

function testYear() {
    let year = document.getElementsByTagName('input')[2].value;
    if (year === '' || isNaN(year) || year.length !== 4) {
        document.getElementsByTagName('input')[2].value = '';
        return alert('Por favor, introduce un año correcto.');
    } else {
        return year;
    }
}

function getNumberOfFilms() {
    let frequencies = ['frequency-low', 'frequency-normal', 'frequency-high'];
    for (let i = 0; i < frequencies.length; i++) {
        if (document.getElementById(frequencies[i]).checked) {
            return document.getElementsByTagName('label')[i].innerHTML;
        }
    }
}

function testRobot() {
    if (document.getElementsByName('human')[0].checked) {
        return true;
    } else {
        return false;
    }
}

function getText() {
    if (document.getElementById('message').value !== '') {
        return document.getElementById('message').value;
    } else {
        return alert('Por favor introduce tú reseña');
    }

}

function getQualification() {
    let mark = document.getElementById('category').value;
    for (let i = 0; i < 8; i++) {
        if (document.getElementsByTagName('option')[i].value === mark) {
            return document.getElementsByTagName('option')[i].innerHTML;
        }
    }
}

function testForm(event) {
    event.preventDefault();
    let nickname = testWord('nickname', 'nickname', 0);
    let film = testWord('film', 'film', 1);
    let director = testWord('director', 'director', 3);
    let year = testYear();
    let films = getNumberOfFilms();
    let human = testRobot();
    let text = getText();
    let qualification = getQualification();
    
    if (nickname !== undefined
        && film !== undefined
        && director !== undefined
        && year !== undefined
        && text !== undefined
        && qualification !== '- Calificación -'
        && human === true) {
        document.getElementsByTagName('p')[1].innerHTML = `El usuario ${nickname} que ve ${films} películas a la semana, ha visto el film ${film} (${director}, ${year}) piensa que "${qualification}" y añade "${text}"`;
    } 
}


form[0].addEventListener('submit', (event) => testForm(event));


