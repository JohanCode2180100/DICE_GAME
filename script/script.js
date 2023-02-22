//New game button
const startGame = document.querySelector("#StartGame");
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");
// scrore round player

//roll Dice button
const rollDice = document.querySelector("#rollDice");
// Hold button
const hold = document.querySelector("#hold");

// Dice pictures
const img = document.querySelector(".dicePictures");

//variables games
let RoundScore, activePlayer, gamePlaying;

initGame();

let Player1 = {
  currentScore: 26,
  roundScore: 10,
};
let Player2 = {
  currentScore: 25,
  roundScore: 10,
};
let imgDisplay = (rand) => (img.src = `./assets/images/dice-${rand}.png`);
let RollTheDice = () => {
  let rand = Math.floor(Math.random() * 6) + 1;

  imgDisplay(rand);

  let nextPlayer = () => {
    if (activePlayer === 1) {
      this.Player1.currentScore = 0;
      this.Player1.currentScore.textContent = 0;
      this.activePlayer === player2;
      this.active2.style.visibility = "visible";
      this.active1.style.visibility = "hidden";
    } else {
      this.activePlayer === 2;
      this.Player2.currentScore = 0;
      this.Player2.currentScore.textContent = 0;
      this.active1.style.visibility = "visible";
      this.active2.style.visibility = "hidden";
    }
  };

  if (rand !== 1) {
    activePlayer.currentScore += rand;
    document.getElementById("CurrentScore" + activePlayer).textContent =
      roundScore;
    activePlayer.currentScore.textContent = currentScore;
  } else {
    nextPlayer();
  }
};
let holdToRound = () => {
  // roundScore = currentScore += roundScore;
  // currentScore = 0;
  // activePlayer.roundScore.textContent = roundScore;
  // nextPlayer();
};

//functions

let startNewGame = () => {
  let nb = Math.floor(Math.random() * 2) + 1;
  alert(`Player ${nb} start the game`);

  if (nb === 1) {
    activePlayer === Player1;
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
  } else {
    activePlayer === Player2;
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
  }
};



rollDice.addEventListener("click", () => RollTheDice());
hold.addEventListener("click", () => holdToRound());

document.getElementById("CurrentScorePlayer1").textContent =
  Player1.currentScore;
document.getElementById("CurrentScorePlayer2").textContent =
  Player2.currentScore;
document.getElementById("RoundScore1").textContent = Player1.roundScore;
document.getElementById("RoundScore2").textContent = Player2.roundScore;

let initGame = () => {
  //init the score for a new game
  img.style.display = "none";
  document.getElementById("CurrentScorePlayer1").textContent = 0;
  document.getElementById("CurrentScorePlayer2").textContent = 0;
  document.getElementById("RoundScore1").textContent = 0;
  document.getElementById("RoundScore2").textContent = 0;
  gamePlaying = true;
};

startGame.addEventListener("click", () => initGame());
