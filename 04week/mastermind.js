'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
	for ( let i = 0; i < board.length; i++ ) {
		console.log(board[i]);
	}
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function generateSolution() {
	for ( let i = 0; solution.split('').length < 4; i++ ) {
		const randomIndex = getRandomInt(0, letters.length);

		if ( !solution.split('').includes(letters[randomIndex]) ) {
			solution += letters[randomIndex];
		}
	}
}

function validInput(guessArray) {

	for ( let i = 0; i < guessArray.length; i++ ) {
		if ( !letters.includes( guessArray[i] ) ) {
			return false;
		}
	}

	return true;
}

function generateHint(guessArray, solutionArray) {

	let redPeg = 0;
	let whitePeg = 0;

	for ( let i = 0; i < guessArray.length; i++ ) {
		if ( guessArray[i] === solutionArray[i] ) {
			redPeg++
		} else
		if ( solutionArray.includes( guessArray[i] ) ) {
			whitePeg++
		}
	}

	return redPeg + "-" + whitePeg	
}

function mastermind(guess) {

	console.log( "Solution: " + solution + "\n" + "Guess: " + guess )

	const solutionArray = solution.split('');
	const guessArray = guess.split('');

	if ( guessArray.length === 4 ) {

		if ( guess === solution ) {

			console.log('You guessed it!');
			return 'You guessed it!'; 

		} else if ( validInput(guessArray) ) {

			board.unshift(guess + ": " + generateHint(guessArray, solutionArray))

		} else {
			console.log('You must enter a letter between "a" and "h".');
		}

	} else if ( guessArray.length < 4 ) {
		console.log('Too few letters');
	} else {
		console.log('Too many letters');
	}
}


function getPrompt() {
	rl.question('guess: ', (guess) => {
		mastermind(guess);
		printBoard();
		getPrompt();
	});
}

 //////////////////////////
// Tests

if (typeof describe === 'function') {

	solution = 'abcd';
	
	describe('#mastermind()', () => {
		it('should register a guess and generate hints', () => {
			mastermind('aabb');
			assert.equal(board.length, 1);
		});
		it('should be able to detect a win', () => {
			assert.equal(mastermind(solution), 'You guessed it!');
		});
	});

	describe('#generateHint()', () => {
		it('should generate hints', () => {
			assert.equal(generateHint(['a', 'b', 'd', 'c'], solution.split('')), '2-2');
		});
		it('should generate hints if solution has duplicates', () => {
			assert.equal(generateHint(['a', 'a', 'b', 'b'], solution.split('')), '1-1');
		});
	});

} else {

	generateSolution();
	getPrompt();

}
