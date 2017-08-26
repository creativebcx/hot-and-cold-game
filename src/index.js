import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from './components/body';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Body />, document.getElementById('root'));
registerServiceWorker();
