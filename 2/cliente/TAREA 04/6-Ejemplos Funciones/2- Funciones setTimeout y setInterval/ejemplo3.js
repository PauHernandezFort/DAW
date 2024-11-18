let counter = 0;
let interval = setInterval(() => {
    console.log(counter);
    if(counter === 10){
        clearInterval(interval);
    }
    counter++;
}, 500);