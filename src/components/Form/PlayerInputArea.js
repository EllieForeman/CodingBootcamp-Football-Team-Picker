//A component's state is meant to represent any values that change in the DOM.  
// That means that as the user types into a form input the state should be updated.
//this.props automatically setup when extend component is used 
import React, { Component } from "react";
import Input from "./Input";
import AddPlayerButton from './AddPlayerButton';

//!!!note!! - bug 'cannot run .slice method of undefined' - so made this and used fields.map instead of .slice
// const fields = [
// 	{ name: "playerName",
// 	label: "Enter Players",
// 	value: "" },
// ];

class Form extends Component {
//setting up initial state with constructor method
	constructor(props) {
		super(props);
		this.state = {
            // fields: fields.map( ({ name, label, value }) => { //The map() method creates a new array
            //     return{
            //             name: name,
            //             label: label,
            //             value: "",                
            //     };
            // }),
            name: '',
        };
//bind prevents value of 'this' getting lost
		this.submit = this.submit.bind(this);
		this.change = this.change.bind(this);
	};

//Updates the state when the value changes using the event object
//Access the value of the <input> using the value property
//using setState to update state
	change(e, i) {
		// let fields = this.state.fields.slice(); //slice() method returns a portion of an array into a new array 
		// fields[i].value = e.target.value; //target property of event object
		// this.setState({fields: fields});
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