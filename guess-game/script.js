'use strict';
const INITIAL_SCORE = 20;
const MAX_NUMBER = 20;

//
const gameState = {
  score: INITIAL_SCORE,
  highscore: 0,
  secretNumber: generateNumber(),
};

function generateNumber() {
  return Math.trunc(Math.random() * MAX_NUMBER + 1);
}

const setElementText = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

const displayMessage = message => {
  setElementText('.message', message);
};

const applyWinStyles = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const resetGameUI = () => {
  displayMessage('Start guessing...');
  setElementText('.number', '?');
  setElementText('.score', score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style = '';
  document.querySelector('.number').style = '';
};

const resetGameState = () => {
  gameState.score = INITIAL_SCORE;
  gameState.secretNumber = generateNumber();
};
//If number is wrong
const handleWrongGuess = guess => {
  let hintText =
    guess > gameState.secretNumber ? '📈 Too High!' : '📉 Too low!';

  if (gameState.score > 1) {
    displayMessage(hintText);
    gameState.score--;
    setElementText('.score', gameState.score);
  } else {
    displayMessage('💥 You lost the game!');
    setElementText('.score', 0);
  }
};

const handleGuess = guess => {
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === gameState.secretNumber) {
    displayMessage('🎉 Correct Number!');
    setElementText('.number', gameState.secretNumber);
    applyWinStyles();

    if (gameState.score > gameState.highscore) {
      gameState.highscore = gameState.score;
      setElementText('.highscore', gameState.highscore);
    }
  } else {
    handleWrongGuess(guess);
  }
};

//Adding Event listeners
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  handleGuess(guess);
});

document.querySelector('.again').addEventListener('click', function () {
  resetGameState();
  resetGameUI();
});

console.log((13 + 17 + 14 + 17 + 16 + 15 + 25 + 16 + 206) / 60);
