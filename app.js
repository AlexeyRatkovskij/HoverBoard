const board = document.querySelector('#board')
const colors = ['#ff00c8', '#ff1fcf', '#ff47d7', '#ff77e2', '#ff96e8']
const SQUARES_NUMBER = 360

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
        const color_i = Math.floor(Math.random() * colors.length)
        square.style.background = colors[color_i]
        square.style.boxShadow = `0 0 2px ${colors[color_i]}, 0 0 10px ${colors[color_i]}`
    })

    square.addEventListener('mouseleave', () => {
        square.style.background = '#555'
        square.style.boxShadow = '0 0 2px #000'
    })
    
    board.appendChild(square)
}
