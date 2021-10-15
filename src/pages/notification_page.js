import React, { useState, useEffect } from 'react'
import { Studentnavbar } from '../components/Navbar/student_navbar'
import fire from '../files/firebase';
import { useDispatch, useSelector } from 'react-redux';
import $ from 'jquery';

export const Notificationpage = () => {
    const [notification, setnotification] = useState([]);
    const [failnotification, setfailnotification] = useState([]);
    const state = useSelector(state => state.student);
    const [formstate, setformstate] = useState({ name: state.data.name, libraryId: state.data.libraryId, email: state.data.email, password: state.data.password, address: state.data.address, mobile: state.data.mobile });
    const { name, libraryId, email, password, address, mobile } = formstate;


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
        fire.firestore().collection("success-messages").where("libraryId", "==", libraryId).get().then((snapshot) => {
            snapshot.forEach((ele) => {
                var data = ele.data();
                setnotification(arr => [...arr, data]);
            })
        })
        fire.firestore().collection("failure-messages").where("libraryId", "==", libraryId).get().then((snapshot) => {
            snapshot.forEach((ele) => {
                var data = ele.data();
                setfailnotification(arr => [...arr, data]);
            })
        })
    }
    const fadeOut = () => {
        $("#alert").fadeOut();
    }
    return (
        <div>
            <input type="hidden" className="form-control" aria-describedby="emailHelp" name="libraryId" value={libraryId} onChange={handleChange} />
            <Studentnavbar />
            {notification != "" || failnotification != "" ?
                notification.map((data, index) => {
                    return <div key={index}>
                        <div className="alert alert-success" id="alert" onClick={fadeOut}>{data.successmessage}</div>
                    </div>
                }) : <div className="container"><div className="alert alert-danger">No Notifications Right Now<br /><br /><button onClick={Retrievefunction} className="btn btn-primary">View Notifications</button></div></div>
            }
            {
                failnotification.map((data, index) => {
                    return <div key={index}>
                        <div className="alert alert-danger" id="alert" onClick={fadeOut}>{data.failuremessage}</div>
                    </div>
                })
            }
        </div>
    )
}
