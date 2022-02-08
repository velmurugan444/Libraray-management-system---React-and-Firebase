import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import fire from '../../files/firebase';
import '../../css/navbar.css';

export const Studentnavbar = () => {
    const history = useHistory();
    const handleLogout = () => {
        fire.auth().signOut();
        localStorage.clear();
        history.push({ pathname: "/" })
    }

    return (
        <div>
            <nav className="navbar navbar-inverse" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" style={{ color: "white", paddingTop: "23px" }}>LIBRARY MANAGEMENT APP</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right" id="navbar-right">
                            <li><Link to="/studentpage" style={{ color: "white" }}>HOME</Link></li>
                            <li><Link to="/yourbooks" style={{ color: "white" }}>YOUR BOOKS</Link></li>
                            <li><Link to="/notificationpage" style={{ color: "white" }}>NOTIFICATIONS</Link></li>
                            <li><Link to="/feedbackpage" style={{ color: "white" }}>FEEDBACK</Link></li>
                            <li><Link to="/studentprofile" style={{ color: "white" }}><span className="glyphicon glyphicon-user"></span> PROFILE</Link></li>
                            <li><Link onClick={handleLogout} style={{ color: "white" }}><span className="glyphicon glyphicon-log-in"></span>&nbsp; LOGOUT</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
