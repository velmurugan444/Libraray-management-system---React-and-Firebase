import React, { useState, useEffect } from 'react'
import { Studentnavbar } from '../components/Navbar/student_navbar'
import fire from '../files/firebase';
import '../css/notification.css';
import $ from 'jquery';

export const Notificationpage = () => {
    const [notification, setnotification] = useState([]);
    const [failnotification, setfailnotification] = useState([]);
    var libraryId = localStorage.getItem('libraryId');
    useEffect(() => {
        fire.firestore().collection("success-messages").where("libraryId", "==", libraryId).get().then((snapshot) => {
            snapshot.forEach((ele) => {
                var data = { id: ele.id, data: ele.data() };
                console.log(data.id);
                //console.log(data);
                setnotification(arr => [...arr, data]);
            })
        })
        fire.firestore().collection("failure-messages").where("libraryId", "==", libraryId).get().then((snapshot) => {
            snapshot.forEach((ele) => {
                var data = { id: ele.id, data: ele.data() };
                setfailnotification(arr => [...arr, data]);
            })
        })
    }, []);

    const fadeOut = () => {
        $("#alert").fadeOut();
    }
    return (
        <div>
            <Studentnavbar />
            {notification != "" || failnotification != "" ?
                notification.map((data, index) => {
                    return <div key={index}>
                        <div className="alert alert-success" id="alert" onClick={fadeOut}>{data.data.successmessage}&ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" style={{ color: "black", float: "right", fontSize: "24px", color: "red" }} aria-hidden="true" onClick={() => { fire.firestore().collection('success-messages').doc(data.id).delete(); }}></i></div>
                    </div>
                }) : <div className="container1"><div className="alert alert-danger">No Notifications Right Now<br /></div></div>
            }
            {
                failnotification.map((data, index) => {
                    return <div key={index}>
                        <div className="alert alert-danger" id="alert" onClick={fadeOut}>{data.data.failuremessage}&ensp;&ensp;&ensp;&ensp;<i className="fa fa-trash" style={{ color: "black", float: "right", fontSize: "24px", color: "red" }} aria-hidden="true" onClick={() => { fire.firestore().collection('failure-messages').doc(data.id).delete(); }}></i></div>
                    </div>
                })
            }
        </div>
    )
}
