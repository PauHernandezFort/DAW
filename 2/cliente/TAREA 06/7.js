const getData7 = async (text,numero) => {
    try {
        
        const response = await fetch(`https://api.github.com/search/users?q=${text}`)
        if (response.ok) {
            const jsonResponse = await response.json();  
            console.log(jsonResponse)  
            console.log(jsonResponse.items[numero].avatar_url)
            let imgs = document.createElement('img')
            imgs.src= jsonResponse.items[numero].avatar_url
            form2.insertAdjacentElement('afterend',imgs)
        }
    } catch (error) {
        console.log(error);
    }
}
let form2 = document.getElementsByTagName('form')[1]; 
form2.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let position = document.getElementById('hola2').value
    console.log(position)
    let text =document.getElementById('hola1').value
    getData7(text,position);
});
