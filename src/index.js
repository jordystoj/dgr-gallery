import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Submissions from './routes/Submissions';
import Tags from './routes/Tags';
import Galleries from './routes/Galleries';
import Rides from './routes/Rides';
import Settings from './routes/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="submissions" element={<Submissions title="Submissions" />} />
        <Route path="tags" element={<Tags title="Tags" />} />
        <Route path="galleries" element={<Galleries title="Galleries" />} />
        <Route path="rides" element={<Rides title="Rides" />} />
        <Route path="settings" element={<Settings title="Settings" />} />

      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
