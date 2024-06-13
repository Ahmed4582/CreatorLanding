import React from "react";
import "./heroSec.css";
import leftHand from "../../Assets/hand-1.svg";
import rightHand from "../../Assets/hand-2.svg";
import leftLine from "../../Assets/line1.svg";
import rightLine from "../../Assets/line2.svg";
import light from "../../Assets/light.svg";
import youtube from "../../Assets/youtube.svg";
import facebook from "../../Assets/facebook1.svg";
import instagram from "../../Assets/instagram1.svg";

const sec1 = () => {
  return (
    <section>
      <div>
        <div className="section-1 position-relative overflow-hidden">
          <div className="section1-text text-center">
            <h1 className="mb-2 section1-h1">
              Spark your brand's imaginative flair with us
            </h1>
            <p className="mb-0 section1-p position-relative">
              Our team combines strategy, design, and technology to breathe life
              into your brand. Collaborate with us to leave a lasting impression
              on your audience.
            </p>
            <form className="d-flex position-absolute mt-5 bg-white form-style justify-content-center align-items-center">
              <input
                type="text"
                className="input-style"
                placeholder="Enter Your Email"
              />
              <button className="btn-style">Join</button>
            </form>
          </div>
          <div className="left-hand position-relative z-3 d-none d-lg-block ">
            <img src={leftHand} alt="" className="d-" />
          </div>
          <div className="right-hand position-absolute end-0 d-none d-lg-block ">
            <img src={rightHand} alt="" />
          </div>
          <div className="leftLine position-absolute top-0 d-none d-lg-block ">
            <img src={leftLine} alt="" />
            <img
              src={light}
              className="position-absolute right-light translate-middle-y"
              alt=""
            />
            <img src={facebook} className="position-absolute facebook" alt="" />
            <img
              src={instagram}
              className="position-absolute instagram translate-middle-y"
              alt=""
            />
          </div>
          <div className="Rightline-1 position-absolute end-0 bottom-0 d-none d-lg-block ">
            <img src={rightLine} alt="" />
            <img
              src={light}
              className="position-absolute top-0 start-0"
              alt=""
            />
            <img src={youtube} className="position-absolute youtube" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default sec1;
