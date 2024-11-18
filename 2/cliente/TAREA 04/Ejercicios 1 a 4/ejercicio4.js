

function change(img){
    console.log(img.src)
    Array.from(photo).map((element) => {
        element.remove();
    });
    let big= document.createElement('img')
    big.src=img.src
    big.style.height='100%'
    big.style.width='100%'
    document.getElementsByClassName("elementor-grid-3")[0].appendChild(big)
    document.getElementsByClassName("elementor-grid-3")[0].className='elementor-grid-1'
    big.addEventListener('click', function() { normal(big); });
    document.getElementsByTagName('section')[0].appendChild(big)
}
function normal(img){
    document.getElementsByClassName("elementor-grid-1")[0].className='elementor-grid-3'
    img.remove()
    start()
}