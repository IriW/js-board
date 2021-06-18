const board = document.querySelector('#board')
const colors = ['#F1B24A', '#DADED4', '#a28089', '#39603D', '#A3BCB6']
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#3C403D'
    element.style.boxShadow = `0 0 2px #000000`
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}