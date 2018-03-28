/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScore, roundScore, activePlayer, dice, x;

globalScore=[0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';

 function newplayer(){
        globalScore[activePlayer] += roundScore
        document.querySelector('#score-'+activePlayer).textContent = globalScore[activePlayer];
        document.querySelector('#current-' + activePlayer).textContent = '0';
       if (activePlayer == 0){
           activePlayer =1;
           roundScore = 0;
           document.querySelector('#current-' + activePlayer).textContent = '0';
       } else{
           activePlayer = 0;
           roundScore = 0;
           document.querySelector('#current-' + activePlayer).textContent = '0';
       }
     if (globalScore[activePlayer]>=100){
    document.querySelector('#name-'+activePlayer).textContent = 'Winner!!!'
} else{
    newplayer();
}
    };



document.querySelector('.btn-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').style.display='block';
    document.querySelector('.dice').src = 'dice-'+dice+'.png';
 
    if (dice !==1){
        roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
       newplayer();
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display='none';
    }
   
//    document.querySelector('#current-' + activePlayer).textContent = roundScore;
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    newplayer();
});