import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/NowLearning-CSA-Tracker"> {/* Set the basename to match your GitHub repository name */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
