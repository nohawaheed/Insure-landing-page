import React from "react";
import About from "../About/about";
import "./firstSection.css";
import snappyProcess from "../../assets/images/icon-snappy-process.svg";
import affordablePricess from "../../assets/images/icon-affordable-prices.svg";
import peopleFirst from "../../assets/images/icon-people-first.svg";

class FirstSection extends React.Component {
  render() {
    return (
      <>
        <main className="container pt-md-5 text-center text-md-start">
          <div className="line-style pt-md-5 mx-md-5">
            <h2 className="display-3 fw-bold pt-5">We’re different</h2>
          </div>
          <div className="row py-md-5 mx-md-5">
            <About
              img={snappyProcess}
              title="Snappy Process"
              body=" Our application process can be completed in minutes, not hours. Don’t get 
              stuck filling in tedious forms."
            />
            <About
              img={affordablePricess}
              title=" Affordable Prices"
              body="We don’t want you worrying about high monthly costs. Our prices may be low, 
              but we still offer the best coverage possible."
            />
            <About
              img={peopleFirst}
              title=" People First"
              body="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
              sure you’re covered when you need it."
            />
          </div>
        </main>
      </>
    );
  }
}
export default FirstSection;
