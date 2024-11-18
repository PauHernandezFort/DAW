const getData = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=full');
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
        }
    }
    catch (error) {
        console.log(error);
    }
}

getData();