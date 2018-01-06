//A component's state is meant to represent any values that change in the DOM.  
// That means that as the user types into a form input the state should be updated.
//this.props automatically setup when extend component is used 
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
//Access the value of the <input> using the value property
//using setState to update state
	change(e, i) {
		this.setState({
			name: e.target.value,
		})
	}

	submit(e) {
		e.preventDefault(); 
		if (this.state.name.length > 0) { //prevents default reloading
		    this.props.onSubmit({
		    	playerName: this.state.name,
		    });
		    this.setState({
	            name: '',
		    })
		}
	}

  render() {
    return (
			<form onSubmit={ this.submit }>
					<Input
						onChange={ (e) => this.change(e) }
						value={ this.state.name }
						key={ 0 }
					/>
			<AddPlayerButton className="btn btn-success" type="submit" value="add player"/>				
			</form>
    )
  }
}

export default Form;