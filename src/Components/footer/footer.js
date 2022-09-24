import React from "react";
import "./footer.css";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import footermobilepattern from "../../assets/images/bg-pattern-footer-mobile.svg";
import footerdesktoppattern from "../../assets/images/bg-pattern-footer-desktop.svg";
import ResizeScreen from "../resizeScreen/resizeScreen";
import FooterLinks from "../footer links/footer links";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="container-fluid bg-gray position-relative py-2 ">
          <div className="position-absolute top-0 start-0">
            <ResizeScreen
              mobileImg={footermobilepattern}
              desktopImg={footerdesktoppattern}
            />
          </div>
          <div className="container position-relative">
            <div className="row ">
              <div className=" border-bottom d-flex flex-md-row flex-column justify-content-between pt-5 pb-4">
                <div className="text-center">
                  <img src={logo} alt="logo" className="img-fluid"></img>
                </div>
                <div className="text-center mt-5 mt-md-0">
                  <img
                    src={facebook}
                    alt="facebook-icon"
                    className="pe-3 img-fluid icon"
                  ></img>
                  <img
                    src={twitter}
                    alt="twitter-icon"
                    className="pe-3 img-fluid icon"
                  ></img>
                  <img
                    src={pinterest}
                    alt="pinterest-icon"
                    className="pe-3 img-fluid icon"
                  ></img>
                  <img
                    src={instagram}
                    alt="instagram-icon"
                    className=" img-fluid icon"
                  ></img>
                </div>
              </div>
            </div>
            <div className="row text-uppercase fw-bold pt-5 text-center text-md-start">
              <FooterLinks
                title="Our company"
                link1="How we work"
                link2="Why Insure?"
                link3="View plans"
                link4="Reviews"
              />
              <FooterLinks
                title="Help me"
                link1="FAQ"
                link2="Terms of use"
                link3="Privacy policy"
                link4="Cookies"
              />
              <FooterLinks
                title="Contact"
                link1="Sales"
                link2="Support"
                link3="Live chat"
              />
              <FooterLinks
                title="Others"
                link1="Careers"
                link2=" Press"
                link3="Licenses"
              />
            </div>
          </div>
          <div className="attribution d-flex justify-content-center">
            Challenge by
            <a
              href="https://www.frontendmentor.io/solutions/insure-landing-page-using-reactjs-K5KEQmKygG"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              Frontend Mentor
            </a>
            . Coded by
            <a
              href="https://www.frontendmentor.io/profile/nohawaheed"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              Noha Waheed
            </a>
            .
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
