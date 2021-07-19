import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css'

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">PbATS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact activeClassName='text-warning' className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName='text-warning' className="nav-link" to="/">Profile</NavLink>
                            </li><li className="nav-item">
                                <NavLink exact activeClassName='text-warning' className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;