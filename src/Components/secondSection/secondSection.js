import React from "react";
import patternDesktop from "../../assets/images/bg-pattern-how-we-work-desktop.svg";
import patternMobile from "../../assets/images/bg-pattern-how-we-work-mobile.svg";
import ResizeScreen from "./../resizeScreen/resizeScreen";

class SecondSection extends React.Component {
  render() {
    return (
      <>
        <section aria-label="section-two" className="container py-5">
          <div className="row position-relative mx-md-5 p-5 my-5 bg-violet align-items-center">
            <div className="col-md-8 text-center text-md-start py-2">
              <h2 className="text-white display-5 ps-md-4 py-md-2 py-5">
                Find out more <br /> about how we work
              </h2>
            </div>

            <div className="col-md-4 ps-md-5 text-center">
              <div className="position-absolute top-0 end-0">
                <ResizeScreen
                  mobileImg={patternMobile}
                  desktopImg={patternDesktop}
                />
              </div>
              <a
                className="position-relative border active fw-bold border-2 ms-md-5 border-white px-4 py-2 text-white text-decoration-none "
                href="#ViewPlans"
              >
                HOW WE WORK
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SecondSection;
