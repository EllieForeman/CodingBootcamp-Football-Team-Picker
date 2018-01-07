import React, { Component } from "react";

class Teams extends Component {

	constructor(props) {
		super(props);
		this.state = {
            shuffled: [],
        };
		this.shufflePlayers = this.shufflePlayers.bind(this);
	};


	shufflePlayers(e) {
		e.preventDefault();
		const copyPlayerList = [...this.props.players];

		function shuffle (players) {

			let index = players.length;
			let random;
			let temp;

			while (--index > 0) {
				random = Math.floor(Math.random() * (index + 1));
				temp = players[random];
				players[random] = players[index]; //swapping
				players[index] = temp;
			}
			return players;
		}


		let shuffledPlayers = shuffle(copyPlayerList);
		console.log(shuffledPlayers);

		this.setState({shuffled: shuffledPlayers });
	    	console.log(this.state.shuffled);
	
	}

	render() {
	const { players } = this.props;

	const team1 = this.state.shuffled.slice(0,5)
	const team2 = this.state.shuffled.slice(5)

	const teamA = team1.map(player =>
	    <li key={player.get("playerName")}>
	      {player.get("playerName")}
	    </li>
	);

	const teamB = team2.map(player =>
	    <li key={ player.get("playerName")}>
	      {player.get("playerName")}
	    </li>
	);

	    return (	
			    <section className="teams-section">
					{ players.count() === 10 ?
						<div>
							<button
					        className="btn btn-warning"
					        onClick={(e) => this.shufflePlayers(e)}>
					        Make Teams
					        </button>

				        	<h3> Team A: </h3>
							<ol> {teamA} </ol>
				        	<h3> Team B: </h3>
							<ol> {teamB} </ol>
							</div>		
					:
					null
					}
		        </section>
		)
	}

}

export default Teams;
