const getData8 = async () => {
    try {
        let key = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb2NwYXVmb3J0QGdtYWlsLmNvbSIsImp0aSI6ImU2ZmU2NjNiLWM4MTUtNDkxYy05ZTY4LTg0YTQyZjc0MTE2NyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzI5NjcwNTc3LCJ1c2VySWQiOiJlNmZlNjYzYi1jODE1LTQ5MWMtOWU2OC04NGE0MmY3NDExNjciLCJyb2xlIjoiIn0.tzn7UNEqxvypaiK-QiFcC_vuairU6eu7gcCqCo0A3lM';
        
        const urlDatos = 'https://opendata.aemet.es/opendata/sh/bb360b1b';
        const urlMetadatos = 'https://opendata.aemet.es/opendata/sh/b3aa9d28';
        
        const response = await fetch(`${urlDatos}?api_key=${key}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            jsonResponse.forEach(element => {
                let text = document.createElement('div');
                text.innerHTML = `
                    <h3>Fecha: ${element['fecha']}</h3>
                    <h3>Altitud: ${element['altitud']}m</h3>
                    <h3>Nombre: ${element['nombre']}</h3>
                    <h3>Temp. Máxima: ${element['tmax']}°C</h3>
                    <h3>Horas de Sol: ${element['sol']}</h3>
                    <h3>Temp. Mínima: ${element['tmin']}°C</h3>
                `;
                document.getElementsByTagName('u')[0].insertAdjacentElement('afterend', text);
            });
        } else {
            console.error('Error en la respuesta de la API');
        }
    } catch (error) {
        console.log(error);
    }
}

getData8();
