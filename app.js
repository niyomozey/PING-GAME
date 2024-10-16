var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6 + 1);



document.querySelector(".btn_roll").addEventListener('click', function () {
    dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice').src = 'dice-' + dice + '.png'
    if (dice != 1) {
        console.log(dice);
        roundScore = roundScore + dice;
        console.log(roundScore);
        document.querySelector('#roundScore-' + activePlayer).innerHTML = roundScore;
    } else {
        roundScore = 0;
        document.querySelector('#roundScore-' + activePlayer).innerHTML = 0;
        if (activePlayer == 1) {
            activePlayer = 2
        } else {
            activePlayer = 1
        }
    }

});
document.querySelector('.btn_hold').addEventListener('click', function () {
    scores[activePlayer - 1] += roundScore;
    roundScore = 0;
    document.querySelector('#p-score' + activePlayer).innerHTML = scores[activePlayer - 1]
    if (scores[activePlayer - 1] >= 100) {
        document.querySelector('#panel-' + activePlayer).style.background = "white";
        document.querySelector('#panel-' + activePlayer).style.color = "blue";
        // Disable buttons until new game started
        document.querySelector('.btn_roll').style.display = 'none';
        document.querySelector('.btn_hold').style.display = 'none';
    } else {
        document.querySelector('#roundScore-' + activePlayer).innerHTML = 0;
        // Change the score board of the current player
        document.querySelector('.current_score-' + activePlayer).style.boarder = 'solid 1px #FFD700';
        if (activePlayer == 1) {
            activePlayer = 2
        } else {
            activePlayer = 1
        }
    }
});