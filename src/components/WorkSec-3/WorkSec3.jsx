import React from "react";
import "./worksec3.css";
import img1 from "../../Img/Illustration.png";
import img2 from "../../Img/Illustration (1).png";
import img3 from "../../Img/Illustration (2).png";

const WorkSec3 = () => {
  return (
    <section className="my-5 ">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <h5 className="fs-5 fw-bold">1# Research & Analysis</h5>
            <p>
              Our agency's research-driven approach involves gathering insights
              into our clients' industries, competitors, and target audiences to
              develop tailored strategies that deliver exceptional results. This
              deep understanding allows us to create innovative and effective
              campaigns that resonate with our clients' audiences.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12  ">
            <img src={img1} className="w-100" alt="Img Research" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            <img src={img2} className="w-100" alt="Cocept Img" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-5 ">
            <h5 className="fs-5 fw-bold">2# Cocept Development</h5>
            <p>
              Based on the brief and research, the agency's creative team
              generates ideas for the campaign. These concepts are presented to
              the client for feedback and refinement.
            </p>
          </div>
          <div className="col-lg-6 order- col-md-6 col-sm-12 my-5 order-sm-1">
            <h5 className="fs-5 fw-bold">3# Design and execution:</h5>
            <p>
              Once the concept is approved, the agency's designers and
              developers bring it to life. This includes creating visual assets,
              writing copy, and developing multimedia content.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={img3} alt="Img Design" className="w-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSec3;
