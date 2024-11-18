
window.load(start(),load(photo))
function big(array) {
    Array.from(array).map((element, index) => {
        element.style.height='105%'
        element.style.opacity='50%'  
    });
    setTimeout(() => {
        small(array);
    }, 300); 
}
function small(array){
    Array.from(array).reverse().map((element, index) => {
        element.style.height='100%'
        element.style.opacity='100%'  
    });
}

function load(array){
opacity(array)
    setTimeout(()=>{
        opacity(array);
    },array.length*100 +1800)
    setTimeout(()=>{
        big(array);
    },4000)
    setTimeout(()=>{
        big(array);
    },4400)
}


