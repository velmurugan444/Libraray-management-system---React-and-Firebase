import React, { useState, useEffect } from "react";
import { Adminnavbar } from "../components/Navbar/admin_navbar";
import fire from "../files/firebase";

export const Fineupdate = () => {
  const [libraryId, setlibraryId] = useState("");
  const [bookid, setbookid] = useState("");
  const [fine, setfine] = useState("");
  useEffect(() => {
    fire.firestore().collection("Total-Fine-Amount").get().then(snapshot =>
      snapshot.forEach(ele => {
        var data = ele.data();
        localStorage.setItem("Januaryfine", data.January);
        localStorage.setItem("Februaryfine", data.February);
        localStorage.setItem("Marchfine", data.March);
        localStorage.setItem("Aprilfine", data.April);
        localStorage.setItem("Mayfine", data.May);
        localStorage.setItem("Junefine", data.June);
        localStorage.setItem("Julyfine", data.July);
        localStorage.setItem("Augustfine", data.August);
        localStorage.setItem("Septemberfine", data.September);
        localStorage.setItem("Octoberfine", data.October);
        localStorage.setItem("Novemberfine", data.November);
        localStorage.setItem("Decemberfine", data.December);
      })
    );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (libraryId === "" || bookid === "" || fine === "") {
      alert("please fill all fields");
    } else {
      var date = new Date();
      var result = date.toISOString().split("T")[0];
      console.log(result);
      fire
        .firestore()
        .collection("books-issued")
        .where("libraryId", "==", libraryId)
        .where("bookid", "==", bookid)
        .get()
        .then(snapshot => {
          snapshot.forEach(ele => {
            var key = ele.id;
            console.log(key);
            fire
              .firestore()
              .collection("books-issued")
              .doc(key)
              .update({ fine: fine })
              .then(() => {
                fire
                  .firestore()
                  .collection("fine")
                  .add({
                    libraryId: libraryId,
                    bookid: bookid,
                    fine: fine,
                    status: "pending",
                    currentdate: result
                  })
                  .then(() => {
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
                    var January = localStorage.getItem("Januaryfine");
                    var February = localStorage.getItem("Februaryfine");
                    var March = localStorage.getItem("Marchfine");
                    var April = localStorage.getItem("Aprilfine");
                    var May = localStorage.getItem("Mayfine");
                    var June = localStorage.getItem("Junefine");
                    var July = localStorage.getItem("Julyfine");
                    var August = localStorage.getItem("Augustfine");
                    var September = localStorage.getItem("Septemberfine");
                    var October = localStorage.getItem("Octoberfine");
                    var November = localStorage.getItem("Novemberfine");
                    var December = localStorage.getItem("Decemberfine");

                    if (currentmonth == "January") {
                      January = parseInt(January) + parseInt(fine);
                    } else if (currentmonth == "February") {
                      February = parseInt(February) + parseInt(fine);
                    } else if (currentmonth == "March") {
                      March = parseInt(March) + parseInt(fine);
                    } else if (currentmonth == "April") {
                      April = parseInt(April) + parseInt(fine);
                    } else if (currentmonth == "May") {
                      May = parseInt(May) + parseInt(fine);
                    } else if (currentmonth == "June") {
                      June = parseInt(June) + parseInt(fine);
                    } else if (currentmonth == "July") {
                      July = parseInt(July) + parseInt(fine);
                    } else if (currentmonth == "August") {
                      August = parseInt(August) + parseInt(fine);
                    } else if (currentmonth == "September") {
                      September = parseInt(September) + parseInt(fine);
                    } else if (currentmonth == "October") {
                      October = parseInt(October) + parseInt(fine);
                    } else if (currentmonth == "November") {
                      November = parseInt(November) + parseInt(fine);
                    } else {
                      December = parseInt(December) + parseInt(fine);
                    }
                    fire
                      .firestore()
                      .collection("Total-Fine-Amount")
                      .doc("20ifFSlEb1bttU6fWeW4")
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
                    alert("fine updated successfully");
                    setlibraryId("");
                    setbookid("");
                    setfine("");
                  });
              });
          });
        });
    }
  };
  return (
    <div>
      <Adminnavbar />
      <div className="container1" style={{ marginTop: "5%" }}>
        <h3>UPDATE FINE</h3>
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Library Id
            </label>
            <input
              type="text"
              placeholder="Enter LibraryId"
              class="form-control"
              value={libraryId}
              onChange={e => setlibraryId(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Book Id
            </label>
            <input
              type="text"
              placeholder="Enter Id"
              class="form-control"
              value={bookid}
              onChange={e => setbookid(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Fine
            </label>
            <input
              type="number"
              placeholder="Enter Amount"
              class="form-control"
              value={fine}
              onChange={e => setfine(e.target.value)}
            />
          </div>
          <br />
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Add Fine
          </button>
        </form>
      </div>
    </div>
  );
};
