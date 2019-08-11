'use strict'

let arrOfPlayers;

// funciton to update the players
let updatePlayers = () =>
{
	let players = '';

	arrOfPlayers.forEach( function( obj, index )
	{
		players += `
			<li>
				<pre>${JSON.stringify( obj, null, 4 )}</pre>
				<div class="team-buttons">
					<button class="btn-red-team" onclick="redTeam.joinTeam( ${index} )">Red Team</button>
					<button class="btn-blue-team" onclick="blueTeam.joinTeam( ${index} )">Blue Team</button>
				</div>
			</li>
		`;
	})

	document.getElementById( 'dodgeballPlayers' ).innerHTML = players;
}

// button to get players from an outside array
let getPlayers = ( peopleArr ) =>
{
	if ( peopleArr.length != 0 )
	{
		arrOfPlayers = peopleArr.splice( 0, peopleArr.length );
		updatePlayers();
	}
}

class DodgeballTeam
{
	constructor( teamID, teamName )
	{
		this.teamID = teamID;
		this.teamName = teamName;
		this.teamMembers = [];
	}

	updateTeam()
	{
		let members = '';

		this.teamMembers.forEach( function( obj, index  )
		{
			members += `
				<li class="team-member">
					<pre>${JSON.stringify( obj, null, 4 )}</pre>
					<button class="remove-button" onclick="${obj.dodgeballTeamID}.removePlayer( ${index} )">&times;</button>
				</li>
			`;
		})

		document.getElementById( this.teamID.toString() ).innerHTML = members;
	}

	updateDOM()
	{
		updatePlayers();
		this.updateTeam();
	}

	joinTeam( index )
	{
		// add the team info to the player obj
		arrOfPlayers[ index ].dodgeballTeamID = this.teamID;
		// grab and remove the player that is being added
		let newPlayer = arrOfPlayers.splice( index, 1 );
		// add the player to the team
		this.teamMembers.push( newPlayer[0] );
		// update the DOM
		this.updateDOM();
	}

	removePlayer( index )
	{
		// remove the team info from the player obj
		delete this.teamMembers[ index ].dodgeballTeamID;
		// grab and hold the player that is being removed
		let removedPlayer = this.teamMembers.splice( index, 1 );
		// add the player to the back to the unasigned players
		arrOfPlayers.push( removedPlayer[0] );
		// update the DOM
		this.updateDOM();
	}
}

// declare our teams
const redTeam = new DodgeballTeam( 'redTeam', 'Red Robins' );
const blueTeam = new DodgeballTeam( 'blueTeam', 'Blue Jays' );

// set the team names in the DOM
document.getElementById( 'redTeamName' ).innerHTML = redTeam.teamName;
document.getElementById( 'blueTeamName' ).innerHTML = blueTeam.teamName;

// a button to change the names
let changeTeamName = ( team ) =>
{
	let newName = prompt("Please enter your team name", "New Name");

	if ( newName != null )
	{
		team.teamName = newName;
		document.getElementById( `${team.teamID}Name` ).innerHTML = team.teamName;
	}
}