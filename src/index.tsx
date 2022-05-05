import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './i18n';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AuthPage from './core/auth/AuthPage';
import MainPage from './core/main/MainPage';
import { AuthenticationProvider } from './core/auth/AuthProvider';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
export { firebase, auth };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <AuthenticationProvider>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/signin" element={<AuthPage/>}/>
          </Routes>
        </AuthenticationProvider>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
