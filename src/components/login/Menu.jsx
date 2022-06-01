import './Menu.css';
import '../../index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    faHome,
    faCheck,
    faEye,
    faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginPage = ({ closeThisPage }) => {
    function closeMenu(event) {
        closeThisPage();
        event.preventDefault();
    }
    return (
        <div className="menu-page">
            <div className="page-header">
                <h1>Meny</h1>
            </div>
            <div className="page-main">
                <ul>
                    <li className="h5">
                        <Link to="/" onMouseUp={closeMenu}>
                            <FontAwesomeIcon icon={faHome} />
                            <span className="space"></span>
                            Hem
                        </Link>
                    </li>
                    <li className="h5">
                        <Link to="/checklist" onMouseUp={closeMenu}>
                            <FontAwesomeIcon icon={faCheck} />
                            <span className="space"></span>
                            Checklista
                        </Link>
                    </li>
                    <li className="h5">
                        <Link to="/accessibility" onMouseUp={closeMenu}>
                            <FontAwesomeIcon icon={faEye} />
                            <span className="space"></span>
                            Varför tillgänglighet?
                        </Link>
                    </li>
                    <li className="h5">
                        <a>
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <span className="space"></span>
                            Logga ut
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default LoginPage;
