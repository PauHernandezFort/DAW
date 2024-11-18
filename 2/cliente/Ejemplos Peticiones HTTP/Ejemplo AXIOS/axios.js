const getData = async () => {
    try {
        let response = await axios.get('https://api.thecatapi.com/v1/images/search?size=full'); 
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

getData();
