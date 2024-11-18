document.addEventListener("mouseover", function(event) {
    let foto = event.target;
    if (foto.tagName === 'IMG') {
        foto.style.opacity = 0.5;
    }
});

document.addEventListener("mouseout", function(event) {
    let foto = event.target;
    if (foto.tagName === 'IMG') {
        foto.style.opacity = 1;
    }
});

document.addEventListener("click", function(event) {
    let elegida = event.target;
    links(elegida);
});

let bocadillos = ["Chivito", "Blanco y Negro", "Brascada", "Almussafes", "Tortilla de patatas", "Calamares en alioli"];
let ids = ["modal1", "modal2", "modal3", "modal4", "modal5", "modal6"];

function links(foto) {
    let modal = document.getElementsByClassName('modal')[0];
    if (foto.tagName === 'IMG') {
        let id = foto.id;
        let posicion;
        for (let index = 0; index < ids.length; index++) {
            if (ids[index] === id) {
                posicion = index;
                break;
            }
        }
        let h1 = document.querySelector('.modal .modal-content h1');
        h1.textContent = bocadillos[posicion];

        modal.className = 'modal show-modal';

       

        let enlace = document.createElement('a');
        switch (posicion) {
            case 0:
                enlace.href = "https://elpais.com/gastronomia/recetas/2021/07/06/receta/1625572040_373287.html";
                break;
            case 1:
                enlace.href = "https://www.bonviveur.es/recetas/bocadillo-blanco-y-negro-longanizas-y-morcillas";
                break;
            case 2:
                enlace.href = "https://www.directoalpaladar.com/recetas-de-panes/bocadillos-clasicos-la-brascada";
                break;
            case 3:
                enlace.href = "https://www.bonviveur.es/recetas/bocadillo-almussafes";
                break;
            case 4:
                enlace.href = "https://cookpad.com/es/buscar/bocadillo%20de%20tortilla%20de%20patatas";
                break;
            case 5:
                enlace.href = "https://www.lecturas.com/recetas/bocadillo-calamares-alioli-ajo-asado_1086.html";
                break;
            default:
                break;
        }
        enlace.textContent = "link";
        let content = document.querySelector('.modal-content');
        content.appendChild(enlace);
    }

    document.getElementsByClassName('close-button')[0].addEventListener('click', function () {
        modal.className = 'modal';
        let existingLink = document.querySelector('.modal-content a');
        if (existingLink) {
            existingLink.remove();
        }
    });
}
