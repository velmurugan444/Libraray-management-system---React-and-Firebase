import React, { useState } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import fire from '../files/firebase';


export const Addstudent = () => {
    const [name, setname] = useState("");
    const [libraryId, setlibraryId] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [address, setaddress] = useState('');
    const [mobile, setmobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || libraryId === "" || email === "" || password === "" || address === "" || mobile === "") {
            alert("please fill all fields");
        } else {
            fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
                fire.firestore().collection("students").add({
                    name: name,
                    libraryId: libraryId,
                    email: email,
                    password: password,
                    address: address,
                    mobile: mobile,
                }).then(() => {
                    alert("student has been added successfully");
                    setname("");
                    setlibraryId("");
                    setemail("");
                    setpassword("");
                    setaddress("");
                    setmobile("");
                })

            })
        }
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container1" style={{ marginTop: "5%" }}>
                <h3>ADD STUDENT</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" placeholder='Enter Name' class="form-control" value={name} onChange={(e) => setname(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Library Id</label>
                        <input type="text" placeholder='Enter LibraryId' class="form-control" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" placeholder='Enter Email' class="form-control" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" placeholder='Enter Password' class="form-control" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" placeholder='Enter Address' class="form-control" value={address} onChange={(e) => setaddress(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" placeholder='Enter Mobile' class="form-control" value={mobile} onChange={(e) => setmobile(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Student</button>
                </form>
            </div>
        </div>
    )
}
