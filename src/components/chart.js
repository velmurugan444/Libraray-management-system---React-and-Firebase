import { CChart } from "@coreui/react-chartjs";
import React, { Component } from "react";
import fire from "../files/firebase";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  componentDidMount() {
    fire.firestore().collection("Total-Book-Requests").get().then(snapshot =>
      snapshot.forEach(ele => {
        var data = ele.data();
        console.log(data);
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
        fire.firestore().collection("Total-Fine-Amount").get().then(snapshot =>
          snapshot.forEach(ele => {
            var finedata = ele.data();
            localStorage.setItem("Januaryfine", finedata.January);
            localStorage.setItem("Februaryfine", finedata.February);
            localStorage.setItem("Marchfine", finedata.March);
            localStorage.setItem("Aprilfine", finedata.April);
            localStorage.setItem("Mayfine", finedata.May);
            localStorage.setItem("Junefine", finedata.June);
            localStorage.setItem("Julyfine", finedata.July);
            localStorage.setItem("Augustfine", finedata.August);
            localStorage.setItem("Septemberfine", finedata.September);
            localStorage.setItem("Octoberfine", finedata.October);
            localStorage.setItem("Novemberfine", finedata.November);
            localStorage.setItem("Decemberfine", finedata.December);
          })
        );
      })
    );
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div
        className="chart"
        style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
      >
        <h2>BOOK REQUEST CHART</h2>
        <CChart
          type="bar"
          data={{
            labels: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            datasets: [
              {
                label: "Book Requests",
                backgroundColor: "#f87979",
                data: [
                  localStorage.getItem("January"),
                  localStorage.getItem("February"),
                  localStorage.getItem("March"),
                  localStorage.getItem("April"),
                  localStorage.getItem("May"),
                  localStorage.getItem("June"),
                  localStorage.getItem("July"),
                  localStorage.getItem("August"),
                  localStorage.getItem("September"),
                  localStorage.getItem("October"),
                  localStorage.getItem("November"),
                  localStorage.getItem("December")
                ]
              }
            ]
          }}
          labels="months"
        />
        <br />
        <h2>FINE CHART</h2>
        <CChart
          type="bar"
          data={{
            labels: [
              "Jan",
              "Feb",
              "March",
              "April",
              "May",
              "June",
              "July",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            datasets: [
              {
                label: "Fine",
                backgroundColor: "#f87979",
                data: [
                  localStorage.getItem("Januaryfine"),
                  localStorage.getItem("Februaryfine"),
                  localStorage.getItem("Marchfine"),
                  localStorage.getItem("Aprilfine"),
                  localStorage.getItem("Mayfine"),
                  localStorage.getItem("Junefine"),
                  localStorage.getItem("Julyfine"),
                  localStorage.getItem("Augustfine"),
                  localStorage.getItem("Septemberfine"),
                  localStorage.getItem("Octoberfine"),
                  localStorage.getItem("Novemberfine"),
                  localStorage.getItem("Decemberfine")
                ]
              }
            ]
          }}
          labels="months"
        />
      </div>
    );
  }
}

export default Chart;
