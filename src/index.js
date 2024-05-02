import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCW-AwaTe4nQdtwQG2B2izpvEUODWF4mZg",
  authDomain: "blog-app-a520c.firebaseapp.com",
  projectId: "blog-app-a520c",
  storageBucket: "blog-app-a520c.appspot.com",
  messagingSenderId: "896906603900",
  appId: "1:896906603900:web:eb56304e88857d437588f9",
  measurementId: "G-6YL3GBS28B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
