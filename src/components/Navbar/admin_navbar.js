import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../../css/navbar.css";

export const Adminnavbar = () => {
  const history = useHistory();
  const handleLogout = () => {
    history.push({ pathname: "/" });
    localStorage.clear();
  };
  return (
    <div>
      <nav class="navbar navbar-inverse" id="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <a
              class="navbar-brand"
              href="#"
              style={{ color: "white", paddingTop: "23px" }}
            >
              LIBRARY MANAGEMENT APP
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right" id="navbar-right">
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  VIEW<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/todaybookrequest" style={{ color: "white" }}>
                      BOOK REQUEST
                    </Link>
                  </li>
                  <li>
                    <Link to="/viewfeedback" style={{ color: "white" }}>
                      FEEDBACK
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  ISSUE BOOK<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/issuebook" style={{ color: "white" }}>
                      ISSUE BOOK
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  ADD<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/addstudent" style={{ color: "white" }}>
                      ADD STUDENT
                    </Link>
                  </li>
                  <li>
                    <Link to="/addbooks" style={{ color: "white" }}>
                      ADD BOOKS
                    </Link>
                  </li>
                  <li>
                    <Link to="/fineupdate" style={{ color: "white" }}>
                      ADD FINE
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  RETRIEVE<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/retrieveissuedbook" style={{ color: "white" }}>
                      ISSUED BOOK
                    </Link>
                  </li>
                  <li>
                    <Link to="/retrievefine" style={{ color: "white" }}>
                      FINE
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  DELETE<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/deletebooks" style={{ color: "white" }}>
                      DELETE BOOKS
                    </Link>
                  </li>
                </ul>
              </li>

              <li class="dropdown">
                <a
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  style={{ color: "white" }}
                >
                  STUDENT<span class="caret" />
                </a>
                <ul
                  class="dropdown-menu"
                  style={{ backgroundColor: "#d43f3a" }}
                  id="dropdown-menu"
                >
                  <li>
                    <Link to="/studentrecord">STUDENT INFO</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/adminprofile" style={{ color: "white" }}>
                  PROFILE
                </Link>
              </li>
              <li>
                <Link onClick={handleLogout} style={{ color: "white" }}>
                  <span class="glyphicon glyphicon-log-in" />&nbsp; LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
