import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
<Routes/> 
</Provider>,
  document.getElementById("root")
);