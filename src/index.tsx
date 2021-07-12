import 'normalize.css';
import 'aos/dist/aos.css';
import 'antd/dist/antd.css';

import { StrictMode } from 'react';
import { render } from 'react-dom';

import App from './App';
import ThemeProvider from './theme/theme';
import GlobalStyled from './theme/globalStyle';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <GlobalStyled />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
