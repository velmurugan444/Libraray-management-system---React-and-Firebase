
import fire from '../files/firebase'

export const Login = (password) => {
    return (dispatch) => {
        try {
            fire.firestore().collection("admin").where("password", "==", password).get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                //console.log(data);
                if (data != null) {
                    return dispatch({
                        type: "LOGIN_SUCCESS",
                        payload: data,
                    });
                } if (data == "") {
                    return dispatch({
                        type: "LOGIN_FAILED",
                    });
                }

            }))
        } catch (error) {
            dispatch({
                type: "LOGIN_FAILED",
            })
        }
    }
}

export const Addstudent = (name, libraryId, email, password, address, mobile) => {
    return (dispatch) => {
        try {
            fire.auth().createUserWithEmailAndPassword(email, password).then(() => {
                fire.firestore().collection("students").add({
                    name: name,
                    libraryId: libraryId,
                    email: email,
                    password: password,
                    address: address,
                    mobile: mobile,
                }).then(() => {
                    console.log("student has been added successfully");
                })

            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const Addfeedback = (name, email, feedback) => {
    return (dispatch) => {
        try {
            fire.firestore().collection("feedback").add({
                name: name,
                email: email,
                feedback: feedback
            }).then(() => {
                console.log("feedback added successfully");
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const bookRequest = (bookimage, booktitle, bookid, studentname, libraryId, startdate, enddate) => {
    return (dispatch) => {
        try {
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
                console.log("Book requst has been succesfully submitted to admin");
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const studentLogin = (email, password) => {
    return (dispatch) => {
        try {
            fire.auth().signInWithEmailAndPassword(email, password).then(() => {
                fire.firestore().collection("students").where("email", "==", email).where("password", "==", password).get().then((snapshot) => {
                    snapshot.forEach((ele) => {
                        var data = ele.data();
                        if (data != null) {
                            return dispatch({
                                type: "LOGIN_SUCCESS",
                                payload: data,
                            })
                        } else {
                            return dispatch({
                                type: "LOGIN_FAILED",
                            });
                        }
                    })
                })
            });

        } catch (error) {
            dispatch({
                type: "LOGIN_FAILED",
            })
        }
    }
}

export const categoryData = (category) => {
    return (dispatch) => {
        try {
            fire.firestore().collection("Books").where("bookcategory", "==", category).get().then((snapshot) => snapshot.forEach((ele) => {
                var data = ele.data();
                if (data != null) {
                    return dispatch({
                        type: "DATA_SUCCESS",
                        payload: data,
                    })
                } else {
                    return dispatch({
                        type: "DATA_FAILED",
                    });
                }
            }))
        } catch (error) {
            return dispatch({
                type: "DATA_FAILED",
            });
        }
    }
}

export const Addbook = (BookId, Booklanguage, BookCategory, description, Booktitle, Bookauthor, Bookprice, Bookimage) => {
    return (dispatch) => {
        try {
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
                console.log("Book has been added successfully");
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const successMessage = (libraryId, booktitle, successmessage, key) => {
    return (dispatch) => {
        try {
            fire.firestore().collection("student-book-requests").doc(key).update({ status: "received" })
            fire.firestore().collection("success-messages").add({
                libraryId: libraryId,
                booktitle: booktitle,
                successmessage: successmessage
            }).then(() => console.log("Message has been sent"));
        } catch (error) {
            console.log(error);
        }
    }
}

export const rejectMessage = (libraryId, booktitle, rejectmessage, key) => {
    return (dispatch) => {
        try {
            fire.firestore().collection("student-book-requests").doc(key).update({ status: "received" })
            fire.firestore().collection("failure-messages").add({
                libraryId: libraryId,
                booktitle: booktitle,
                failuremessage: rejectmessage
            }).then(() => console.log("Message has been sent"));
        } catch (error) {
            console.log(error);
        }
    }
}

export const issueBook = (bookimage, libraryId, category, bookname, bookid, startdate, enddate, fine) => {
    return (dispatch) => {
        try {
            var currentDate = new Date()
            var day = currentDate.getDate()
            var month = currentDate.getMonth() + 1
            var fullyear = currentDate.getFullYear()
            var fulldate = fullyear + "-0" + month + "-" + day;
            fire.firestore().collection("books-issued").add({
                currentdate: fulldate,
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
                console.log("book issued successfully");
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const Addfine = (libraryId, bookid, fine) => {
    return (dispatch) => {
        try {
            var currentDate = new Date()
            var day = currentDate.getDate()
            var month = currentDate.getMonth() + 1
            var fullyear = currentDate.getFullYear()
            var fulldate = fullyear + "-0" + month + "-" + day;
            fire.firestore().collection("books-issued").where("libraryId", "==", libraryId).where("bookid", "==", bookid).get().then((snapshot) => {
                snapshot.forEach((ele) => {
                    var key = ele.id;
                    fire.firestore().collection("books-issued").doc(key).update({ fine: fine });
                    fire.firestore().collection("fine").add({
                        libraryId: libraryId,
                        bookid: bookid,
                        fine: fine,
                        status: "pending",
                        currentdate: fulldate
                    })
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
}