import logo from "../../Assets/logo.svg";
import "./header.css";
export const Header = () => {
  return (
    <>
      <div className="nav-bar d-flex justify-content-evenly align-items-center pt-lg-4 flex-lg-row flex-md-column pt-sm-2">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="links">
          <ul className="list-unstyled d-flex justify-content-center align-items-center gap-lg-5 fw-medium mb-0">
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
        <div>
          <button className="join-btn fw-medium rounded-5 border-0">
            Join The Creator
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
