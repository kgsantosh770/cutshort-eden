import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { OnboardContexProvider } from './context/OnboardContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <OnboardContexProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OnboardContexProvider>
  </React.StrictMode>
);
