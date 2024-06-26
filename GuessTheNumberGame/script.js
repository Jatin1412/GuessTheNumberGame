'use strict';

const again = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = document.querySelector('.highscore');
let score = document.querySelector('.score');
let high = 0;
let s = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', dets => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (s > high) {
      high = s;
      highscore.textContent = high;
    }
  } else if (guess !== secretNumber) {
    if (s > 1) {
      displayMessage(guess < secretNumber ? '📉 Too Low!' : '📈 Too High!');
      s--;
      score.textContent = s;
    } else {
      displayMessage('💥 you Lost the Game');
      score.textContent = 0;
    }
  }
});

again.addEventListener('click', () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score.textContent = 20;
  s = 20;
  document.querySelector('.guess').value = null;
});
