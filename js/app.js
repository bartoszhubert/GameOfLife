document.addEventListener('DOMContentLoaded', function() {
    let board = document.getElementById('board')
    let play = document.getElementById('play')
    let pause = document.getElementById('pause')

    function GameOfLife(boardWidth, boardHeight) {
        this.width = boardWidth
        this.height = boardHeight
        this.board = board
        this.cells = []
        this.indeks = function indeks(x, y) {
            return x + (y * this.width)
        }
        this.createBoard = function createBoard() {
            this.board.style.width = this.width * 10 +'px'
            this.board.style.height = this.height * 10 + 'px'
            this.sumOfDiv = this.width * this.height
            for (let i = 0; i < this.sumOfDiv; i++) {
                let newEle = document.createElement('div')
                newEle.style.width = 10 + 'px'
                newEle.style.height = 10 + 'px'
                this.cells.push(newEle)
                this.board.appendChild(newEle)
            }
            this.cells.forEach( item => {
                item.addEventListener('click', function() {
                    item.classList.toggle('live')
                })
            })
        }
        this.setCellState = function setCellState(x, y, state) {
            if (state === 'live') {
                this.cells[this.indeks(x, y)].classList.add('live')
            } else if (state === 'dead') {
                this.cells[this.indeks(x, y)].classList.remove('live')
            } else {
                return false
            }
        }
        this.firstGlider = function firstGlider() {
            for (let i = 0; i < 200; i++) {
                let x = Math.floor(Math.random() * this.width)
                let y = Math.floor(Math.random() * this.height)
                this.setCellState(x, y, 'live')
            }
        }
        this.computeCellNextState = function computeCellNextState(x, y) {
            this.tempArray = []
            this.cell = this.cells[this.indeks(x, y)]
            for (i = x-1; i < x+2; i++) {
                for (j = y-1; j < y+2; j++) {
                    this.cells[this.indeks(i, j)] && !(i === x && j === y) && this.cells[this.indeks(i, j)].classList.contains('live') && this.tempArray.push(this.indeks(i, j))
                }
            }
            if (this.cell.classList.contains('live') && this.tempArray.length === 3) {
                return 1
            }
            if (this.tempArray.length < 2 || this.tempArray.length > 3) {
                //this.cell.classList.contains('live') && this.cell.classList.remove('live')
                return 0
            } else if (this.tempArray.length === 2 || this.tempArray.length === 3) {
                //!this.cell.classList.contains('live') && this.cell.classList.add('live')
                return 1
            }
        }
        this.computeNextGeneration = function computeNextGeneration() {
            this.nextGenArray = []
            for (let i = 0; i < this.width; i++) {
                for (let j = 0; j < this.height; j++) {
                    this.nextGenArray.push(this.computeCellNextState(j, i))
                }
            }
            return this.nextGenArray
        }
        this.printNextGeneration = function printNextGeneration() {
            this.computeNextGeneration().forEach( (item, indeks) => {
                item ? this.cells[indeks].classList.add('live') : this.cells[indeks].classList.remove('live')
            })
        }
    }

    let gol = new GameOfLife(30, 30)
    gol.createBoard()
    gol.firstGlider()
    let inter = null
    play.addEventListener('click', function() {
        inter = setInterval(() => {
            gol.printNextGeneration()
        }, 1000)
    })
    pause.addEventListener('click', function() {
        clearInterval(inter)
    })
})