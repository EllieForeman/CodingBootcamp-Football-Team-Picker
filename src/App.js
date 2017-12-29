import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Instructions from './components/Instructions';
import NameInput from './components/Form/NameInput';
import PlayerList from './components/PlayerList/PlayerList';
import PlayerListItem from './components/PlayerList/PlayerListItem';


class App extends Component {

	constructor(props) {
		super(props);
		this.addPlayer=this.addPlayer.bind(this);
		this.state = {
			players: [
			{id: 0, name: "peter foreman", skill: 5},
			{id: 2, name: "katie proffitt", skill: 3}
			],
			nextId: 3
}
	}

	addPlayer(playerName) {
		let players=this.state.players.slice();//making a copy
		players.push({id:this.state.nextId,name:playerName});
		this.setState({
			players: players,
			nextId: ++this.state.nextId
		});
		console.log("Player added:", playerName);
	}

  	render() {

	    return (
	     	<div>
		       	<Header />
		       	<Instructions />
			    <NameInput playerName="" addPlayer={this.addPlayer}/>
				<PlayerList />    
				<PlayerListItem />
	    	</div>
	    );
 	}
}

export default App;
