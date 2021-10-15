import { data } from 'jquery';
import React, { useState, } from 'react';
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import '../css/login.css';
import fire from '../files/firebase';

export const Retrieveissuedbook = () => {
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [category, setcategory] = useState('');
    const [issuedbooks, setissuedbooks] = useState([]);

    const handleSubmit = async (e) => {
        if (startdate === "" || enddate === "" || category === "") {
            alert("please fill all fields");
        } else {
            fire.firestore().collection("books-issued").where("currentdate", ">=", startdate).where("currentdate", "<=", enddate).where("category", "==", category).where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                setissuedbooks(arr => [...arr, data]);
            }))
        }
    }
    const receiveFunction = (id) => {
        fire.firestore().collection("books-issued").where("libraryId", "==", id).get().then((snapshot) => snapshot.forEach((ele) => {
            var key = ele.id;
            fire.firestore().collection("books-issued").doc(key).update({ status: "received" })
        }))
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "3%" }}>
                <h3>RETRIEVE ISSUED BOOKS</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Start Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" value={startdate} onChange={(e) => setstartdate(e.target.value)} aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">End Date</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" value={enddate} onChange={(e) => setenddate(e.target.value)} />
                    </div>
                    <br />
                    <div class="mb-3">
                        <label className="form-label">Select Category</label>
                        <select value={category} onChange={(e) => setcategory(e.target.value)} className="form-control">
                            <option>SELECT CATEGORY</option>
                            <option>EDUCATION</option>
                        </select>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Get</button>

                </form>
            </div >

            <div>
                {issuedbooks != "" ?
                    issuedbooks.map((data, index) => {
                        return <div className="container" style={{ marginTop: "3%" }} key={index}>
                            <div className="card">
                                <img src={data.bookimage} />
                                <br /><br />
                                <h4>{data.bookname}</h4>
                                <h4>CATEGORY : {data.category}</h4>
                                <h4>LIBRARY ID : {data.libraryId}</h4>
                                <h4>START DATE : {data.startdate}</h4>
                                <h4>END DATE : {data.enddate}</h4>
                                <h4>FINE : {data.fine}</h4>
                                <br />
                                <button type="button" className="btn btn-primary" onClick={() => receiveFunction(data.libraryId)}>Received</button>
                            </div>
                        </div>
                    }) : <div className="container" style={{ marginTop: "3%" }}><div className="alert alert-danger">No Books Issued</div> </div>
                }
            </div>

        </div>

    )
}
