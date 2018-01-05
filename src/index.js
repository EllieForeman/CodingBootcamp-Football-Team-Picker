import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import initialState from "./store/initialState"

 const store = createStore(
   reducer,
   initialState, /* preloadedState, */
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
	<Provider store={ store }>
	<div>
	<App />
	</div>
	</Provider>,
	document.getElementById('root')
	// registerServiceWorker();
);