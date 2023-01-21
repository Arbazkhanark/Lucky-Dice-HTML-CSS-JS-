let player1=Math.round(Math.random()*6)+1;

// alert(player1);
const PlayerDice1=`img/dice${player1}.png`;
document.querySelectorAll("img")[0].setAttribute('src',PlayerDice1);


let player2=Math.round(Math.random()*6)+1;
const PlayerDice2=`img/dice${player2}.png`
document.querySelectorAll("img")[1].setAttribute('src',PlayerDice2);