import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyles';
import {BrowserRouter} from "react-router-dom"
import {MarriageProvider} from "./providers/Marriage"
import {GraduationProvider} from "./providers/Graduation"
import { ConfraternizationProvider } from './providers/Confraternization';

ReactDOM.render(
  <React.StrictMode>
    <MarriageProvider>
      <GraduationProvider>
        <ConfraternizationProvider>
        <BrowserRouter>
          <GlobalStyle />
            <App />
          </BrowserRouter>
        </ConfraternizationProvider>
      </GraduationProvider>
    </MarriageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
