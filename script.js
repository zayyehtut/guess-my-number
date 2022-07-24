'use strict';
const min = 1,
  max = 100;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const restart = function () {
  const newNum = Math.trunc(Math.random() * max) + 1;
  $('.number').textContent = newNum;
  return newNum;
};

const displayMessage = function (message) {
  return ($('.message').textContent = message);
};

let secretNumber = restart();
let score = 20;
let highscore = 0;

$('.guess').min = min;
$('.guess').max = max;
$('.between').textContent = `(Between ${min} and ${max})`;
$('.again').addEventListener('click', function () {
  secretNumber = restart();
  score = 20;
  $('.score').textContent = score;
  $('body').style.backgroundColor = '#222';
  $('.number').style.width = '15rem';
  $('.guess').value = '';
  displayMessage('Start guessing...');
});

$('.check').addEventListener('click', function () {
  const guess = Number($('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
  }
  //When player win
  else if (guess === secretNumber) {
    $('.highscore').textContent = score > highscore ? score : highscore;
    $('body').style.backgroundColor = '#60b347';
    $('.number').style.width = '30rem';
    displayMessage('🎉 Correct Number');
  }
  //When number is higher
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      $('.score').textContent = score;
    } else {
      displayMessage('😔 You lost the game');
      $('.score').textContent = 0;
    }
  }
});
