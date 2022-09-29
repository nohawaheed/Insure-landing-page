import React from "react";

class About extends React.Component {
  constructor(props) {
    super();
    // console.log(props);
  }
  render() {
    return (
      <>
        <div className="col-md-4 pt-5">
          <img
            className="img-fluid"
            alt=""
            aria-hidden="true"
            src={this.props.img}
          />
          <h3 className="pt-4 pb-2 fs-4"> {this.props.title}</h3>
          <p className="color-grayish-violet">{this.props.body}</p>
        </div>
      </>
    );
  }
}

export default About;
