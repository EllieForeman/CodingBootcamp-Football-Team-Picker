import React from "react";
//functional component for addplayer button
	const AddPlayerButton = ({ value, type, className, players }) => ( 
	  	<div className="addPlayer">
	    	<input className={ className } type={ type } value={ value } disabled={ players.count() >= 10 }  />
	 	</div>
	);

export default AddPlayerButton;

