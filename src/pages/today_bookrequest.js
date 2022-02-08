import React, { useState, useEffect } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import fire from '../files/firebase'
import '../css/category.css'

export const Todaybookrequest = () => {
    const [request, setrequest] = useState([]);
    const [key, setkey] = useState('');
    useEffect(() => {
        fire.firestore().collection("student-book-requests").where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = { id: ele.id, data: ele.data() };
            setrequest(arr => [...arr, data]);
            console.log(request);
        }))
    }, [])


    return (
        <div>
            <Adminnavbar />
            {request != "" ?
                request.map((data, index) => {
                    return <div className="container1" style={{ marginTop: "5%" }}>
                        <div className="card" key={index}>
                            <img src={data.data.bookimage} width="210px" height="260px" />
                            <br /><br />
                            <h4>{data.data.booktitle}</h4>
                            <h4>BOOK ID : {data.data.bookid}</h4>
                            <h4>STUDENT NAME : {data.data.studentname}</h4>
                            <h4>LIBRARY ID : {data.data.libraryId}</h4>
                            <br />
                            <div class="btn-group btn-group-lg" role="group" aria-label="...">
                                <button type="button" class="btn btn-secondary" onClick={() => {
                                    var successmessage = "Your request has been accepted and Book will be issued soon....";
                                    //console.log(libraryId, booktitle, successmessage);
                                    fire.firestore().collection("student-book-requests").doc(data.id).update({ status: "received" })
                                    fire.firestore().collection("success-messages").add({
                                        libraryId: data.data.libraryId,
                                        booktitle: data.data.booktitle,
                                        successmessage: successmessage
                                    });
                                    alert("Message Sent to User");

                                }} style={{ color: "green" }}>Accept</button>
                                <button type="button" class="btn btn-secondary" style={{ color: "red" }} onClick={() => {
                                    var rejectmessage = "Your request has been rejected and This Book will be given to someone....";
                                    //console.log(libraryId, booktitle, successmessage);
                                    fire.firestore().collection("student-book-requests").doc(data.id).update({ status: "received" })
                                    fire.firestore().collection("failure-messages").add({
                                        libraryId: data.data.libraryId,
                                        booktitle: data.data.booktitle,
                                        failuremessage: rejectmessage
                                    });
                                    alert("Message Sent to User");
                                }}>Reject</button>
                            </div>
                        </div>
                    </div>
                }) : <div className="container1"> <div className="alert alert-danger">No Bookrequests Available</div></div>
            }
        </div>
    )
}
