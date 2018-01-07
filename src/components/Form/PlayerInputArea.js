import React, { Component } from "react";
import Input from "./Input";
import AddPlayerButton from './AddPlayerButton';

class Form extends Component {
//setting up initial state with constructor method
	constructor(props) {
		super(props);
		this.state = {
            shuffled: [],
        };
		this.submit = this.submit.bind(this);
		this.change = this.change.bind(this);
	};

//Updates the state when the value changes using the event object
	change(e, i) {
		this.setState({
			name: e.target.value,
		})
	}

	submit(e) {
		e.preventDefault(); 
		if (this.state.name) { //prevents default reloading
					this.props.onSubmit({
				    	playerName: this.state.name,
				    });

				if (this.state.name !== this.playerName) {
				    this.setState({
			            name: '',
			    	})
				}
		}
	}

  render() {
    return (
    		<div className="">
				<form className="player-input-area" onSubmit={ this.submit }>
						<Input className="search-bar"
							onChange={ (e) => this.change(e) }
							value={ this.state.name }
							key={ 0 }
						/>
				<AddPlayerButton className="addPlayerButton" type="submit" value="add player"/>				
				</form>
			</div>
    )
  }
}

export default Form;