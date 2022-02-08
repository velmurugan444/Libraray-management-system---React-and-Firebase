import React, { useState } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar'
import fire from '../files/firebase';


export const Fineupdate = () => {

    const [libraryId, setlibraryId] = useState('');
    const [bookid, setbookid] = useState("");
    const [fine, setfine] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (libraryId === "" || bookid === "" || fine === "") {
            alert("please fill all fields");
        } else {
            var date = new Date();
            var result = date.toISOString().split('T')[0];
            console.log(result);
            fire.firestore().collection("books-issued").where("libraryId", "==", libraryId).where("bookid", "==", bookid).get().then((snapshot) => {
                snapshot.forEach((ele) => {
                    var key = ele.id;
                    fire.firestore().collection("books-issued").doc(key).update({ fine: fine }).then(() => {
                        fire.firestore().collection("fine").add({
                            libraryId: libraryId,
                            bookid: bookid,
                            fine: fine,
                            status: "pending",
                            currentdate: result
                        }).then(() => {
                            alert("fine updated successfully");
                            setlibraryId("");
                            setbookid("");
                            setfine("");
                        })
                    });

                })
            })

        }
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container1" style={{ marginTop: "5%" }}>
                <h3>UPDATE FINE</h3>
                <form>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Library Id</label>
                        <input type="text" placeholder='Enter LibraryId' class="form-control" value={libraryId} onChange={(e) => setlibraryId(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Book Id</label>
                        <input type="text" placeholder='Enter Id' class="form-control" value={bookid} onChange={(e) => setbookid(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Fine</label>
                        <input type="number" placeholder='Enter Amount' class="form-control" value={fine} onChange={(e) => setfine(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit}>Add Fine</button>
                </form>
            </div>
        </div>
    )
}
