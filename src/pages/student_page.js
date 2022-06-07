import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import fire from "../files/firebase";

export const Studentpage = () => {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [requestbtn, setrequestbtn] = useState(true);
  const [category, setcategory] = useState("");
  const [data, setdata] = useState([]);
  const history = useHistory();

  const categoryFunction = () => {
    fire
      .firestore()
      .collection("Books")
      .where("bookcategory", "==", category)
      .get()
      .then(snapshot =>
        snapshot.forEach(ele => {
          var data = ele.data();
          setdata(arr => [...arr, data]);
        })
      );
  };

  const handleLogout = () => {
    fire.auth().signOut();
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-inverse" id="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a
                className="navbar-brand"
                href="#"
                style={{ color: "white", paddingTop: "23px" }}
              >
                LIBRARY MANAGEMENT APP
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right" id="navbar-right">
                <li>
                  {" "}<select
                    list="category"
                    value={category}
                    onChange={e => setcategory(e.target.value)}
                    name="browser"
                    id="browser"
                    placeholder="select category"
                    style={{
                      marginTop: "14px",
                      paddingLeft: "10px",
                      marginRight: "15px"
                    }}
                  >
                    <option value="CODING">SELECT CATEGORY</option>
                    <option value="CODING">CODING</option>
                    <option value="ANIMATION">ANIMATION</option>
                  </select>
                </li>

                <li>
                  <i
                    className="fa fa-search"
                    style={{
                      color: "white",
                      marginTop: "17px",
                      fontSize: "17px",
                      paddingLeft: "10px"
                    }}
                    onClick={categoryFunction}
                  />
                </li>
                <li>
                  <Link to="/studentpage" style={{ color: "white" }}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/yourbooks" style={{ color: "white" }}>
                    YOUR BOOKS
                  </Link>
                </li>
                <li>
                  <Link to="/notificationpage" style={{ color: "white" }}>
                    NOTIFICATIONS
                  </Link>
                </li>
                <li>
                  <Link to="/paymentscreen" style={{ color: "white" }}>
                    PAY
                  </Link>
                </li>
                <li>
                  <Link to="/feedbackpage" style={{ color: "white" }}>
                    FEEDBACK
                  </Link>
                </li>
                <li>
                  <Link to="/studentprofile" style={{ color: "white" }}>
                    <span className="glyphicon glyphicon-user" /> PROFILE
                  </Link>
                </li>
                <li>
                  <Link to="/bookstatistics" style={{ color: "white" }}>
                    STATISTICS
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout} style={{ color: "white" }}>
                    <span className="glyphicon glyphicon-log-in" />&nbsp; LOGOUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="div-container">
        {data
          ? data.map(data => {
              return (
                <div className="div-style">
                  <div className="container" style={{ width: "auto" }}>
                    <div className="card">
                      <img src={data.bookimage} width="210px" height="260px" />
                      <br />
                      <br />
                      <h4>
                        {data.booktitle}
                      </h4>
                      <br />
                      <input
                        type="text"
                        onFocus={e => (e.target.type = "date")}
                        placeholder="Pick start date"
                        value={startdate}
                        onChange={e => setstartdate(e.target.value)}
                      />
                      <br />
                      <br />
                      <input
                        type="text"
                        onFocus={e => (e.target.type = "date")}
                        placeholder="Pick end date"
                        value={enddate}
                        onChange={e => setenddate(e.target.value)}
                      />
                      <br />
                      <br />
                      {requestbtn
                        ? <button
                            className="btn btn-danger"
                            onClick={e => {
                              e.preventDefault();
                              if (startdate === "" || enddate === "") {
                                alert("pick start date and end date");
                              } else {
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
                                var bookimage = data.bookimage;
                                var booktitle = data.booktitle;
                                var bookid = data.bookid;
                                var studentname = localStorage.getItem("name");
                                var libraryId = localStorage.getItem(
                                  "libraryId"
                                );
                                fire
                                  .firestore()
                                  .collection("student-book-requests")
                                  .add({
                                    bookimage: bookimage,
                                    booktitle: booktitle,
                                    bookid: bookid,
                                    studentname: studentname,
                                    libraryId: libraryId,
                                    startdate: startdate,
                                    enddate: enddate,
                                    status: "pending",
                                    currentmonth: currentmonth
                                  })
                                  .then(() => {
                                    alert(
                                      "Book requst has been succesfully submitted to admin"
                                    );
                                  });
                              }
                            }}
                          >
                            REQUEST
                          </button>
                        : ""}
                    </div>{" "}
                  </div>
                </div>
              );
            })
          : <div className="alert alert-danger">Search Books By Category</div>}
      </div>
    </div>
  );
};
