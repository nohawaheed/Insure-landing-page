import React from "react";
import PropTypes from "prop-types";

class FooterLinks extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-3 pb-5">
          <div className="pb-4">
            <h3 className="fs-6 fw-bold color-grayish-violet">
              {this.props.title}
            </h3>
          </div>
          <ul className="list-unstyled">
            <li className="pb-2">
              <a href="#test" className="text-decoration-none text-dark">
                {this.props.link1}
              </a>
            </li>
            <li className="pb-2">
              <a href="#test" className="text-decoration-none text-dark">
                {this.props.link2}
              </a>
            </li>
            {this.props.link3 ? (
              <li className="pb-2">
                <a href="#test" className="text-decoration-none text-dark">
                  {this.props.link3}
                </a>
              </li>
            ) : null}
            {this.props.link4 ? (
              <li className="pb-2">
                <a href="#test" className="text-decoration-none text-dark">
                  {this.props.link4}
                </a>
              </li>
            ) : null}
          </ul>
        </div>
      </>
    );
  }
}
FooterLinks.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string,
  link4: PropTypes.string,
};

export default FooterLinks;
