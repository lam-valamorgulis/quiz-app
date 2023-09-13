import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import QuizProvider from './contexts/QuizContext';

import App from './App';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
