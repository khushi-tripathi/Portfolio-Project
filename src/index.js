
// You can delete all  and start fresh!!

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render('what we want to show' , 'where to show first parameter' , 'callback funct');


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    // <h1>Hello World</h1>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// comment off below code!! (if you want)

// import React from 'react';
// // var React = require('react');// this helps to write similar code like html to js file thats why we import it
// import ReactDOM from 'react-dom';
// // var ReactDOM = require('react-dom'); // it should be use when we want to manipulate dom files

// ReactDOM.render(
// <h1> Hello REACT !! I am very happy to see my HELLO REACT:) !!</h1>//this is not html, it is jsx (we do it because we import react)
//  , 
// document.getElementById('root')// becoz of react-dom

// );












// two component - babel and webpack, automatically install whrn we create react project. We dont have to install it externally 

// Basically babel is a javascript compiler - it convert advance js code o browser friendly code(understand by browser)... 

// means we can use advance js code in this
//  We use direct import keyword here because it is in modern js instead of var require