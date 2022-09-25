import React from "react";
import "./header.css";
import bigFamilyImage from "../../assets/images/image-intro-desktop.jpg";
import bigBgLeftPattern from "../../assets/images/bg-pattern-intro-left-desktop.svg";
import smallFamilyImage from "../../assets/images/image-intro-mobile.jpg";
import smallBgLeftPattern from "../../assets/images/bg-pattern-intro-left-mobile.svg";
import ResizeScreen from "../resizeScreen/resizeScreen";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className=" bg-violet mb-5 pb-5 position-relative">
          <div className="container pt-md-5 py-md-2">
            <div className="row pt-md-2 pb-5 px-md-5">
              <div className=" col-md-7 pt-4 pb-md-4 text-white text-md-start text-center">
                <div className="line d-none d-md-block"></div>
                <h1 className="display-3 lh-1 pt-5 pt-md-2">
                  Humanizing <br /> your insurance.
                </h1>
                <p className="pt-3 pb-4 small">
                  Get your life insurance coverage easier and faster. We blend
                  our expertise <br /> and technology to help you find the plan
                  that’s right for you. Ensure you <br /> and your loved ones
                  are protected.
                </p>
                <a
                  className="border active fw-bold border-2 border-white px-4 py-2 text-white text-decoration-none "
                  href="#ViewPlans"
                >
                  VIEW PLANS
                </a>
              </div>
              <div className="col-md-5 mx-md-5 pt-md-5 order-first order-md-last family-img">
                <ResizeScreen
                  mobileImg={smallFamilyImage}
                  desktopImg={bigFamilyImage}
                />
              </div>
            </div>
          </div>
          <div className=" position-absolute pattern-left start-0">
            <ResizeScreen
              mobileImg={smallBgLeftPattern}
              desktopImg={bigBgLeftPattern}
            />
          </div>
        </header>
      </>
    );
  }
}

export default Header;
