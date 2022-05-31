import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/login/Login';
import Header from './components/core/header';
import Checklist from './routes/Checklist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    const [token, setToken] = useState(false);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="checklist" element={<Checklist />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
