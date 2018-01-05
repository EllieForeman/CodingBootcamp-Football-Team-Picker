import React from 'react';
// import PlayerListItem from "../../containers/PlayerListItem"
// import PlayerListItem from './PlayerListItem';

// players is a List, from state




const PlayerList = ({players}) => (
    <div>
    {console.log(players)}
        <ol>
            { players.map((player, i) => (
                <li key={i}>
                 {player.get("playerName")}                     
                </li>
            ))}
        </ol>

         { players.size < 10 ? 
        <p> add players </p>
        :
        <p> everyone's there </p>
        }

        <button
        className="btn btn-warning"
        onClick={() => this.shufflePlayers()}>
        Make Teams
        </button>
    </div>
);

export default PlayerList;