import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Studentnavbar } from '../components/Navbar/student_navbar';

export const Studentprofile = () => {
    const state = useSelector((state) => state.student);
    const [formState, setformState] = useState({ name: state.data.name, libraryId: state.data.libraryId, email: state.data.email, password: state.data.password, address: state.data.address, mobile: state.data.mobile })
    const { name, libraryId, email, password, address, mobile } = formState;

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setformState((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        const formS = JSON.parse(localStorage.getItem("libraryId"));
        setformState((prev) => ({ ...prev, ...formS }));
    }, [])

    useEffect(() => {
        localStorage.setItem("libraryId", JSON.stringify(formState));
    }, [name, libraryId, email, password, address, mobile])
    return (
        <div>
            <Studentnavbar />
            <div className="container">
                <h3>STUDENT PROFILE</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="name" value={name} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Library Id</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="libraryId" value={libraryId} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name="email" value={email} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="address" value={address} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="number" className="form-control" aria-describedby="emailHelp" name="mobile" value={mobile} onChange={handleChange} />

                    </div>
                </form>
            </div>
        </div>
    )
}
