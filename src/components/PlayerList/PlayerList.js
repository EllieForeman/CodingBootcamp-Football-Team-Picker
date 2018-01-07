import React from 'react';

const PlayerList = ({players}) => (
    <section className="playerList col-md-6">
        <h3>Player List:</h3>
        <div className="player-number-warning">
            { players.size < 10 ? 
            <p> ...you need to add 10 players </p>
            :
            <p> Nice! now make your teams! </p>
            }
        </div>

        <div className="playerListText">
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