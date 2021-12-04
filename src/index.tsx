import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from "./components/shared/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
