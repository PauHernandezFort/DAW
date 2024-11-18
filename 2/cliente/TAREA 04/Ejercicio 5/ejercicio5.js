let imgs = document.getElementsByClassName('photo'); 

Array.from(imgs).map((element, index) => {
    element.style.backgroundImage = `url('./images/${index +1}.jpg')`; 
});


function primer() {

    let imgs = document.getElementsByClassName('photo');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.height = '0px';
        imgs[i].style.transition = '2s';
    }

    let containers = document.getElementsByClassName('photo-container');
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.height = '600px';
        containers[i].style.transition = '2s'; 
    }

    
    let photos = document.getElementsByClassName('photo');
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.color = 'white';
         photos[i].style.transition = '2s';
    }

    let headers = document.getElementsByTagName('h1');
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'black';
        headers[i].style.transition = '2s'; 
    }
}
function second() {

    let imgs = document.getElementsByClassName('photo');
    console.log(imgs.length);
    imgs[0].style.height = '200px';
    imgs[1].style.height='400px'
    imgs[2].style.height='600px'

    let text = document.getElementsByClassName('photo');
    text[0].style.lineHeight = '150px';
    text[1].style.lineHeight = '300px'; 
    text[2].style.lineHeight = '400px'; 
    

    let containers = document.getElementsByClassName('photo-container');
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.height = '200px';
        containers[i].style.backgroundColor = 'black';
    }

    
    let photos = document.getElementsByClassName('photo');
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.color = 'black';
        
    }

    let headers = document.getElementsByTagName('h1');
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.color = 'white';
    }
}
function background(){
   let color= document.body.style.backgroundColor
   if (color == 'white'){
    document.body.style.backgroundColor='black'
   }else{
    document.body.style.backgroundColor='white'
   }
}
function alternarFunciones() {
    let isPrimer = true;
    setInterval(() => {
        if (isPrimer) {
            primer();
        } else {
            second();
        }
        background();
        isPrimer = !isPrimer; 
    }, 5000); 
}

primer();
alternarFunciones();
