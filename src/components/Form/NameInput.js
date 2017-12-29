import React, { Component } from 'react';


class NameInput extends Component {

	constructor(props) { 	
		super(props);	
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);	
		this.addPlayer = this.addPlayer.bind(this);
	}
		
	handleChange(e) {
		this.setState({value: e.target.value});
	}

	addPlayer(player) {
		if (player.length > 0) {
			this.props.addPlayer(player);
			this.setState({value:''})
		}
	}

//define two functions - handle change and addPlayer

	render () {	 

		return ( 
			<div className="nameInput">
				<input 
				type="text"
				placeholder="add player.."
				value={ this.state.value }
				onChange={this.handleChange}/>
				<button
				className="btn btn-primary"
				onClick={() => this.addPlayer(this.state.value)}>
				Add Player!</button>
			</div>

		)
	}
}

export default NameInput;