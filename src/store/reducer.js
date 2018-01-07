import { Map } from "immutable";
// import { shuffleFunction } from "../components/shuffleFunction";

const addPlayer = (state, { playerName, id }) => state.update("players", players => (
    players.push(Map({
        playerName: playerName,
        id: id,
    }))
));

// const removePlayer = (state, { id }) => {
// 	return state.update("players", players => {
//         return players.filter(( player ) => player.get("id") !== +id);
//     });
// }

//"The reducer is a pure function that takes the previous state and an action, and returns the next state."
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "REMOVE_PLAYER": return removePlayer(state, action);
        default: return state;
    }
}

export default reducer;
