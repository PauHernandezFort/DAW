const getData5 = async () => {
    try {
        const response = await fetch('https://api.github.com/search/users?q=David')
        if (response.ok) {
            const jsonResponse = await response.json();    
            console.log(jsonResponse)
            console.log(jsonResponse.items[0].avatar_url)
            
            let imgs = document.createElement('img')
            imgs.src= jsonResponse.items[0].avatar_url
            button5.insertAdjacentElement('afterend',imgs)
        }
    } catch (error) {
        console.log(error);
    }
}

let button5 =document.getElementsByName('profiles') [2]
button5.addEventListener('click', getData5) 

