import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App title = 'The Github Card App'/>, document.getElementById('root'));

serviceWorker.unregister();