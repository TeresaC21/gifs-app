import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Components
import GifMoonApp from './GifMoonApp';

ReactDOM.render(
  <React.StrictMode>
    <GifMoonApp />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
