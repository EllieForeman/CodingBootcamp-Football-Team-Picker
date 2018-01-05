export const addPlayer = ({ playerName, id }) => {
    return {
        type: "ADD_PLAYER",
        playerName: playerName,
        id: id,
    };
};

export const removePlayer = (id) => {
	return {
    type: "REMOVE_PLAYER",
    id: id,
	};
};

// export const shufflePlayers = () => {
// 	return {
//     type: "SHUFFFLE_PLAYERS",
//     teams: teams,
// 	};
// };