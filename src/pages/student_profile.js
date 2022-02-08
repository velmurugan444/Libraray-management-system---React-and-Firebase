import React from 'react'
import { Studentnavbar } from '../components/Navbar/student_navbar';
import '../css/student_profile.css';

export const Studentprofile = () => {

    return (
        <div>
            <Studentnavbar />
            <div className="container1">
                <h3>STUDENT PROFILE</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="name" defaultValue={localStorage.getItem('name')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Library Id</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="libraryId" defaultValue={localStorage.getItem('libraryId')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name="email" defaultValue={localStorage.getItem('email')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" defaultValue={localStorage.getItem('password')} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" name="address" defaultValue={localStorage.getItem('address')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile</label>
                        <input type="number" className="form-control" aria-describedby="emailHelp" name="mobile" defaultValue={localStorage.getItem('mobile')} />

                    </div>
                </form>
            </div>
        </div>
    )
}
