import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = [
  {
    id: 1,
    content: "Learn Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 2,
    content: "Learn Angular",
    date: "2020-05-30T18:39:34.091Z",
    important: true
  },
  {
    id: 3,
    content: "Learn React",
    date: "2021-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 4,
    content: "Learn Svelte",
    date: "2021-05-30T18:39:34.091Z",
    important: true
  },
  {
    id: 5,
    content: "Learn Python",
    date: "2021-05-30T18:39:34.091Z",
    important: true
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={ data } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
