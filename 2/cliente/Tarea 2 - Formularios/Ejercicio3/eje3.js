let form = document.getElementsByTagName("form")[0];

function valid(evento) {
    evento.preventDefault();
    
    let name = document.getElementsByTagName('input')[0].value.trim();
    let peli = document.getElementsByTagName('input')[1].value.trim();
    let año = document.getElementsByTagName('input')[2].value.trim();
    let director = document.getElementsByTagName('input')[3].value.trim();
    let cali = document.getElementsByTagName('input')[4].value.trim();
    let numPelis = document.getElementsByTagName('input')[5].value.trim();
    let rese = document.getElementsByTagName('input')[6].value.trim();
    let robot = document.getElementsByTagName('input')[7].value.trim();

    let com = [];
    com[0] = validName(name);
    com[1] = validPeli(peli);
    com[2] = validAño(año);
    com[3] = validDirector(director);
    com[4] = validCali(cali);
    com[5] = validNumpelis(numPelis);
    com[6] = validRese(rese);
    com[7] = validRobot(robot);
    
    comprobar(com, name, peli, año, director, cali, numPelis, rese);
}

function validName(name) {
    return name !== "" && isNaN(name);
}

function validPeli(peli) {
    return peli !== "" && isNaN(peli);
}

function validDirector(dire) {
    return dire !== "" && isNaN(dire);
}

function validAño(año) {
    return año !== "" && !isNaN(año) && año.length === 4;
}

function validCali(cal) {
    return cal !== "";
}

function validNumpelis(np) {
    return np !== "";
}

function validRese(res) {
    return res !== "";
}

function validRobot(rob) {
    return rob !== "";
}

function comprobar(array, name, peli, año, director, cali, numPelis, rese) {
    for (let index = 0; index < array.length; index++) {
        if (!array[index]) {
            alert(`Algún campo está mal, campo con índice: ${index}`);
            return;
        }
    }
    
    let parrafo = document.getElementsByTagName('p')[1];
    parrafo.textContent = `El usuario ${name} ha visto la película ${peli} del año ${año} y del director ${director}, le ha dado una calificación de ${cali} y ve ${numPelis} a la semana. Su reseña es: ${rese}`;
}

form.addEventListener('submit', (evento) => valid(evento));
