import React, { useState, useEffect } from "react";
import { Adminnavbar } from "../components/Navbar/admin_navbar";
import fire from "../files/firebase";
import "../css/category.css";

export const Todaybookrequest = () => {
  const [request, setrequest] = useState([]);
  const [key, setkey] = useState("");
  useEffect(() => {
    fire
      .firestore()
      .collection("student-book-requests")
      .where("status", "==", "pending")
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          var data = { id: ele.id, data: ele.data() };
          setrequest(arr => [...arr, data]);
          console.log(request);
        })
      );

    fire.firestore().collection("Total-Book-Requests").get().then(snapshot =>
      snapshot.forEach(ele => {
        var data = ele.data();
        localStorage.setItem("January", data.January);
        localStorage.setItem("February", data.February);
        localStorage.setItem("March", data.March);
        localStorage.setItem("April", data.April);
        localStorage.setItem("May", data.May);
        localStorage.setItem("June", data.June);
        localStorage.setItem("July", data.July);
        localStorage.setItem("August", data.August);
        localStorage.setItem("September", data.September);
        localStorage.setItem("October", data.October);
        localStorage.setItem("November", data.November);
        localStorage.setItem("December", data.December);
      })
    );
  }, []);

  return (
    <div>
      <Adminnavbar />
      {request != ""
        ? request.map((data, index) => {
            return (
              <div className="container1" style={{ marginTop: "5%" }}>
                <div className="card" key={index}>
                  <img src={data.data.bookimage} width="210px" height="260px" />
                  <br />
                  <br />
                  <h4>
                    {data.data.booktitle}
                  </h4>
                  <h4>
                    BOOK ID : {data.data.bookid}
                  </h4>
                  <h4>
                    STUDENT NAME : {data.data.studentname}
                  </h4>
                  <h4>
                    LIBRARY ID : {data.data.libraryId}
                  </h4>
                  <br />
                  <div
                    class="btn-group btn-group-lg"
                    role="group"
                    aria-label="..."
                  >
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={() => {
                        const monthNames = [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December"
                        ];
                        const d = new Date();
                        var currentmonth = monthNames[d.getMonth()];
                        var January = localStorage.getItem("January");
                        var February = localStorage.getItem("February");
                        var March = localStorage.getItem("March");
                        var April = localStorage.getItem("April");
                        var May = localStorage.getItem("May");
                        var June = localStorage.getItem("June");
                        var July = localStorage.getItem("July");
                        var August = localStorage.getItem("August");
                        var September = localStorage.getItem("September");
                        var October = localStorage.getItem("October");
                        var November = localStorage.getItem("November");
                        var December = localStorage.getItem("December");

                        if (currentmonth == "January") {
                          January = parseInt(January) + 1;
                        } else if (currentmonth == "February") {
                          February = parseInt(February) + 1;
                        } else if (currentmonth == "March") {
                          March = parseInt(March) + 1;
                        } else if (currentmonth == "April") {
                          April = parseInt(April) + 1;
                        } else if (currentmonth == "May") {
                          May = parseInt(May) + 1;
                        } else if (currentmonth == "June") {
                          June = parseInt(June) + 1;
                        } else if (currentmonth == "July") {
                          July = parseInt(July) + 1;
                        } else if (currentmonth == "August") {
                          August = parseInt(August) + 1;
                        } else if (currentmonth == "September") {
                          September = parseInt(September) + 1;
                        } else if (currentmonth == "October") {
                          October = parseInt(October) + 1;
                        } else if (currentmonth == "November") {
                          November = parseInt(November) + 1;
                        } else {
                          December = parseInt(December) + 1;
                        }
                        var successmessage =
                          "Your request has been accepted and Book will be issued soon....";
                        //console.log(libraryId, booktitle, successmessage);
                        fire
                          .firestore()
                          .collection("student-book-requests")
                          .doc(data.id)
                          .update({ status: "received" });
                        fire
                          .firestore()
                          .collection("Total-Book-Requests")
                          .doc("QznGEmJU2vof0RAvrnlg")
                          .update({
                            January: January,
                            February: February,
                            March: March,
                            April: April,
                            May: May,
                            June: June,
                            July: July,
                            August: August,
                            September: September,
                            October: October,
                            November: November,
                            December: December
                          });
                        fire.firestore().collection("success-messages").add({
                          libraryId: data.data.libraryId,
                          booktitle: data.data.booktitle,
                          successmessage: successmessage
                        });
                        alert("Message Sent to User");
                      }}
                      style={{ color: "green" }}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      style={{ color: "red" }}
                      onClick={() => {
                        var rejectmessage =
                          "Your request has been rejected and This Book will be given to someone....";
                        //console.log(libraryId, booktitle, successmessage);
                        fire
                          .firestore()
                          .collection("student-book-requests")
                          .doc(data.id)
                          .update({ status: "received" });
                        fire.firestore().collection("failure-messages").add({
                          libraryId: data.data.libraryId,
                          booktitle: data.data.booktitle,
                          failuremessage: rejectmessage
                        });
                        /* fire
                           .firestore()
                           .collection(
                             "Total-Book-Requests"
                           )
                           .doc(data.id)
                           .update({
                             : "received"
                           }); */
                        alert("Message Sent to User");
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : <div className="container1">
            {" "}<div className="alert alert-danger">
              No Bookrequests Available
            </div>
          </div>}
    </div>
  );
};
