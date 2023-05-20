import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './shared/config/i18n/i18n';
import './app/styles/index.scss';

import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  // <StrictMode>
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  // </StrictMode>
  document.getElementById('root')
);
