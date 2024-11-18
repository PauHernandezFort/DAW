let photos = document.getElementsByClassName('photo');

function start() {
    Array.from(photos).map((element, index) => {
   
        let img = document.createElement('img');
        img.src = 'images/' + (index + 1) + '.jpg';
        img.style.height = '100%';
        img.style.width = '100%';
        img.className = 'image';
        img.addEventListener('click', () => change(img));

        element.appendChild(img);
    });
}