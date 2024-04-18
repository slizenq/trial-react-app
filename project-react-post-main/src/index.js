import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
