const getData3 = async () => {
    try {
        const response = await fetch('https://api.github.com/search/users?q=PauHernandezFort')
        if (response.ok) {
            const jsonResponse = await response.json();    
            console.log(jsonResponse)
            console.log(jsonResponse.items[0].avatar_url)
        }
    } catch (error) {
        console.log(error);
    }
}

let button3 =document.getElementsByName('profiles') [0]
button3.addEventListener('click', getData3) 

