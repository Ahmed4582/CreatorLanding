import React from "react";
import "./partners.css";
import psrtners from "../../Assets/partners.svg";

const PartnersSec = () => {
  return (
    <div className="container  my-5">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h3 className="fs-1 lh-1">
            Contact us today to explore partnership opportunities!
          </h3>
        </div>
        <div className="col-lg-12 my-5">
          <div class="card text-center">
            <div class="card-body ">
              <div className="row">
                <div className="col-lg-6 text-start mt-4">
                  <h2 className="fw-blod fs-3 lh-1">Partners:</h2>
                  <p className="fs-5 lh-5">
                    Our creative agency forms strong partnerships with diverse
                    businesses, from startups to global brands, based on trust,
                    respect, and a shared vision for success.
                  </p>
                </div>
                <div className="col-lg-5">
                  <div className="card styleCard">
                    <div className="card-body">
                      <div className="d-flex justify-content-between my-3">
                        <img alt="" src={psrtners} />
                        <p>2008-Today</p>
                      </div>
                      <p className="card-text">
                        Provides communication between the agency and brands.
                        Collects customer feedback and encourages discussion
                        about the product, which helps improve it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSec;
