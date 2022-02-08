
import React, { useState } from 'react'
import { Studentnavbar } from '../components/Navbar/student_navbar';
import fire from '../files/firebase';
import '../css/feedback_page.css';

export const Feedbackpage = () => {
    const [feedback, setfeedback] = useState('');
    const handleSubmit = (e) => {
        var name = localStorage.getItem('name');
        var email = localStorage.getItem('email');
        e.preventDefault();
        if (feedback === "") {
            alert("please enter feedback");
        } else {
            fire.firestore().collection("feedback").add({
                name: name,
                email: email,
                feedback: feedback
            }).then(() => {
                alert("feedback added successfully");
                setfeedback("");
            })
        }

    }

    return (
        <div>
            <Studentnavbar />
            <div className="container1">
                <h3>GIVE FEEDBACK</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('name')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={localStorage.getItem('email')} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Feedback</label>
                        <input type="text" className="form-control" placeholder='Enter Feedback' id="exampleInputEmail1" aria-describedby="emailHelp" value={feedback} onChange={(e) => setfeedback(e.target.value)} />

                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
