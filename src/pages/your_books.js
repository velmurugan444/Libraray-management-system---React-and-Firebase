import React, { useState, useEffect } from 'react'
import fire from '../files/firebase';
import { Studentnavbar } from '../components/Navbar/student_navbar';
import '../css/your_books.css';

export const Yourbooks = () => {

    const [bookdata, setdata] = useState([]);
    var libraryId = localStorage.getItem('libraryId');
    useEffect(() => {
        fire.firestore().collection("books-issued").where("libraryId", "==", libraryId).where("status", "==", "pending").get().then((snapshot) => snapshot.forEach((ele) => {
            var data = ele.data();
            setdata(arr => [...arr, data]);
            console.log(data)
        }))
    }, []);


    return (
        <div>
            <Studentnavbar />

            {bookdata != "" ?
                bookdata.map((data, index) => {
                    return <div className="container2" key={index}>
                        <div className="card">
                            <img src={data.bookimage} width="210px" height="260px" />
                            <br /><br />
                            <h4>{data.bookname}</h4>
                            <h4>START DATE : {data.startdate}</h4>

                            <h4>END DATE : {data.enddate}</h4>
                            <h4>FINE : {data.fine}</h4>
                        </div>
                    </div>
                }) : <div className="container3"><div className="alert alert-danger">Your Book Cart Is Empty<br /></div> </div>
            }
        </div>

    )
}
