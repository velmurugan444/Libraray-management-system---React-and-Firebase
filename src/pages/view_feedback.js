import React, { useState, useEffect } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import fire from '../files/firebase'


export const Viewfeedback = () => {
    const [feedback, setfeedback] = useState([]);
    useEffect(() => {
        fire.firestore().collection("feedback").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = ele.data();
            setfeedback(arr => [...arr, data]);
        }))
    }, [])
    return (
        <div>
            <Adminnavbar />
            {feedback != "" ?
                feedback.map((data, index) => {
                    return <div className="container" key={index}>
                        <div className="card">
                            <h4>NAME : {data.name}</h4>
                            <h4>EMAIL : {data.email}</h4>
                            <h4>FEEDBACK : {data.feedback}</h4>
                        </div>
                    </div>
                }) : <div className="container"><div className="alert alert-danger">No Feedback Available</div></div>
            }
        </div>
    )
}
