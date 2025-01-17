import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm start
// to launch your react project in your browser