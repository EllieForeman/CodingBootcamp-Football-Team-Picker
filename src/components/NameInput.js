import React from 'react';

const NameInput = () => {

	constructor(props) { 					//all JS classes have a function called constructor - this is how we initialize state
		super(props);						//calls parent method with 'super' - this is component 
		this.state = { players: ''}; 			//ONLY IN CONSTRUCTOR FUNCTION DO WE CHANGE STATE LIKE THIS
	}	

	return ( 
		<div>
			<div>
				<p>Just enter in your player teams and hit 'Make Teams' to randomly divide your players into two teams</p>
			</div>

			<div>
				<input placeholder="player 1"/>
			</div>

			<div>
				<input placeholder="player 2"/>
			</div>

			<div>
				<input placeholder="player 3"/>
			</div>

			<div>
				<input placeholder="player 4"/>
			</div>

			<div>
				<input placeholder="player 5"/>
			</div>

			<div>
				<input placeholder="player 6"/>
			</div>

			<div>
				<input placeholder="player 7"/>
			</div>

			<div>
				<input placeholder="player 8"/>
			</div>

			<div>
				<input placeholder="player 9"/>
			</div>

			<div>
				<input placeholder="player 10"/>
			</div>
		</div>
	)
}

export default NameInput;