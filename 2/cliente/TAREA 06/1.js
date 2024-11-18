const getData = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
        if (response.ok) {
            const jsonResponse = await response.json();
            let img = document.createElement('img')
        
            console.log(jsonResponse[0].url)
            img.src= jsonResponse[0].url
            button.insertAdjacentElement('afterend',img)
        }
    } catch (error) {
        console.log(error);
    }
}

let button =document.getElementsByName('cat') [0]
button.addEventListener('click', getData) 

