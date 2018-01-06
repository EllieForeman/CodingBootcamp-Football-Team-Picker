import React from 'react';
// import PlayerListItem from "../../containers/PlayerListItem"
// import PlayerListItem from './PlayerListItem';

// players is a List, from state


// shufflePlayers(e) {
//     this.props.onClick({
//             playerName: this.state.name,
//             });
//             this.setState({
//                 name: '',
//             })
//         }
// }


const PlayerList = ({players}) => (
    <div>
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

    </div>
);

export default PlayerList;