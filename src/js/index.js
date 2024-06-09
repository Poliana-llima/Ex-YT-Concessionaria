let prevBotao = document.getElementById('prev');
let nextBotao = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.lista .item');
let indicador = document.querySelector('.indicadores');
let dots = indicador.querySelectorAll('ul li');

let active = 0
let firstPosition = 0
let lastPosition = items.length -1

nextBotao.onclick = () => {
    let itemOld = container.querySelector('.lista .item.active')

    itemOld.classList.remove('active')

    active = active + 1 > lastPosition ? 0 : active + 1

    items[active].classList.add('active')

    let dotsOld = indicador.querySelector(' ul li.active')

    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicador.querySelector('.numeros').innerHTML = '0' + (active + 1)

}

prevBotao.onclick = () => {
    let itemOld = container.querySelector('.lista .item.active')

    itemOld.classList.remove('active')

    active = active - 1 < firstPosition ? lastPosition : active - 1

    items[active].classList.add('active')

    let dotsOld = indicador.querySelector(' ul li.active')
    
    dotsOld.classList.remove('active')

    dots[active].classList.add('active')

    indicador.querySelector('.numeros').innerHTML = '0' + (active + 1)
}

