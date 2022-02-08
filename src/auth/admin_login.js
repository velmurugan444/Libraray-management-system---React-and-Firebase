import React, { useState, } from 'react';
import { useHistory } from 'react-router-dom';
import { Homenavbar } from '../components/home_navbar';
import '../css/login.css';
import fire from '../files/firebase'

export const Adminlogin = () => {
    const history = useHistory();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("enter email and password")
        } else {
            fire.firestore().collection("admin").where("password", "==", password).get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                if (data.email == email && data.password == password) {
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('password', data.password);
                    localStorage.setItem('address', data.address);
                    localStorage.setItem('mobile', data.mobile);
                    history.push({ pathname: "/todaybookrequest" })
                } else {
                    alert("invalid email or password");
                }
            }))
        }
    }
    return (
        <div>
            <Homenavbar />
            <div className="container1">
                <h3>ADMIN LOGIN</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" placeholder='Enter Email' className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setemail(e.target.value)} aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder='Enter Password' class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>

                </form>
            </div>
        </div>
    )
}
