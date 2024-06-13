import React from "react";
import comp3 from "../../Img/Component 1 (2).png";

const WorkSec1 = () => {
  return (
    <section>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3 className="fs-1 fw-blod lh-5 ">
              Making it big on any Platform is tougher than you think
            </h3>
          </div>
          <div className="col-lg-12  col-md-12 col-sm-12 mt-5">
            <div>
              <img src={comp3} alt="Img Social" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSec1;
