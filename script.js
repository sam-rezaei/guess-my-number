'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 23;
*/

//Make a rondom number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = '🎉 Correct Number!';
  console.log(guess, typeof guess, score);

  //if we don't write anything
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!⛔';

    displayMessage('No Number!⛔');

    //if you win
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent ='🎉 Correct Number!' ;

    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;

      //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high 📈' : 'Too low 📉' ;
      displayMessage(guess > secretNumber ? 'Too high 📈' : 'Too low 📉');
    } else {
      score = 0;
      document.querySelector('.score').textContent = score;
      //document.querySelector('.message').textContent =  'You lost!';
      displayMessage('You lost!');
      document.querySelector('body').style.backgroundColor = '#f90606';
      document.querySelector('.number').textContent = secretNumber;
    }
  }

  //   //if you guess higher number than the random number
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'Too high 📈';
  //     } else {
  //       score = 0;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'You lost!';
  //       document.querySelector('body').style.backgroundColor = '#f90606';
  //       document.querySelector('.number').textContent = secretNumber;
  //     }

  //     //if you guess lower number than the random number
  //   } else if (guess < secretNumber) {
  //     if (score >= 1) {
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //       document.querySelector('.message').textContent = 'Too low 📉';
  //     } else {
  //       score = 0;
  //       document.querySelector('.message').textContent = 'You lost!';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('body').style.backgroundColor = '#f90606';
  //       document.querySelector('.number').textContent = secretNumber;
  //     }
  //   }
});

//Again buttom
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  score = 20;

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';
  //document.querySelector('.message').textContent =  'Start guessing...';
  displayMessage('Start guessing...');

  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
