import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ThemeProvider from './providers/ThemeProvider';
import ThemeWrapper from './Wrappers/ThemeWrapper';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeWrapper>

        <App />
      </ThemeWrapper>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();
