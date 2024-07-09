import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './App';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App/> */}
   <Counter />
  </React.StrictMode>
);



