import React, { useState, } from 'react';
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import '../css/login.css';
import fire from '../files/firebase';

export const Retrievefine = () => {
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [fine, setfine] = useState([]);

    const handleSubmit = async (e) => {
        if (startdate === "" || enddate === "") {
            alert("please fill all fields");
        } else {
            fire.firestore().collection("fine").where("currentdate", ">=", startdate).where("currentdate", "<=", enddate).where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                setfine(arr => [...arr, data]);
            }))
        }
    }
    const receiveFunction = (libraryId, bookid) => {
        fire.firestore().collection("fine").where("libraryId", "==", libraryId).where("bookid", "==", bookid).get().then((snapshot) => snapshot.forEach((ele) => {
            var key = ele.id;
            fire.firestore().collection("fine").doc(key).update({ status: "received" }).then(() => {
                alert("fine received");
            });

        }))
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "3%" }}>
                <h3>RETRIEVE FINE</h3>
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
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Get</button>

                </form>
            </div >

            <div>
                {fine != "" ?
                    fine.map((data, index) => {
                        return <div className="container" style={{ marginTop: "3%" }} key={index}>
                            <div className="card">
                                <img src={data.bookimage} />
                                <br /><br />
                                <h4>LIBRARY ID : {data.libraryId}</h4>
                                <h4>BOOK ID : {data.bookid}</h4>
                                <h4>FINE : {data.fine}</h4>
                                <br />
                                <button type="button" className="btn btn-primary" onClick={receiveFunction(data.libraryId, data.bookid)}>Received</button>
                            </div>
                        </div>
                    }) : <div className="container" style={{ marginTop: "3%" }}><div className="alert alert-danger">No Fine Available</div></div>
                }
            </div>

        </div>

    )
}
