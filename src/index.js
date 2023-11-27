import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio-react-project">
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
