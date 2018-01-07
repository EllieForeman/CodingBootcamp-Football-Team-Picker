import React from "react";

// a simple Input component
const Input = ({ value, name, label, onChange, className }) => (
    <div className="searchBar">
        <label htmlFor={ name }>{ label }</label>
        <input className="form-control form-control-inline" type="text" placeholder="player name..." value={ value } onChange={ onChange } />
    </div>
);

export default Input;