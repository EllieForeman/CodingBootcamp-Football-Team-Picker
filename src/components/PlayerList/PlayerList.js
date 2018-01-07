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
    <section className="player-list">
    <div className="player-number-warning">
         { players.size < 10 ? 
        <p> add players </p>
        :
        <p> everyone's there </p>
        }
    </div>

    <div className="player-list-text">
        <ol>
            { players.map((player, i) => (
                <li key={i}>
                 {player.get("playerName")}                     
                </li>
            ))}
        </ol>
    </div>


    </section>
);

export default PlayerList;