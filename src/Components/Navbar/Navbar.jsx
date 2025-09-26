import "./navbar.scss";
import headerlogo from "../../assets/headerlogo.png";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="nav-outer-container">
      <div className="nav-inner-container">
        <div className="nav-logo-container">
          <img src={headerlogo} alt="header-logo" className="nav-logo" />
        </div>
        <div className="nav-link-container">
          <div className="link">
            <a to={"/home"} className="text-[#545454] font-poppins">
              Home
            </a>
          </div>
          <div className="link">
            <a to={"/home"} className="text-[#545454] font-poppins ">
              Testimonials
            </a>
          </div>
          <div className="link">
            <a to={"/home"} className="text-[#545454] font-poppins">
              Solution
            </a>
          </div>
          <div className="link">
            <a to={"/home"} className="text-[#545454] font-poppins">
              Contact
            </a>
          </div>
        </div>

        <div className="nav-hamburger-container">
          <FaBars size={24} />
        </div>
      </div>
    </div>
  );
}
