import React, { Component } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import PlayerInputArea from './containers/PlayerInputArea';
import PlayerList from './containers/PlayerList';


class App extends Component {

  	render() {
	    return (
	     	<div>
		       	<Header />
		       	<Instructions />
			    <PlayerInputArea />
			    <PlayerList />
	    	</div>
	    );
 	}
}

export default App;

