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
    if(scores[activePlayer-1]>=100){
        document.querySelector('#panel-'+activePlayer).style.background="white";
        document.querySelector('#panel-'+activePlayer).style.color="blue";
    }else{        
    document.querySelector('#p-score' + activePlayer).innerHTML = scores[activePlayer - 1]
    document.querySelector('#roundScore-' + activePlayer).innerHTML = 0;
    if (activePlayer == 1) {
        activePlayer = 2
    } else {
        activePlayer = 1
    }
}
});