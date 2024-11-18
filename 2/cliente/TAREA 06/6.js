const getData6 = async (numero) => {
    try {
        const response = await fetch('https://api.github.com/search/users?q=David')
        if (response.ok) {
            const jsonResponse = await response.json();    
            console.log(jsonResponse.items[numero].avatar_url)
            let imgs = document.createElement('img')
            imgs.src= jsonResponse.items[numero].avatar_url
            form.insertAdjacentElement('afterend',imgs)
        }
    } catch (error) {
        console.log(error);
    }
}
let form = document.getElementById('form'); 
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let position = document.getElementById('hola').value
    console.log(position)
    getData6(position);
});
