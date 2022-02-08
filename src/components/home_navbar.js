import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import '../css/navbar.css';

export const Homenavbar = () => {
    return (
        <div className="home">
            <nav className="navbar navbar-inverse" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" style={{ color: "white", paddingTop: "23px" }}>LIBRARY MANAGEMENT APP</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">

                        <ul className="nav navbar-nav navbar-right" id="navbar-right">
                            <li><Link to="/signup" style={{ color: "white" }}><span className="glyphicon glyphicon-user"></span> Student</Link></li>
                            <li><Link to="/admin" style={{ color: "white" }}><span className="glyphicon glyphicon-log-in"></span> Admin</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
