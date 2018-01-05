import React from "react";

// a simple Input component
const Input = ({ value, name, label, onChange }) => (
    <div>
        <label htmlFor={ name }>{ label }</label>
        <input type="text" placeholder="player name..." value={ value } id ={ name } onChange={ onChange } />
    </div>
);

export default Input;