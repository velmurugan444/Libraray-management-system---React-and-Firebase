import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../combine_action_creator';
import { Homenavbar } from '../components/home_navbar';
import '../css/login.css';
import { useHistory } from 'react-router-dom';

export const Signupscreen = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const dispatch = useDispatch();
    const { studentLogin } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state) => state.student.data);
    const history = useHistory();
    console.log(state);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please enter email and password");
        } else {
            studentLogin(email, password);
            if (state.email == email && state.password == password) {
                history.push({ pathname: "/studentpage" })
            } else {

            }
        }
    }

    return (
        <div>
            <Homenavbar />
            <div className="container">
                <h3>STUDENT LOGIN</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}
