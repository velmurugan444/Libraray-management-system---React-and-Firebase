import React, { useState, useEffect } from 'react'
import { Studentnavbar } from '../components/Navbar/student_navbar';
import fire from '../files/firebase';

export const Studentpage = () => {
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [requestbtn, setrequestbtn] = useState(true);
    const [data, setdata] = useState([]);
    useEffect(() => {
        fire.firestore().collection("Books").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = ele.data();
            setdata(arr => [...arr, data]);
        }))
    }, []);


    return (
        <div>
            <Studentnavbar />
            <div className='div-container'>
                {data ? data.map((data) => {
                    return <div className='div-style'><div className="container" style={{ width: "auto" }}>
                        <div className="card" > <img src={data.bookimage} width="210px" height="260px" />
                            <br /><br />
                            <h4>{data.booktitle}</h4>
                            <br />
                            <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick start date" value={startdate} onChange={(e) => setstartdate(e.target.value)} placeholder="start date" />
                            <br /><br />
                            <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick end date" placeholder="end date" value={enddate} onChange={(e) => setenddate(e.target.value)} />
                            <br /><br />
                            {requestbtn ? <button className="btn btn-danger" onClick={(e) => {
                                e.preventDefault();
                                if (startdate === "" || enddate === "") {
                                    alert("pick start date and end date");
                                } else {
                                    var bookimage = data.bookimage;
                                    var booktitle = data.booktitle;
                                    var bookid = data.bookid;
                                    var studentname = localStorage.getItem('name');
                                    var libraryId = localStorage.getItem('libraryId');
                                    fire.firestore().collection("student-book-requests").add({
                                        bookimage: bookimage,
                                        booktitle: booktitle,
                                        bookid: bookid,
                                        studentname: studentname,
                                        libraryId: libraryId,
                                        startdate: startdate,
                                        enddate: enddate,
                                        status: "pending"
                                    }).then(() => {
                                        alert("Book requst has been succesfully submitted to admin");
                                    })
                                }
                            }}>REQUEST</button> : ""}
                        </div> </div></div>
                }) : <div className="alert alert-danger">Search Books By Category</div>
                }
            </div>
        </div>
    )
}
