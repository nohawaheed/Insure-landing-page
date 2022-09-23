import React from "react";
import PropTypes from "prop-types";

class FooterLinks extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-3 pb-5">
          <div className="pb-4">
            <h4 className="fs-6 fw-bold color-grayish-violet">
              {this.props.title}
            </h4>
          </div>
          <ul className="list-unstyled">
            <li className="pb-2">
              <a
                href={`#${this.props.link1}`}
                className="text-decoration-none text-dark"
              >
                {this.props.link1}
              </a>
            </li>
            <li className="pb-2">
              <a
                href={`#${this.props.link2}`}
                className="text-decoration-none text-dark"
              >
                {this.props.link2}
              </a>
            </li>
            <li className="pb-2">
              <a
                href={`#${this.props.link3}`}
                className="text-decoration-none text-dark"
              >
                {this.props.link3}
              </a>
            </li>
            <li className="pb-2">
              <a
                href={`#${this.props.link4}`}
                className="text-decoration-none text-dark"
              >
                {this.props.link4}
              </a>
            </li>
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
