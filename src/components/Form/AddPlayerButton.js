import React from "react";
//functional component for addplayer button
	const AddPlayerButton = ({ value, type, className }) => ( //properties of button 
	  	<div className="addPlayer">
	    	<input className={ className } type={ type } value={ value }/>
	 	</div>
	);

export default AddPlayerButton;


// Add later - disabling the button, maybe with a message? : disabled={ players.count() >= 10 }

