import React from "react";
// import Logo from "../../Img/Logos & Description Card.png";
import char from "../../Assets/charity.svg";
import char2 from "../../Assets/charity2.svg";

const Raliability = () => {
  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 mb-3">
            <div>
              <img src={char} alt="" className="w-100" />
            </div>
          </div>
          <div className="col-lg-6 ">
            <div>
              <img src={char2} alt="" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Raliability;
