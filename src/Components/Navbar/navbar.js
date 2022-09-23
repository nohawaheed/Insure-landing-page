import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import bgrightdesktopPattern from "../../assets/images/bg-pattern-intro-right-desktop.svg";
import bgrightmobilePattern from "../../assets/images/bg-pattern-intro-right-mobile.svg";
import navmobilePattern from "../../assets/images/bg-pattern-mobile-nav.svg";
import togglerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";
import ResizeScreen from "../resizeScreen/resizeScreen";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    let isOpen = this.state.isOpen;
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-white position-relative">
          <div className="container">
            <a className="navbar-brand fw-bold ps-3 ps-md-0" href="#Insure">
              <img alt="logo" src={logo}></img>
            </a>
            <img
              onClick={() => {
                this.handleClick();
              }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              aria-hidden="true"
              src={isOpen ? `${closeIcon}` : `${togglerIcon}`}
              alt=""
            ></img>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav changeBg ms-auto p-2 mb-2 mb-lg-0 py-2 fw-bold position-relative">
                <div className="mobile-nav-pattern d-none position-absolute">
                  <img
                    alt=""
                    aria-hidden="true"
                    className="img-fluid"
                    src={navmobilePattern}
                  ></img>
                </div>
                <li className="nav-item pt-3 pt-md-0">
                  <a
                    className="nav-link pe-md-3"
                    aria-current="page"
                    href="#HowWeWork"
                  >
                    HOW WE WORK
                  </a>
                </li>
                <li className="nav-item pt-3 pt-md-0">
                  <a className="nav-link pe-md-3" href="#Blog">
                    BLOG
                  </a>
                </li>
                <li className="nav-item pt-3 pt-md-0">
                  <a className="nav-link pe-md-4" href="#Account">
                    ACCOUNT
                  </a>
                </li>
                <li className="nav-item pt-3 pt-md-0 pb-5 mb-5 pb-md-0 mb-md-0">
                  <a
                    className="nav-link active-state border border-2 text-dark border-dark px-4 py-1 my-1"
                    href="#ViewPlans"
                  >
                    VIEW PLANS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" position-absolute top-0 end-0 pattern">
          <ResizeScreen
            mobileImg={bgrightmobilePattern}
            desktopImg={bgrightdesktopPattern}
          />
        </div>
      </>
    );
  }
}

export default Navbar;
