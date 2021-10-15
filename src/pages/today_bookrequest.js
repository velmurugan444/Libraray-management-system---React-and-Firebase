import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import fire from '../files/firebase'

export const Todaybookrequest = () => {
    const [request, setrequest] = useState([]);
    const dispatch = useDispatch();
    const { successMessage } = bindActionCreators(actionCreators, dispatch);
    const { rejectMessage } = bindActionCreators(actionCreators, dispatch);
    useEffect(() => {
        fire.firestore().collection("student-book-requests").where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = ele.data();
            setrequest(arr => [...arr, data]);
            console.log(request);
        }))
    }, [])
    const accceptFunction = () => {
        request.map((data) => {
            var libraryId = data.libraryId;
            var booktitle = data.booktitle;
            fire.firestore().collection("student-book-requests").where("libraryId", "==", libraryId).get().then((snapshot) => snapshot.forEach((ele) => {
                var key = ele.id;
                var successmessage = "Your request has been accepted and Book will be issued soon....";
                //console.log(libraryId, booktitle, successmessage);
                successMessage(libraryId, booktitle, successmessage, key);
                alert("Request has been accepted");
            }))

        })
    }

    const rejectFunction = () => {
        request.map((data) => {
            var libraryId = data.libraryId;
            var booktitle = data.booktitle;
            fire.firestore().collection("student-book-requests").where("libraryId", "==", libraryId).get().then((snapshot) => snapshot.forEach((ele) => {
                var key = ele.id;
                var rejectmessage = "Your request has been rejected and This Book will be given to someone....";
                //console.log(libraryId, booktitle, successmessage);
                rejectMessage(libraryId, booktitle, rejectmessage, key);
                alert("Request has been rejected");
            }))

        })
    }
    return (
        <div>
            <Adminnavbar />
            {request != "" ?
                request.map((data, index) => {
                    return <div className="container" style={{ marginTop: "5%" }}>
                        <div className="card" key={index}>
                            <img src={data.bookimage} />
                            <br /><br />
                            <h4>{data.booktitle}</h4>
                            <h4>BOOK ID : {data.bookid}</h4>
                            <h4>STUDENT NAME : {data.studentname}</h4>
                            <h4>LIBRARY ID : {data.libraryId}</h4>
                            <br />
                            <div class="btn-group btn-group-lg" role="group" aria-label="...">
                                <button type="button" class="btn btn-secondary" onClick={accceptFunction} style={{ color: "green" }}>Accept</button>
                                <button type="button" class="btn btn-secondary" style={{ color: "red" }} onClick={rejectFunction}>Reject</button>
                            </div>
                        </div>
                    </div>
                }) : <div className="container"> <div className="alert alert-danger">No Bookrequests Available</div></div>
            }
        </div>
    )
}
