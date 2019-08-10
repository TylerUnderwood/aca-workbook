'use strict'

document.querySelectorAll('.show-hide').forEach( function( elem ) 
{
	elem.innerHTML = "Hide";
})

let showHide = ( elemID ) => {

	let elem = document.getElementById( elemID );

	if ( elem.classList.contains( 'hidden' ) )
	{
		event.target.innerHTML = "Hide";
		elem.classList.remove( 'hidden' );
		elem.classList.add( 'shown' );
	}
	else
	{
		event.target.innerHTML = "Show";
		elem.classList.remove( 'shown' );
		elem.classList.add( 'hidden' );
	}
}

const arrOfPeople = [
	{
		id: 1,
		name: "Tyler Underwood",
		age: 999,
		skillSet: "everthing",
		placeBorn: "Outer Space"
	},
	{
		id: 2,
		name: "Charles Young",
		age: 55,
		skillSet: "welding",
		placeBorn: "Omaha, Nebraska"
	},
	{
		id: 3,
		name: "Judy Twilight",
		age: 35,
		skillSet: "fishing",
		placeBorn: "Louisville, Kentucky"
	},
	{
		id: 4,
		name: "Cynthia Doolittle",
		age: 20,
		skillSet: "tic tac toe",
		placeBorn: "Pawnee, Texas"
	},
	{
		id: 5,
		name: "John Willouby",
		age: 28,
		skillSet: "pipe fitting",
		placeBorn: "New York, New York"
	},
	{
		id: 6,
		name: "Stan Honest",
		age: 20,
		skillSet: "boom-a-rang throwing",
		placeBorn: "Perth, Australia"
	},
	{
		id: 7,
		name: "Mia Watu",
		age: 17,
		skillSet: "acrobatics",
		placeBorn: "Los Angeles, California"
	},
	{
		id: 8,
		name: "Walter Cole",
		age: 32,
		skillSet: "jump rope",
		placeBorn: "New Orleans, Louisiana"
	},
]

let updatePeople = () =>
{
	let people = '';

	arrOfPeople.forEach( function( obj, index )
	{
		people += `
			<li>
				<pre>${JSON.stringify( obj, null, 4 )}</pre>
				<div class="team-buttons">
					<button class="btn-red-team" onclick="joinRed( ${index} )">Red Team</button>
					<button class="btn-blue-team" onclick="joinBlue( ${index} )">Blue Team</button>
				</div>
			</li>
		`;
	})

	document.getElementById('people').innerHTML = people;
}
updatePeople();

let updateRedTeam = () =>
{
	let teamMembers = '';

	redTeam.forEach( function( obj )
	{
		teamMembers += `
			<li>
				<pre>${JSON.stringify( obj, null, 4 )}</pre>
			</li>
		`;
	})

	document.getElementById('redTeam').innerHTML = teamMembers;
}

let joinRed = ( index ) =>
{
	redTeam.push( arrOfPeople.splice( index, 1 ) );
	updatePeople();
	updateRedTeam();
}

let updateBlueTeam = () =>
{
	let teamMembers = '';

	blueTeam.forEach( function( obj )
	{
		teamMembers += `
			<li>
				<pre>${JSON.stringify( obj, null, 4 )}</pre>
			</li>
		`;
	})

	document.getElementById('blueTeam').innerHTML = teamMembers;
}

let joinBlue = ( index ) =>
{
	blueTeam.push( arrOfPeople.splice( index, 1 ) );
	updatePeople();
	updateBlueTeam();
}


  
const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player
{
	constructor()
	{

	}
}
class blueTeam1
{
	constructor()
	{

	}
}
class redTeam1
{
	constructor()
	{

	}
}
  
// const listPeopleChoices = () => {

// 	const listElement = document.getElementById('players')

// 	arrOfPeople.map(person => {
// 		const li = document.createElement("li")
// 		const button = document.createElement("button")
// 		button.innerHTML = "Make Player"
// 		button.addEventListener('click', function() {makePlayer(person.id)} )
// 		li.appendChild(button)
// 		li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
// 		listElement.append(li)
// 	})
// }
  
// const makePlayer = (id) => {
// 	console.log(`li ${id} was clicked!`)
// }