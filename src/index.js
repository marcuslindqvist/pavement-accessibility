import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/core/header';
import Checklist from './routes/Checklist';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="checklist" element={<Checklist />} />
        </Routes>
    </BrowserRouter>
);
