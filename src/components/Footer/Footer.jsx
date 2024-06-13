import "./footer.css";
import cobyRight from "../../Assets/Cobyright.svg";
import faceBook from "../../Assets/Facbook.svg";
import instagram from "../../Assets/instagram.svg";
import linkedin from "../../Assets/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="my-5 ">
      <div className="footer">
        <div className="footer-text d-flex flex-column  align-items-center mb-3 ">
          <h1 className="mb-3 fw-bold mb-4">
            We are waiting for you to contact us
          </h1>
          <p className="mb-4 fw-medium">
            You can write to us at any time and get an instant response.
          </p>
        </div>
        <form className="d-flex position-relative bg-white mb-3 form-style justify-content-center align-items-center mb-5">
          <input
            type="text"
            className="input-style"
            placeholder="Enter Your Email"
          />
          <button className="btn-style">Join</button>
        </form>
        <div className="footer-links d-flex justify-content-around align-align-items-center flex-sm-column flex-lg-row ">
          <div className="coby-right d-flex justify-content-center align-items-center mb-5">
            <img src={cobyRight} alt="" />
            <p className="mb-0">Copywriting</p>
          </div>
          <div className="links ">
            <ul className="d-flex mb-0 justify-content-center align-items-center list-unstyled gap-3 mb-5">
              <li>
                <a className="text-decoration-none text-black" href="/">
                  Partners
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="/">
                  How we Work
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="/">
                  Review
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-black" href="/">
                  Charity
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-icon d-flex align-items-center gap-3 mb-5">
            <a href="/">
              <img src={instagram} alt="" />
            </a>
            <a href="/">
              <img src={faceBook} alt="" />
            </a>
            <a href="/">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
