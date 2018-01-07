import React, { Component } from 'react';
import PlayerInputArea from '../Form/PlayerInputArea'

const PlayerListItem = ({ player, onDelete }) => (
          <li className="player-list-text" key={ player.get("id") }>
            { player.get("name") }
            <button onClick={ onDelete } className="btn btn-danger">x</button>
          </li>
);


export default PlayerListItem;