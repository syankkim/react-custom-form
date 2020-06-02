import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();
// The call to register service worker is enabled by default 
// in new apps but you can always remove it and then you’re back to regular behaviour.