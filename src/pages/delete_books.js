import React, { useState, useEffect } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar'
import fire from '../files/firebase';

export const Deletebooks = () => {
    const [category, setcategory] = useState('');
    const [books, setbooks] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (category === "") {
            alert("please select category");
        } else {
            fire.firestore().collection("Books").where("bookcategory", "==", category).get().then((snapshot) => snapshot.forEach((ele) => {

                var data = ele.data();
                setbooks(arr => [...arr, data]);
            })
            );

        }
    }

    const deleteBooks = (title) => {
        alert(title);
        fire.firestore().collection("Books").where("booktitle", "==", title).get().then((snapshot) => {
            snapshot.forEach((ele) => {
                var key = ele.id;
                fire.firestore().collection("Books").doc(key).delete().then(() => {
                    alert("book deleted successfully");
                });

            })
        })
    }

    return (
        <div>
            <Adminnavbar />
            <div className="container" style={{ marginTop: "3%" }}>
                <div className="card">
                    <h4>DELETE BOOKS</h4>
                    <div class="mb-3">
                        <label className="form-label">Select Category</label>
                        <select className="form-control" value={category} onChange={(e) => setcategory(e.target.value)}>
                            <option>SELECT CATEGORY</option>
                            <option>EDUCATION</option>
                        </select>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Get</button>
                </div>
            </div>
            {
                books.map((data, index) => {
                    return <div className="container" style={{ marginTop: "3%" }} key={index}>
                        <div className="card">
                            <img src={data.bookimage} />
                            <br />
                            <h4>{data.booktitle}</h4>
                            <button type="button" className="btn btn-primary" onClick={() => deleteBooks(data.booktitle)} >Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
