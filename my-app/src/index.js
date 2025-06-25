import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ✅ Correct way to create root and render in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: measure performance
reportWebVitals();
