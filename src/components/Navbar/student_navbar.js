import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import fire from '../../files/firebase';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../combine_action_creator';
import { useDispatch } from 'react-redux';

export const Studentnavbar = () => {
    const dispatch = useDispatch();
    const [category, setcategory] = useState('');
    const { categoryData } = bindActionCreators(actionCreators, dispatch);
    const history = useHistory();
    const handleLogout = () => {
        fire.auth().signOut();
        localStorage.clear();
        history.push({ pathname: "/" })
    }
    const categoryFunction = () => {
        categoryData(category);
    }
    console.log(category);
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">LIBRARY MANAGEMENT SYSTEM</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li> <input list="category" value={category} onChange={(e) => setcategory(e.target.value)} name="browser" id="browser" placeholder="select category" style={{ marginTop: "12px" }} /><datalist id="category"><option value="EDUCATION"><option value="COMICS"></option></option></datalist></li>

                            <li><i className="fa fa-search" style={{ color: "white", marginTop: "17px", fontSize: "17px", paddingLeft: "10px" }} onClick={categoryFunction}></i></li>
                            <li className="active"><Link to="/studentpage">HOME</Link></li>
                            <li><Link to="/yourbooks">YOUR BOOKS</Link></li>
                            <li><Link to="/notificationpage">NOTIFICATIONS</Link></li>
                            <li><Link to="/feedbackpage">FEEDBACK</Link></li>
                            <li><Link to="/studentprofile"><span className="glyphicon glyphicon-user"></span> PROFILE</Link></li>
                            <li><Link onClick={handleLogout}><span className="glyphicon glyphicon-log-in"></span> LOGOUT</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
