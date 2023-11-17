import Minefield from './src/minefield.js';

document.addEventListener('DOMContentLoaded', () => {
    let minefield = new Minefield(10);
    minefield.initializeMines();
    minefield.drawBoard();

    function resetGame() {
        minefield = null;
        minefield = new Minefield(10);
        minefield.initializeMines();
        minefield.drawBoard();
        updateRemainingGuesses(10);
        updateLives(3);
    }

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetGame);

    function updateRemainingGuesses(guesses) {
        const remainingGuessesElement = document.querySelector('.left-panel h2:nth-child(2)');
        remainingGuessesElement.textContent = `Remaining Guesses: ${guesses}`;
    }

    function updateLives(lives) {
        const livesElement = document.querySelector('.left-panel h2:nth-child(3)');
        livesElement.textContent = `Lives: ${lives}`;
    }

    // Initial display update
    updateRemainingGuesses(10);
    updateLives(3);
});