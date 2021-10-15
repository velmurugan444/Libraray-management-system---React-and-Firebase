import React, { useState, useEffect } from 'react'
import fire from '../files/firebase';
import { useSelector } from 'react-redux';
import { Studentnavbar } from '../components/Navbar/student_navbar';

export const Yourbooks = () => {
    const state = useSelector(state => state.student);
    console.log(state);
    const [formstate, setformstate] = useState({ name: state.data.name, libraryId: state.data.libraryId, email: state.data.email, password: state.data.password, address: state.data.address, mobile: state.data.mobile });
    const { name, libraryId, email, password, address, mobile } = formstate;
    const [bookdata, setdata] = useState([]);

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setformstate((prev) => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        const formS = JSON.parse(localStorage.getItem("libraryId"));
        setformstate((prev) => ({ ...prev, ...formS }));
    }, [])

    useEffect(() => {
        localStorage.setItem("libraryId", JSON.stringify(formstate))
    }, [name, libraryId, email, password, address, mobile]);


    const Retrievefunction = () => {
        fire.firestore().collection("books-issued").where("libraryId", "==", libraryId).where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = ele.data();
            setdata(arr => [...arr, data]);
            console.log(data)
        }))
    }


    return (
        <div>

            <input type="hidden" className="form-control" aria-describedby="emailHelp" name="libraryId" value={libraryId} onChange={handleChange} />
            <Studentnavbar />

            {bookdata != "" ?
                bookdata.map((data, index) => {
                    return <div className="container" style={{ width: "fit-content" }} key={index}>
                        <div className="card">
                            <img src={data.bookimage} />
                            <br /><br />
                            <h4>{data.bookname}</h4>
                            <h4>START DATE : {data.startdate}</h4>

                            <h4>END DATE : {data.enddate}</h4>
                            <h4>FINE : {data.fine}</h4>
                        </div>
                    </div>
                }) : <div className="container"><div className="alert alert-danger">Your Book Cart Is Empty<br /><br /><button onClick={Retrievefunction} className="btn btn-primary">View Cart</button></div> </div>
            }
        </div>

    )
}
