import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ closeThisPage }) => {
    function closeMenu(event) {
        closeThisPage();
        event.preventDefault();
    }
    return (
        <div className="login-page">
            {/* <div className="login-page-header">
                <button onClick={closeMenu}>stäng</button>
            </div> */}
            <div className="login-page-main">
                <h1>menu</h1>
                <ul>
                    <li>
                        <Link to="/" onMouseUp={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/checklist" onMouseUp={closeMenu}>
                            Checklist
                        </Link>
                    </li>
                    <li>
                        <Link to="/" onMouseUp={closeMenu}>
                            Varför tillgänglighet?
                        </Link>
                    </li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};
export default LoginPage;
