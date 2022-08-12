import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Loader from './Components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Loader />
    <App />
  </React.StrictMode>
);
