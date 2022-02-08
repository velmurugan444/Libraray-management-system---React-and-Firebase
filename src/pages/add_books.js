import React, { useState } from 'react'
import { Adminnavbar } from '../components/Navbar/admin_navbar';
import '../css/login.css';
import fire from '../files/firebase';

export const Addbooks = () => {
    const [BookId, setBookId] = useState('');
    const [Booklanguage, setBooklanguage] = useState('');
    const [BookCategory, setBookCategory] = useState('');
    const [description, setdescription] = useState('');
    const [Booktitle, setBooktitle] = useState('');
    const [Bookauthor, setBookauthor] = useState('');
    const [Bookprice, setBookprice] = useState('');
    const [Bookimage, setBookimage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (BookId === "" || Booklanguage === "" || BookCategory === "" || description === "" || Booktitle === "" || Bookauthor === "" || Bookprice === "" || Bookimage === "") {
            alert("please fill all fields");
        } else {
            fire.firestore().collection("Books").add({
                bookid: BookId,
                booklanguage: Booklanguage,
                bookcategory: BookCategory,
                description: description,
                booktitle: Booktitle,
                bookauthor: Bookauthor,
                bookprice: Bookprice,
                bookimage: Bookimage,
            }).then(() => {
                alert("Book has been added successfully");
            })
            setBookId('');
            setBooklanguage('');
            setBookCategory('');
            setdescription('');
            setBooktitle('');
            setBookauthor('');
            setBookprice('');
            setBookimage('');
        }
    }
    return (
        <div>
            <Adminnavbar />
            <div className="container1" style={{ marginTop: "3%" }}>
                <h3>ADD BOOKS</h3>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Book Id</label>
                        <input type="text" placeholder='Enter Id' class="form-control" value={BookId} onChange={(e) => setBookId(e.target.value)} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Language</label>
                        <input type="text" placeholder='Enter Language' class="form-control" value={Booklanguage} onChange={(e) => setBooklanguage(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Category</label>
                        <input type="text" placeholder='Enter Category' class="form-control" value={BookCategory} onChange={(e) => setBookCategory(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <input type="text" placeholder='Enter Description' class="form-control" value={description} onChange={(e) => setdescription(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Title</label>
                        <input type="text" placeholder='Enter Title' class="form-control" value={Booktitle} onChange={(e) => setBooktitle(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Author</label>
                        <input type="text" placeholder='Enter Author' class="form-control" value={Bookauthor} onChange={(e) => setBookauthor(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Price</label>
                        <input type="text" class="form-control" placeholder='Enter Price' value={Bookprice} onChange={(e) => setBookprice(e.target.value)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Book Image</label>
                        <input type="text" class="form-control" placeholder='Enter Image Url' value={Bookimage} onChange={(e) => setBookimage(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary" onClick={handleSubmit} >Add Book</button>
                </form>
            </div>
        </div>
    )
}
