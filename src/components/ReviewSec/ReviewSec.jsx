import React from "react";
import review from "../../Img/Component 1 (5).png";
import corsol from "../../Assets/review.svg";
import card1 from "../../Assets/card1.svg";
import card2 from "../../Assets/card2.svg";
import card3 from "../../Assets/card3.svg";
import "./review.css";

const ReviewSec = () => {
  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="mt-5">
            <p className="text-center mt-5">
              Hear from our customers from Top YouTube Channel
            </p>
            <div className="text-start my-5">
              <div>
                <img alt="img" src={review} className="w-100" />
              </div>
              <h5 className="fs-2 my-3">Now we can do it for you</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>See What Our Famous Clients</h5>
              <p>write about us:</p>
            </div>
            <div>
              <img alt="" src={corsol} className="w-100" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 mb-3">
              <div className="card card1" style={{ width: "Name18rem;" }}>
                <div className="card-body">
                  <img className="card-title w-25" alt="" src={card1} />
                  <h6 className="card-subtitle mb-2 text-muted">John Le</h6>
                  <p className="card-text text-start">
                    The Creator innovative ideas, strategic approach, and
                    outstanding results have left a lasting impression on me as
                    a blogger, making them a standout in the creative industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card card2" style={{ width: "Name18rem;" }}>
                <div className="card-body">
                  <img className="card-title w-25" alt="" src={card2} />
                  <h6 className="card-subtitle mb-2 text-muted">
                    Amanda Steen
                  </h6>
                  <p className="card-text text-start">
                    The Creator innovative ideas, strategic approach, and
                    outstanding results have left a lasting impression on me as
                    a blogger, making them a standout in the creative industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-3">
              <div className="card card1" style={{ width: "Name18rem;" }}>
                <div className="card-body">
                  <img className="card-title w-25" alt="" src={card3} />
                  <h6 className="card-subtitle mb-2 text-muted">
                    Nicholas Love
                  </h6>
                  <p className="card-text text-start">
                    The Creator innovative ideas, strategic approach, and
                    outstanding results have left a lasting impression on me as
                    a blogger, making them a standout in the creative industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSec;
