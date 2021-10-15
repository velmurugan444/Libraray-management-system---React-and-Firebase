import React, { useState, } from 'react';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import { useDispatch } from 'react-redux';
import '../css/login.css';

export const Issuebook = () => {
    const dispatch = useDispatch();
    const [bookimage, setbookimage] = useState('');
    const [libraryId, setlibraryId] = useState('');
    const [category, setcategory] = useState('');
    const [bookname, setbookname] = useState('');
    const [bookid, setbookid] = useState('');
    const [startdate, setstartdate] = useState('');
    const [enddate, setenddate] = useState('');
    const [fine, setfine] = useState('');
    const { issueBook } = bindActionCreators(actionCreators, dispatch);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookimage === "" || libraryId === "" || category === "" || bookname === "" || bookid === "" || startdate === "" || enddate === "" || fine === "") {
            alert("please fill all fields");
        } else {
            issueBook(bookimage, libraryId, category, bookname, bookid, startdate, enddate, fine);
            alert("Book Issued Successfully");
            setbookimage('');
            setlibraryId('');
            setcategory('');
            setbookname('');
            setbookid('');
            setstartdate('');
            setenddate('');
            setfine('');
        }
    }

    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "3%" }}>
                <h3>ISSUE BOOK</h3>
                <form>
                    <div class="mb-3">
                        <label class="form-label">Student LibraryId</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Category</label>
                        <select class="form-control" value={category} onChange={(e) => setcategory(e.target.value)}>
                            <option>SELECT CATEGORY</option>
                            <option>EDUCATION</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Image</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={bookimage} onChange={(e) => setbookimage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={bookname} onChange={(e) => setbookname(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Book Id</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={bookid} onChange={(e) => setbookid(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Start Date</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" value={startdate} onChange={(e) => setstartdate(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">End Date</label>
                        <input type="date" class="form-control" id="exampleInputPassword1" value={enddate} onChange={(e) => setenddate(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Fine</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={fine} onChange={(e) => setfine(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Issue Book</button>

                </form>
            </div>
        </div>
    )
}
