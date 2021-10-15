import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Adminnavbar } from '../components/Navbar/admin_navbar'

export const Adminprofile = () => {
    const state = useSelector((state) => state.admin);
    const [formState, setformState] = useState({ name: state.data.name, email: state.data.email, password: state.data.password, address: state.data.address, mobile: state.data.mobile })
    const { name, email, password, address, mobile } = formState;
    useEffect(() => {
        const formS = JSON.parse(localStorage.getItem("admin"));
        setformState((prev) => ({ ...prev, ...formS }));
    }, [])

    useEffect(() => {
        localStorage.setItem("admin", JSON.stringify(formState));
    }, [name, email, password, address, mobile])

    return (
        <div>
            <Adminnavbar />
            <div className="container">
                <h3>ADMIN PROFILE</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" value={password} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={address} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Mobile</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={mobile} />

                    </div>
                </form>
            </div>
        </div>
    )
}
