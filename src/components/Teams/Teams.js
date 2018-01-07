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
		const copyPlayerList = [...this.props.players]; //need to make a copy as you cannot change an immutable array

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
	    // console.log(this.state.shuffled);
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
			    <div className="buttonWrapper">	
			    	<button
				        className="makeTeamsButton"
				        disabled={ players.count() > 10 } //need to work on this//
				        disabled={ players.count() < 10 }
				        onClick={(e) => this.shufflePlayers(e)}>
				        Make Teams
			        </button>
			    </div>

				    { players.count() === 10 ?
					    <div>
							<h3 className="center">Click shuffle to make teams. Not happy? press again to re-shuffle</h3>
								<div className="teamsSection">
									<div className="teamA">
						        		<h3> TEAM A: </h3>
										<ul> {teamA} </ul>
									</div>
									
									<div className="teamB">
						        		<h3> TEAM B: </h3>
										<ul> {teamB} </ul>
									</div>
								</div>
						</div>	
					:	
					<h3 className="centerText">Once you've got your 10 players, click 'Make Teams' and your teams will appear here</h3>
					}

		    	</section>
		)
	}
}

export default Teams;
