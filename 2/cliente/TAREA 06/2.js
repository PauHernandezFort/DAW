const getData2 = async () => {
    for (let index = 0; index < 9; index++) {
        
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
        if (response.ok) {
            const jsonResponse = await response.json();
            let img = document.createElement('img')
        
            console.log(jsonResponse[0].url)
            img.src= jsonResponse[0].url
            button2.insertAdjacentElement('afterend',img)
        }
    } catch (error) {
        console.log(error);
    }
}
}
let button2 =document.getElementsByName('cats') [0]
button2.addEventListener('click', getData2) 

