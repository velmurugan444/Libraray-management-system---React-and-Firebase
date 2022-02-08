import React, { useState, } from 'react';
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import '../css/login.css';
import fire from '../files/firebase';

export const Issuebook = () => {
    const [bookimage, setbookimage] = useState('');
    const [libraryId, setlibraryId] = useState('');
    const [category, setcategory] = useState('');
    const [bookname, setbookname] = useState('');
    const [bookid, setbookid] = useState('');
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [fine, setfine] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        if (bookimage === "" || libraryId === "" || category === "" || bookname === "" || bookid === "" || startdate === "" || enddate === "" || fine === "") {
            alert("please fill all fields");
        } else {
            var date = new Date();
            var result = date.toISOString().split('T')[0];
            console.log(result);
            fire.firestore().collection("books-issued").add({
                currentdate: result,
                bookimage: bookimage,
                libraryId: libraryId,
                category: category,
                bookname: bookname,
                bookid: bookid,
                startdate: startdate,
                enddate: enddate,
                fine: fine,
                status: "pending"
            }).then(() => {
                alert("book issued successfully");
                setbookimage('');
                setlibraryId('');
                setcategory('');
                setbookname('');
                setbookid('');
                setstartdate('');
                setenddate('');
                setfine('');
            })
        }
    }

    return (
        <div>
            <Adminnavbar />
            <div className="container1" style={{ marginTop: "3%" }}>
                <h3>ISSUE BOOK</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Student LibraryId</label>
                        <input type="text" placeholder='Enter LibraryId' className="form-control" id="exampleInputEmail1" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Category</label>
                        <select class="form-control" value={category} onChange={(e) => setcategory(e.target.value)}>
                            <option disabled={true}>SELECT CATEGORY</option>
                            <option>EDUCATION</option>
                            <option>CODING</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Image</label>
                        <input type="text" placeholder='Enter Image Url' class="form-control" id="exampleInputPassword1" value={bookimage} onChange={(e) => setbookimage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Name</label>
                        <input type="text" placeholder='Enter Book Name' class="form-control" id="exampleInputPassword1" value={bookname} onChange={(e) => setbookname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Id</label>
                        <input type="text" placeholder='Enter Book Id' class="form-control" id="exampleInputPassword1" value={bookid} onChange={(e) => setbookid(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Start Date</label>
                        <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick start date" class="form-control" id="exampleInputPassword1" value={startdate} onChange={(e) => setstartdate(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">End Date</label>
                        <input type="text" onFocus={(e) => e.target.type = 'date'} placeholder="Pick end date" class="form-control" id="exampleInputPassword1" value={enddate} onChange={(e) => setenddate(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Fine</label>
                        <input type="text" placeholder='Enter Amount' class="form-control" id="exampleInputPassword1" value={fine} onChange={(e) => setfine(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Issue Book</button>

                </form>
            </div>
        </div>
    )
}
