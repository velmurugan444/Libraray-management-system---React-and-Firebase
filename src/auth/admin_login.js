import React, { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { Homenavbar } from '../components/home_navbar';
import '../css/login.css';

export const Adminlogin = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { Login } = bindActionCreators(actionCreators, dispatch);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const state = useSelector((state) => state.admin.data);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("enter email and password")
        } else {
            Login(password);
            if (state.email === email && state.password === password) {
                history.push({ pathname: "/todaybookrequest" })
            } else {
                console.log("invalid email or password")
            }
        }
    }
    return (
        <div>
            <Homenavbar />
            <div className="container">
                <h3>ADMIN LOGIN</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setemail(e.target.value)} aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>

                </form>
            </div>
        </div>
    )
}
