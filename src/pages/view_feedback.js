import React, { useState, useEffect } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import fire from '../files/firebase'


export const Viewfeedback = () => {
    const [feedback, setfeedback] = useState([]);
    useEffect(() => {
        fire.firestore().collection("feedback").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = { id: ele.id, data: ele.data() };
            setfeedback(arr => [...arr, data]);
        }))
    }, [])
    return (
        <div>
            <Adminnavbar />
            {feedback != "" ?
                feedback.map((data, index) => {
                    return <div className="container1" key={index}>
                        <div className="card">
                            &ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" style={{ color: "black", float: "right", fontSize: "24px", color: "red" }} aria-hidden="true" onClick={() => { fire.firestore().collection('feedback').doc(data.id).delete(); /*window.location.reload();*/ }}></i>
                            <h4>NAME : {data.data.name}</h4>
                            <h4>EMAIL : {data.data.email}</h4>
                            <h4>FEEDBACK : {data.data.feedback}</h4>
                        </div>
                    </div>
                }) : <div className="container1"><div className="alert alert-danger">No Feedback Available</div></div>
            }
        </div>
    )
}
