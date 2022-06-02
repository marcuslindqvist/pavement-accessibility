import './header.css';
import Menu from '../login/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    faHome,
    faCheck,
    faEye,
    faDoorOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    function changeIsMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen === true) {
            setActiveClass('');
        } else setActiveClass('active');
    }

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeClass, setActiveClass] = useState('');

    return (
        <header className="page-header">
            {isMenuOpen ? (
                <Menu closeThisPage={changeIsMenuOpen} />
            ) : (
                <span></span>
            )}
            <Link to="/">
                <span className="h4" id="logo-text">
                    Pavement
                </span>
            </Link>
            <div className="nav-bar">
                <ul>
                    <li className="h5">
                        <Link to="/">
                            <FontAwesomeIcon icon={faHome} />
                            <span className="space"></span>
                            Hem
                        </Link>
                    </li>
                    <li className="h5">
                        <Link to="/checklist">
                            <FontAwesomeIcon icon={faCheck} />
                            <span className="space"></span>
                            Checklista
                        </Link>
                    </li>
                    <li className="h5">
                        <Link to="/accessibility">
                            <FontAwesomeIcon icon={faEye} />
                            <span className="space"></span>
                            Varför tillgänglighet?
                        </Link>
                    </li>
                    <li className="h5">
                        <a href="/">
                            <FontAwesomeIcon icon={faDoorOpen} />
                            <span className="space"></span>
                            Logga ut
                        </a>
                    </li>
                </ul>

                <button
                    className={`burger ${activeClass}`}
                    onClick={() => {
                        changeIsMenuOpen();
                    }}
                ></button>
            </div>
        </header>
    );
};
export default Header;
