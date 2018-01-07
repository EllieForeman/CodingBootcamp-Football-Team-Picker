import React, { Component } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Instructions from './components/Instructions';
import PlayerInputArea from './containers/PlayerInputArea';
import PlayerList from './containers/PlayerList';
import Teams from './containers/Teams';



class App extends Component {

  	render() {
	    return (	
	     	<div>
		       	<Header />
		       	<Instructions />
			    <PlayerInputArea />
			    <PlayerList />
			    <Teams />
			    <Sidebar/>
	    	</div>
	    );
 	}
}

export default App;


