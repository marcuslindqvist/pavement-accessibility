import './App.css';
import React, { useState } from 'react';
import Login from './components/login/Login';
import Header from './components/core/header';
import Checklist from './routes/Checklist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useToken from './components/app/useToken';
import Dashboard from './components/dashboard/Dashboard';
import Accessibility from './routes/Accessibility';
import ChecklistItemDetailView from './components/checklist/detail/ChecklistItemDetailView';

export default function App() {
    const { token, setToken } = useToken();
    const [currentUser, setCurrentUser] = useState('');
    function setUser(uname) {
        setCurrentUser(uname);
    }
    if (!token) {
        return <Login setToken={setToken} setUser={setUser} />;
    }

    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Dashboard user={currentUser} />}
                    />
                    <Route path="/checklist" element={<Checklist />} />
                    <Route path="/accessibility" element={<Accessibility />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
