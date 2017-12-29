import React, {Component} from 'react';

class PlayerListIem extends Component {

	// this.removePlayer=this.removePlayer.bind(this);

	
	constructor(props) { 	
		super(props);
	}

	removePlayer(id) {
		this.props.removePlayer(id);
	}

	render() {
		return (
			<div className="playerWrapper">
			<button className="removePlayer" onClick={(e)=> this.removePlayer(this.props.id)}>Remove</button>
			</div>
		)
	}
}

export default PlayerListIem;