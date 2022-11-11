'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Initial score
let highScore = 0;

const displayMessage = function(message) {
	document.querySelector('.message').textContent = message;
}

const displayNumber = function(number) {
	document.querySelector('.number').textContent = number;
}

const displayScore = function(score) {
	document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);

	// In case no input number or wrong type!
	if (!guess) {
		displayMessage('No number! ⛔️')
	}
	// If the secret number has been found
	else if (guess === secretNumber) {
		displayMessage('🎉 Correct Number!')
		displayNumber(secretNumber);

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';

		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	}

	// In case the guess is different of the secret number
	else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber? '📈 Too high!' : '📉 Too low!');
			score--;
			displayScore(score);
		}
		else {
			displayMessage('💥 You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

// Again Button (restart the game)
document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage('Start guessing...');
	displayNumber('?');
	displayScore(score);
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.guess').value = '';
});
