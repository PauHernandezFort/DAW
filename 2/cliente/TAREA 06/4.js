const getData4 = async () => {
    try {
        const response = await fetch('https://api.github.com/search/users?q=PauHernandezFort')
        if (response.ok) {
            const jsonResponse = await response.json();    
            console.log(jsonResponse)
            console.log(jsonResponse.items[0].avatar_url)
            
            let imgs = document.createElement('img')
            imgs.src= jsonResponse.items[0].avatar_url
            button4.insertAdjacentElement('afterend',imgs)
        }
    } catch (error) {
        console.log(error);
    }
}

let button4 =document.getElementsByName('profiles') [1]
button4.addEventListener('click', getData4) 

