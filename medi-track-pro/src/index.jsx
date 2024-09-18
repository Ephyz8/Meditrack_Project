// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);

// Wrap the App component with BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
