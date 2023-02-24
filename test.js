//New game button
const startGame = document.querySelector("#startGame");
const active1 = document.querySelector(".active1");
const active2 = document.querySelector(".active2");
// scrore round player

//roll Dice button
const rollDice = document.querySelector("#rollDice");
// Hold button
const hold = document.querySelector("#hold");

// Dice pictures
const img = document.querySelector(".dicePictures");

//Players DOM
let currentScore_player1 = document.getElementById("currentScorePlayer1");
let currentScore_player2 = document.getElementById("currentScorePlayer2");
let roundScore_player1 = document.querySelector("#roundScore1");
let roundScore_player2 = document.querySelector("#roundScore2");

let currentScore,
  roundScore = 0;

let Gaming = false;

let player1 = {
  currentScore: currentScore_player1,
  roundScore: roundScore_player1,
  victory: false,
};
let player2 = {
  currentScore: currentScore_player2,
  roundScore: roundScore_player2,
  victory: false,
};
let activePlayer = player1;

const newGame = () => {
  // let nb = Math.floor(Math.random() * 2) + 1;

  // alert(`Player${nb} start the game`);
  console.log(activePlayer); //check
  if (nb === 1) {
    active1.style.visibility = "visible";
    active2.style.visibility = "hidden";
  } else {
    active2.style.visibility = "visible";
    active1.style.visibility = "hidden";
  }
  Gaming = true;
  currentScore_player1.textContent = 0;
  currentScore_player2.textContent = 0;
  roundScore_player1 = 0;
  roundScore_player2.textContent = 0;
  currentScore = 0;
};
console.log(activePlayer);
startGame.addEventListener("click", newGame);
let imgDisplay = (nb) => (img.src = `./assets/images/dice-${nb}.png`);

const toRollDice = () => {
  if (Gaming === true) {
    let rand = Math.floor(Math.random() * 6) + 1;
    imgDisplay(rand);
    if (rand >= 2) {
//       currentScore += rand;
//       currentScore_player1.textContent = currentScore;
//     } else {
//       currentScore = 0;
//       turnPlayer();
//     }
//   } else {
//     console.log("Click NEW GAME BUTTON for a new game");
//   }
// };

// rollDice.addEventListener("click", toRollDice);

// let turnPlayer = () => {
//   currentScore_player1.textContent = currentScore;
//   currentScore_player2.textContent = currentScore;
//   if (activePlayer === player1) {
//     activePlayer === player2;
//     active2.style.visibility = "visible";
//     active1.style.visibility = "hidden";
//   } else {
//     activePlayer === player1;
//     active1.style.visibility = "visible";
//     active2.style.visibility = "hidden";
//   }
// };
