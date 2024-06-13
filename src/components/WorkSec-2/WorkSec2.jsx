import React from "react";
import "../HeroSec/heroSec.css";
import leftHand from "../../Assets/hand-1.svg";
import rightHand from "../../Assets/hand-2.svg";
import leftLine from "../../Assets/line1.svg";
import rightLine from "../../Assets/line2.svg";
import light from "../../Assets/light.svg";
import youtube from "../../Assets/youtube.svg";
import facebook from "../../Assets/facebook1.svg";
import instagram from "../../Assets/instagram1.svg";

const WorkSec2 = () => {
  return (
    <section className="my-5">
      <div>
        <div className="section-1 position-relative overflow-hidden">
          <div className="section1-text text-center">
            <h1 className="mb-2 section1-h1">
              We do it for you. No more struggling to grow on any Platform
            </h1>
            <h4 className="my-4 fs-5 fw-bold">
              Work with our expert strategists writers, editors, and producers
              to create content that transforms your content
            </h4>
            <p className="mb-0 section1-p position-relative">
              No managing a team of freelancers or spending countless hours
              trying to master all the skillsets Platform requires - all you
              need is The Creator.
            </p>
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

export default WorkSec2;
