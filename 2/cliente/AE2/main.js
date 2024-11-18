let arrayImages = []; 
let currentIndex = []; 
let count = 0;
let pag = 0;
let saveFav = JSON.parse(localStorage.getItem("fav")) || [];

const getData = async (start, limit) => {
    arrayImages = [];
    currentIndex = [];
    count = 0;
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        if (response.ok) {
            const jsonResponse = await response.json();
            const promises = jsonResponse['results'].slice(start, limit).map(async (pokemon, index) => {
                let url = pokemon['url'];
                try {
                    let pokemonResponse = await fetch(url);
                    if (pokemonResponse.ok) {
                        let pokemonData = await pokemonResponse.json();
                        let images = [
                            pokemonData['sprites']['front_default'],
                            pokemonData['sprites']['back_default'],
                            pokemonData['sprites']['front_shiny'],
                            pokemonData['sprites']['back_shiny']
                        ];
                        arrayImages[index] = images;
                        currentIndex[index] = 0;
                    }
                } catch (error) {
                    console.log(error);
                }
            });

            await Promise.all(promises);

            arrayImages.forEach((images, index) => {
                if (images) {
                    cards(index, jsonResponse['results'][index]['name']);
                }
            });
        }
    } catch (error) {
        console.log(error);
    }
   
};

let cardOriginal = document.querySelector('.card');
let saveCard = cardOriginal.cloneNode(true);
cardOriginal.remove();

function cards(num, title) {
    let cardDuplicada = saveCard.cloneNode(true);
    document.getElementsByClassName('grid')[0].appendChild(cardDuplicada);

    let photoContainer = document.getElementsByClassName('photo')[num];
    if (photoContainer && arrayImages[num]) {
        photoContainer.style.backgroundImage = `url(${arrayImages[num][0]})`;
    }

    document.getElementsByClassName('card-title')[num].textContent = title;
    let trigger = document.getElementsByClassName('trigger')[num];

    trigger.addEventListener('click', function() { 
        let imgUrl = arrayImages[num][currentIndex[num]];
        big(imgUrl, title); 
    });

    let buttons = document.getElementsByClassName('render-more')[num].getElementsByTagName('button');
    if (buttons.length > 1) {
        buttons[1].addEventListener('click', function() { change(num, 1); });
        buttons[0].addEventListener('click', function() { change(num, -1); });
    }
}

function change(num, direction) {
    currentIndex[num] += direction;

    if (currentIndex[num] < 0) {
        currentIndex[num] = 0; 
    } else if (currentIndex[num] >= arrayImages[num].length) {
        currentIndex[num] = arrayImages[num].length - 1; 
    }

    let photoContainer = document.getElementsByClassName('photo')[num];
    if (photoContainer) {
        photoContainer.style.backgroundImage = `url(${arrayImages[num][currentIndex[num]]})`; 
    }
}

function big(src, name) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.className = 'show-modal'; 
    let tag = document.getElementsByClassName('tag')[0];
    tag.textContent = name;
    tag.addEventListener('click', function() { fav(name, src); });
    
    document.querySelector('.card-header img').src = src; 
    document.getElementsByClassName('close-button')[0].addEventListener('click', function() {
        modal.className = 'modal';
    });
}

let showMore = document.getElementById('render-more').getElementsByTagName('button');
showMore[0].addEventListener('click', function() { show(); });

function show() {
    document.getElementsByClassName('grid')[0].innerHTML = '';
    pag += 21;
    getData(0, pag);
}

function fav(name, src) {
    let tag = document.getElementsByClassName('tag')[0];
    tag.style.backgroundColor='yellow'

    let array = [name, src];
    saveFav.push(array);
    localStorage.setItem("fav", JSON.stringify(saveFav)); 
    console.log(saveFav);
}

function showFav() {
    let modal = document.getElementsByClassName('modal')[1];
    modal.className = 'show-modal'; 
    let form = document.getElementsByTagName('form')[0];

    form.addEventListener('submit', function(event) {
        pokeFav(event);
    });

    document.getElementsByClassName('close-button')[1].addEventListener('click', function() {
        modal.className = 'modal';
    });
}


function pokeFav(event) {
    event.preventDefault();
    let name = document.getElementsByTagName('form')[0].elements['Name'].value;

    console.log(name)
    let posicion = saveFav.findIndex(item => item[0] === name);
    console.log(posicion)

    if (posicion !== -1) {
        let div = document.getElementsByClassName('card-header')[0]
       let img= document.querySelector('.card-header img')
       img.remove()
       let newImage= document.createElement('img')
      
       newImage.src=saveFav[posicion][1]
        div.appendChild(newImage)
        let tag = document.getElementsByClassName('tag')[1];
        tag.textContent = saveFav[posicion][0];
        console.log(document.querySelector('.card-header img'))
    } else {
        console.log(`El nombre ${name} no se encontró en favoritos.`);
    }
}

document.getElementsByClassName('question-link')[0].addEventListener('click', function() { showFav(); });
console.log(saveFav)
getData(0, 3);

