import React, { Component } from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import PlayerList from './components/PlayerList/PlayerList';


class App extends Component {

  	render() {
	    return (
	     	<div>
		       	<Header />
		       	<Instructions />
			    <PlayerList />
	    	</div>
	    );
 	}
}

export default App;
