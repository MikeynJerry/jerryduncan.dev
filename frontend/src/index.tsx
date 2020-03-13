import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import routes from './routes/index'


ReactDOM.render(
  <App routes={routes} />,
  document.getElementById('root')
)
