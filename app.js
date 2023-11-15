import Minefield from './src/minefield.js'

document.addEventListener('DOMContentLoaded', () => {
    const minefield = new Minefield(10);
    minefield.initializeMines();
    minefield.drawBoard();
})