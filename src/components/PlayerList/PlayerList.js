import React from 'react';
import PlayerListItem from './PlayerListItem';


this.state = {
	players: [
	{id: 0, name: "peter foreman", skill: 5},
	{id: 2, name: "katie proffitt", skill: 3}
	],
	nextId: 3
}

//map props undefined - is this because null is being passed in?
const PlayerList = (props) => (

	    <ul>
			{this.state.players.map((player => { <PlayerListItem 
				key={ player.id}
				player={ player}
				id={ player.id} 
				removeTodo={this.removeTodo}
				/>
			})
			)}
		</ul>	
);

export default PlayerList;