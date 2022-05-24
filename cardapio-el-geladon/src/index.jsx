import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Home from "./components/Home";
import "./index.css";

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
