import React, { Component } from "react";
import Input from "./Input";
import AddPlayerButton from '../../containers/AddPlayerButton';

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
		    	id: this.state.name
		    });
		    
		    this.setState({
            	name: '',
            	id: '',
    		})	
		}
	}

  render() {
	    return (
	    	<div>
					<form className="player-input-area" onSubmit={ this.submit }>
						<div className="col-md-6">
							<h3>Add players here:</h3>
							<div className="form-group form-group-inline">
								<Input
								className="addPlayer"
								onChange={ (e) => this.change(e) }
								value={ this.state.name }
								name = {this.state.name}
								/>
							</div>

							<div className="form-group form-group-inline">
								<AddPlayerButton
								className="addPlayerButton form-control form-control-inline"
								type="submit"
								value="add player"/>				
							</div>
						</div>
					</form>
			</div>
    	)
  	}
}

export default Form;