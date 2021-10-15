
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { Studentnavbar } from '../components/Navbar/student_navbar';
import { useDispatch } from 'react-redux';

export const Feedbackpage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.student);
    const [formState, setformState] = useState({ name: state.data.name, libraryId: state.data.libraryId, email: state.data.email, password: state.data.password, address: state.data.address, mobile: state.data.mobile })
    const { name, libraryId, email, password, address, mobile } = formState;
    const [feedback, setfeedback] = useState('');
    const { Addfeedback } = bindActionCreators(actionCreators, dispatch);


    useEffect(() => {
        const formS = JSON.parse(localStorage.getItem("libraryId"));
        setformState((prev) => ({ ...prev, ...formS }));
    }, [])

    useEffect(() => {
        localStorage.setItem("libraryId", JSON.stringify(formState));
    }, [name, libraryId, email, password, address, mobile])
    const handleSubmit = (e) => {
        var name = state.data.name;
        var email = state.data.email;
        e.preventDefault();
        if (feedback === "") {
            alert("please enter feedback");
        } else {
            Addfeedback(name, email, feedback);
            alert("Feedback has been added successfully");
        }
    }

    return (
        <div>
            <Studentnavbar />
            <div className="container">
                <h3>GIVE FEEDBACK</h3>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} />

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Feedback</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={feedback} onChange={(e) => setfeedback(e.target.value)} />

                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}
