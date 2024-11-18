let myArray = [
    { name: 'John', surname: 'Doe'},
    { name: 'Peter', surname: 'Collins'},
    { name: 'Susan', surname: 'Black'}
];

myArray.map(element => {
    console.log(`Nombre: ${element.name} / Apellido: ${element.surname}`);
});
