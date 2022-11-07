document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const startButton = document.querySelector('#dtart-button')
  const width = 10

  //The Tetrominoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]


  let currentPostition = 0
  let currentRotation = 0

  //randomly selecy a Tetromino and its first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length)
  let current = theTetrominoes[random][currentRotation]

  //draw the tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPostition + index].classList.add('tetromino')
    })
  }

  //undraw the tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPostition + index].classList.remove('tetromino')
    })
  }

  //make the tetromino move down every second

  timerId = setInterval(moveDown, 1000)

  function moveDown() {
    undraw()
    currentPostition += width
    draw()
    freeze()
  }

  //freeze 
  function freeze() {
    if (current.some(index => squares[currentPostition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPostition + index].classList.add('taken'))
      //start a new tetromino falling
      random = Mah.floor(Math.random() * theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPostition = 4
      draw()
    }
  }
})

// a function is a block of code, define it with a name and execute it!

// function showAlert(firstName) {
//   alert(firstName + 'You have been alerted')
// }
// showAlert('jason')