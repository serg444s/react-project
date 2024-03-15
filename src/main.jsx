import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import AppBook from './components/AppBook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <AppBook />
  </React.StrictMode>
);
