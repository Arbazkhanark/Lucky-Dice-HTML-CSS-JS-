let player1=Math.round(Math.random()*6)+1;

// alert(player1);

const firstDice=`img/dice${player1}.png`;

document.querySelectorAll("img")[0].setAttribute('src',firstDice);