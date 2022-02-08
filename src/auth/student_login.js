import React, { useState } from 'react'
import { Homenavbar } from '../components/home_navbar';
import '../css/login.css';
import { useHistory } from 'react-router-dom';
import fire from '../files/firebase'

export const Signupscreen = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please enter email and password");
        } else {
            fire.firestore().collection("students").where("password", "==", password).get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                console.log(data);
                if (data.email == email && data.password == password) {
                    localStorage.setItem('name', data.name);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('password', data.password);
                    localStorage.setItem('address', data.address);
                    localStorage.setItem('libraryId', data.libraryId);
                    localStorage.setItem('mobile', data.mobile);
                    history.push({ pathname: "/studentpage" })
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
                <h3>STUDENT LOGIN</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" placeholder='Enter Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setemail(e.target.value)} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" placeholder='Enter Password' className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>
                </form>
            </div>
        </div>
    )
}
