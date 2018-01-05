import { Map } from "immutable";
// import shuffleFunction from "../components/shuffleFunction";

const addPlayer = (state, { playerName, id }) => state.update("players", players => (
    players.push(Map({
        playerName: playerName,
        id: id,
        }))
));

// const shufflePlayers = (state) => {
//     const x = shuffle(state.get("players")) //calls shuffle function on players array 
// //     // const teamA = x.slice(0, length /2) //not slice but maybe a function called partition 
// //     //need to set state for both teams
// //     // return state
// //     //   .set("teamA", teamA)
// //     //   .set("teamB", teamB)
//     return setState("teams");
// }

//"The reducer is a pure function that takes the previous state and an action, and returns the next state."
const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        // case "SHUFFLE_PLAYERS": return shufflePlayer(state)
        default: return state;
    }
}



export default reducer;
