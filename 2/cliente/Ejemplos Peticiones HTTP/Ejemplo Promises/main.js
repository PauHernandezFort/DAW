const promise = new Promise((resolve, reject) => {
    resolve('resuelta');
    reject('rechazada');
});

promise.then(result => {
    console.log(result);
});

