import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { Studentnavbar } from '../components/Navbar/student_navbar';
import '../css/category.css';

export const Studentpage = () => {
    const dispatch = useDispatch();
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [requestbtn, setrequestbtn] = useState(true);
    const state = useSelector((state) => state.category);
    const studentdata = useSelector((state) => state.student);
    const { bookRequest } = bindActionCreators(actionCreators, dispatch);
    console.log(state);
    const requestFunction = (e) => {
        e.preventDefault();
        if (startdate === "" || enddate === "") {
            alert("pick start date and end date");
        } else {
            var bookimage = state.data.bookimage;
            var booktitle = state.data.booktitle;
            var bookid = state.data.bookid;
            var studentname = studentdata.data.name;
            var libraryId = studentdata.data.libraryId;
            bookRequest(bookimage, booktitle, bookid, studentname, libraryId, startdate, enddate);
            alert("Request has been successfully submitted to admin");
        }
    }
    return (
        <div>
            <Studentnavbar />
            <div className="container" style={{ width: "fit-content" }}  >
                <div className="card" >
                    {state.data.bookimage ?
                        <div> <img src={state.data.bookimage} width="auto" height="auto" />
                            <br /><br />
                            <h4>{state.data.booktitle}</h4>
                            <br />
                            <input type="date" value={startdate} onChange={(e) => setstartdate(e.target.value)} placeholder="start date" />
                            <br /><br />
                            <input type="date" placeholder="end date" value={enddate} onChange={(e) => setenddate(e.target.value)} />
                            <br /><br />
                            {requestbtn ? <button className="btn btn-danger" onClick={requestFunction}>REQUEST</button> : ""}
                        </div> : <div className="alert alert-danger">Search Books By Category</div>
                    }
                </div>
            </div>
        </div>
    )
}
