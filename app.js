let scores = [0, 0];
let roundScore = 0;
let activePlayer = 1;
let dice = Math.floor(Math.random() * 6 + 1);

// Function to roll the dice
function rollDice() {
    // Simulating a dice roll
    dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').src = 'dice-' + dice + '.png';

    if (dice !== 0) {
        updateRoundScore();
    } else {
        switchPlayer();
    }
}

// Function to update round score
function updateRoundScore() {
    roundScore += dice;
    document.querySelector('#roundScore-' + activePlayer).innerHTML = roundScore;
    highlightCurrentPlayer(activePlayer);
}

// Function to switch player when dice is zero
function switchPlayer() {
    roundScore = 0;
    document.querySelector('#roundScore-' + activePlayer).innerHTML = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    highlightCurrentPlayer(activePlayer);
}

// Function to highlight the current player's panel
function highlightCurrentPlayer(player) {
    document.querySelector('.current_score-1').style.background = player === 1 ? '#FFD700' : 'white';
    document.querySelector('.current_score-2').style.background = player === 2 ? '#FFD700' : 'white';
}

// Function to handle hold button click
function holdScore() {
    scores[activePlayer - 1] += roundScore;
    roundScore = 0;
    document.querySelector('#p-score' + activePlayer).innerHTML = scores[activePlayer - 1];

    if (scores[activePlayer - 1] >= 100) {
        endGame();
    } else {
        switchPlayer();
    }
}

// Function to end the game
function endGame() {
    document.querySelector('#panel-' + activePlayer).style.background = "white";
    document.querySelector('#panel-' + activePlayer).style.color = "blue";
    document.querySelector('.btn_roll').style.display = 'none';
    document.querySelector('.btn_hold').style.display = 'none';
}

// Event listeners for roll and hold buttons
document.querySelector(".btn_roll").addEventListener('click', rollDice);
document.querySelector('.btn_hold').addEventListener('click', holdScore);
