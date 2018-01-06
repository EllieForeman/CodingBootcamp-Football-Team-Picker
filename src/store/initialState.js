import { Map, List } from 'immutable';

//setting up the intial state 
const initialState = Map({ 
	players: List([]),
	shuffled: List([]),
});

export default initialState;