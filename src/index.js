import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
registerServiceWorker();
