import Tile from "./tile.js";

class Minefield {

    constructor(size) {
        this.size = size;
        this.board = Array.from({ length: size }, () => Array.from({ length: size }, () => new Tile))
        this.remainingGuesses = 10;
        this.lives = 3;
    }

    drawBoard() {
        const boardContainer = document.getElementById('board')
        boardContainer.innerHTML = '' // reset the board before each render

        for (let i = 0; i < this.size; i++) {
            let row = document.createElement('div');
            // row.id = `row ${i}`;
            row.className = 'row';
            for (let j = 0; j < this.board[0].length; j++) {
                let realTile = this.board[i][j]
                let divTile = document.createElement('div');
                divTile.addEventListener('click', (event) => this.handleTileClick(event, i, j));

                if (realTile.discovered) {
                    if (realTile.isMine) {
                        divTile.id = realTile.id;
                    } else {
                        divTile.id = realTile.id;
                    }
                } else {
                    divTile.id = realTile.id;
                }

                // tile.id = `row ${i}, col ${j}`
                divTile.className = `tile`
                row.appendChild(divTile)

            }
            boardContainer.appendChild(row);
        }
    }

    initializeMines() {

        for (let i = 0; i < this.size; i++) {
            const randomRow = Math.floor(Math.random() * this.size);
            const randomCol = Math.floor(Math.random() * this.size);
            // console.log(randomRow, randomCol)
            const selectedTile = this.board[randomRow][randomCol];
            selectedTile.makeMine();
            console.log(selectedTile)
        }
    }

    handleTileClick(event, row, col) {
        const clickedTile = this.board[row][col];
        clickedTile.discover();
        if (clickedTile.isMine) {
            this.lives -= 1;
        } else {
            this.remainingGuesses -= 1;
        }
        this.drawBoard();
        this.checkWin();

        // console.log(`Clicked tile at row ${row}, column ${col}`)
        // console.log(clickedTile)
    }

    checkWin() {
        console.log('checking guesses')
        if (!this.remainingGuesses) {
            console.log("you've won")
        }
        console.log('checking lives')
        if (!this.lives) {

            console.log("you've lost")
        }
    }

}

export default Minefield;