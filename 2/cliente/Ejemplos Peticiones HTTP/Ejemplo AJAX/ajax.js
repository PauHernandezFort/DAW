const getData = () => {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.thecatapi.com/v1/images/search?size=full';
    xhr.responseType = 'text';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            try {
                let data = JSON.parse(xhr.responseText);
                console.log(data);
            } catch (err) {
                console.log(err.message + " in " + xhr.responseText);
                return;
            }
        }
    }
    xhr.open('GET', url);
    xhr.send();
}

getData();
