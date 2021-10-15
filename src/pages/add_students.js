import React, { useState } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { useSelector } from 'react-redux';

export const Addstudent = () => {
    const [name, setname] = useState("");
    const [libraryId, setlibraryId] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [address, setaddress] = useState('');
    const [mobile, setmobile] = useState('');
    const dispatch = useDispatch();
    const { Addstudent } = bindActionCreators(actionCreators, dispatch);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || libraryId === "" || email === "" || password === "" || address === "" || mobile === "") {
            alert("please fill all fields");
        } else {
            Addstudent(name, libraryId, email, password, address, mobile);
            alert("student added successfully");
            setname("");
            setlibraryId("");
            setemail("");
            setpassword("");
            setaddress("");
            setmobile("");
        }
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "5%" }}>
                <h3>ADD STUDENT</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" value={name} onChange={(e) => setname(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Library Id</label>
                        <input type="text" class="form-control" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" class="form-control" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" class="form-control" value={address} onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" class="form-control" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Student</button>
                </form>
            </div>
        </div>
    )
}
