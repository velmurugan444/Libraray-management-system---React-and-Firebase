import React, { Component } from "react";
import { Studentnavbar } from "../components/Navbar/student_navbar";

import Chart from "../components/chart";
class Bookstatistics extends Component {
  render() {
    return (
      <div className="App">
        <Studentnavbar />
        <Chart />
      </div>
    );
  }
}

export default Bookstatistics;
