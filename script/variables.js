//New game button
const startGame = document.querySelector("#StartGame");
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");
// scrore round player
let roundScore1 = document.getElementById("RoundScore1");
let roundScore2 = document.getElementById("RoundScore2");
//CurrentScore

let currentScoreP2 = document.getElementById("CurrentScorePlayer2");
//roll Dice button
const rollDice = document.querySelector("#rollDice");
// Hold button
const hold = document.querySelector("#hold");

// Dice pictures
const img = document.querySelector(".dicePictures");

//variables games

let activeplayer;
let currentScore = 0;
let RoundScore = 0;


class Player {
  constructor() {
    this.currentScore = 0;
    this.roundScore = 0;
    this.activePlayer = false;
  }
}
//INIT SCORES
let initScore = () => {
  player1 = (0, 0);
  player2 = (0, 0);
};
// RANDOM PLAYERS STARTS
let randomStartPlayer = () => {
  let nb = Math.floor(Math.random() * 2) + 1;

  alert(`Player ${nb} start the game`);
  if (nb === 1) {
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
  } else {
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
  }
};

startGame.addEventListener("click", () => {
  initScore();
  randomStartPlayer();
  nextPlayer();
});
let nextPlayer = () => {
  if (player1.activePlayer === true) {
    player1.activePlayer === false;
    player2.activePlayer === true;
  } else {
    player2.activePlayer === false;
    player1.activePlayer === true;
  }
};

let imgDisplay = (nb) => (img.src = `./assets/images/dice-${nb}.png`);

rollDice.addEventListener("click", () => {
  let rand = Math.floor(Math.random() * 6) + 1;
  imgDisplay(rand);
  let currentScoreP1 = document.getElementById("CurrentScorePlayer1");
});

let currentP1 = () => {
  let currentScoreP1 = document.getElementById("CurrentScorePlayer1");
  console.log(currentScoreP1);
};
let currentP2 = () => {};

let player1 = new Player(0, 0, false);
let player2 = new Player(0, 0, false);
