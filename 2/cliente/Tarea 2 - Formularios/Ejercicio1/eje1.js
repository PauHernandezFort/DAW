let form= document.getElementsByTagName("form")[0]
console.log(form)

function valid(evento){
    evento.preventDefault()
    let name= document.getElementsByTagName('input')[0].value;
    console.log(name)
    let apellido= document.getElementsByTagName('input')[1].value;
    console.log(apellido)
    let apellido2= document.getElementsByTagName('input')[2].value;
    console.log(apellido2)
    let dni= document.getElementsByTagName('input')[3].value;
    console.log(dni)
    validName(name)
    validApellido(apellido)
    validApellido2(apellido2)
    validDni(dni)
    
}

function validDni(dni){
    if(dni== false || dni.length !==8){
        return alert('Por favor el DNI esta mal.');
    }
    else{
    let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
    letra = letters[dni % 23]
    return alert( `tu letra es ${letra}`)
}}
function validName(name){
    if(name == false || !isNaN(name)){
        return alert('el nombre no es correcto')
    }
}

function validApellido(apellido){
    if(apellido == false || !isNaN(apellido)){
        return alert('el apellido no es correcto')
    }
}
function validApellido2(apellido2){
    if(apellido2 == false || !isNaN(apellido2)){
        return alert('el apellido 2 no es correcto')
    }
}
form.addEventListener('submit',(evento)=> valid(evento));
