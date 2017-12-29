import React, {Component} from 'react';
import PlayerListItem from './PlayerListItem';
import NameInput from '../Form/NameInput';

class PlayerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			players: [],
			nextId: 1
			}

	this.addPlayer=this.addPlayer.bind(this);
	this.removePlayer=this.removePlayer.bind(this);

	}

	addPlayer(playerName) {
		let players=this.state.players.slice();//making a copy
		players.push({id:this.state.nextId,text:playerName});
		this.setState({
			players: players,
			nextId: ++this.state.nextId
		});
		console.log("Player added:", playerName);
	}

  	removePlayer(id) {
    	this.setState({
        players: this.state.players.filter((player, index) => player.id !== id)
      });
  }

  	render() {
	    return (
	     	<div>
			   	<h4>Your players</h4>
			   	<NameInput playerName="" addPlayer={this.addPlayer}/>
				<ul>
					{this.state.players.map((player) => {
						return <PlayerListItem 
				key={ player.id}
				player={ player}
				id={ player.id} 
				removePlayer={this.removePlayer}/>
				})
				}
				</ul>
	    	</div>
	    );
 	}
}

export default PlayerList;
