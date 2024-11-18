let modal = document.createElement('div');
modal.classList.add('modal'); 

let modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modalContent.innerHTML = `
    <span class="close-button">&times;</span> 
    <form>
        <input type="text" placeholder="Nombre" required>
        <input type="submit" value="Enviar">
    </form>
`;

modal.appendChild(modalContent);
document.body.appendChild(modal);

document.querySelector('h1').addEventListener('click', function () {
    modal.classList.add('show-modal'); 
});

modal.querySelector('.close-button').addEventListener('click', function () {
    modal.classList.remove('show-modal'); 
});

modal.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    const value = this.elements[0].value; 
    
    if (value === 'frutas') {
        frutas(); 
    } else if (value === 'verduras') {
        Verduras(); 
    } else {
        window.alert('El campo está mal, mi rey'); 
    }

    modal.classList.remove('show-modal'); 
});
