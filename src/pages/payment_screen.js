import React, { useState } from "react";
import { Homenavbar } from "../components/home_navbar";
import "../css/login.css";
import { useHistory } from "react-router-dom";
import fire from "../files/firebase";

export const Paymentscreen = () => {
  const [amount, setamount] = useState("");
  const history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter amount");
    } else {
      var options = {
        key: "rzp_test_o9r9ClyivHp69t",
        key_secret: "9i5OJ6MSBcxR4mQfbGHkT1aq",
        amount: amount * 100,
        currency: "INR",
        name: localStorage.getItem("name"),
        description: "for testing purpose",
        handler: function(response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: localStorage.getItem("name"),
          email: localStorage.getItem("email"),
          contact: localStorage.getItem("mobile")
        },
        notes: { address: "Razorpay Corporate office" },
        theme: { color: "#3399cc" }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div>
      <Homenavbar />
      <div className="container1">
        <h3>PAY FINE AMOUNT</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Enter Amount</label>
            <input
              type="number"
              placeholder="Enter Amount"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={amount}
              onChange={e => setamount(e.target.value)}
            />
          </div>

          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};
