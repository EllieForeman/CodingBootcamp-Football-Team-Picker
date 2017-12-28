import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NameInput from './components/NameInput';
import MakeTeam from './components/MakeTeamButton';

class App extends Component {
  render() {
    return (
      <div>
       <Header />
       <NameInput />
       <MakeTeam />
      </div>
    );
  }
}

export default App;
