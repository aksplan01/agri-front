import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:5000/";
axios.defaults.headers.common['Accept-Language'] = localStorage.getItem('lang') || 'en';

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);


