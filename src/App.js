import './App.css';
import React from 'react';
import Login from './components/login/Login';
import Header from './components/core/header';
import Checklist from './routes/Checklist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './components/app/useToken';
import Dashboard from './components/dashboard/Dashboard';

export default function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/checklist" element={<Checklist />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
