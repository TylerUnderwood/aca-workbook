'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let stacks = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

const stacksReset = {
	a: [4, 3, 2, 1],
	b: [],
	c: []
};

function printStacks() {
	console.log("a: " + stacks.a);
	console.log("b: " + stacks.b);
	console.log("c: " + stacks.c);
}

function movePiece( startStack, endStack ) {
	// grab the top piece from the start stack
	// place that piece on the end stack 
	stacks[endStack].push( stacks[startStack].pop() )
	
}

function isLegal( startStack, endStack ) {

	let validMove = [ 'a', 'b', 'c' ]

	if ( validMove.includes(startStack) && validMove.includes(endStack) ) {
		console.log('valid move')

		let topOfStartStack =  stacks[startStack][stacks[startStack].length - 1]
		let topOfEndStack =  stacks[endStack][stacks[endStack].length - 1]

		if ( ( topOfStartStack < topOfEndStack ) || ( topOfEndStack === undefined ) ) {
			console.log('legal move')
			return true
		} else {
			console.log("Please make a valid move.")
			return false
		}
	}
}

function checkForWin() {
	console.log(stacks.c)
	console.log(stacks.c === [ 4, 3, 2, 1 ] )
	if ( stacks.c === [ 4, 3, 2, 1 ] ) {
		return true
	} else {
		return false
	}
}

function towersOfHanoi( startStack, endStack ) {
	// if it is a leagal move
	if ( isLegal( startStack, endStack ) ) {

		// move the piece
		movePiece( startStack, endStack )

		// check if the winning move
		if ( checkForWin() ) {
			stacks = stacksReset

			console.log("You win!")
		}

	// else alert an invalid move	
	} else {
		// console.log("Please make a valid move.")
	}
}

function getPrompt() {
	printStacks();
	rl.question('start stack: ', (startStack) => {
		rl.question('end stack: ', (endStack) => {
			towersOfHanoi(startStack, endStack);
			getPrompt();
		});
	});
}

// Tests

if (typeof describe === 'function') {

	describe('#towersOfHanoi()', () => {
		it('should be able to move a block', () => {
			towersOfHanoi('a', 'b');
			assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
		});
	});

	describe('#isLegal()', () => {
		it('should not allow an illegal move', () => {
			stacks = {
				a: [4, 3, 2],
				b: [1],
				c: []
			};
			assert.equal(isLegal('a', 'b'), false);
		});
		it('should allow a legal move', () => {
			stacks = {
					a: [4, 3, 2, 1],
					b: [],
					c: []
			};
			assert.equal(isLegal('a', 'c'), true);
		});
	});

	describe('#checkForWin()', () => {
		it('should detect a win', () => {
			stacks = { a: [], b: [], c: [ 4, 3, 2, 1 ] };
			assert.equal(checkForWin(), true);
			stacks = { a: [1], b: [4, 3, 2], c: [] };
			assert.equal(checkForWin(), false);
		});
	});

} else {

  getPrompt();

}
