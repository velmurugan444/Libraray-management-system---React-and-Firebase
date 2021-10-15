import React, { useState } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../combine_action_creator';
import { useSelector } from 'react-redux';

export const Fineupdate = () => {

    const [libraryId, setlibraryId] = useState('');
    const [bookid, setbookid] = useState("");
    const [fine, setfine] = useState('');
    const dispatch = useDispatch();
    const { Addfine } = bindActionCreators(actionCreators, dispatch);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (libraryId === "" || bookid === "" || fine === "") {
            alert("please fill all fields");
        } else {
            Addfine(libraryId, bookid, fine);
            alert("fine updated successfully");
            setlibraryId("");
            setbookid("");
            setfine("");
        }
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "5%" }}>
                <h3>UPDATE FINE</h3>
                <form>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Library Id</label>
                        <input type="text" class="form-control" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Book Id</label>
                        <input type="text" class="form-control" value={bookid} onChange={(e) => setbookid(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fine</label>
                        <input type="number" class="form-control" value={fine} onChange={(e) => setfine(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Fine</button>
                </form>
            </div>
        </div>
    )
}
