let photo= document.getElementsByClassName('image')
function opacity(array) {
    Array.from(array).map((element, index) => {
        setTimeout(() => {
            element.style.opacity = '60%';
        }, index * 100);  
    });
    setTimeout(() => {
        reset(array);
    }, array.length * 100); 
}
function reset(array){
    Array.from(array).reverse().map((element, index) => {
        setTimeout(() => {
            element.style.opacity = '100%';
        }, index * 100);  
    });
}




