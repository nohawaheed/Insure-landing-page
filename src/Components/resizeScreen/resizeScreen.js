import { useState, useEffect } from "react";

const ResizeScreen = (props) => {
  // console.log(props);
  const [screenSize, setScreenSize] = useState({ isMobile: false });

  const handleChange = () => {
    setScreenSize({ isMobile: window.innerWidth <= 375 });
  };
  useEffect(() => {
    window.addEventListener("resize", handleChange);
    if (window.innerWidth <= 375) {
      setScreenSize({ isMobile: true });
    }
  }, []);

  return (
    <>
      <img
        src={screenSize.isMobile ? `${props.mobileImg}` : `${props.desktopImg}`}
        alt=""
        className="img-fluid"
        aria-hidden="true"
      ></img>
    </>
  );
};

export default ResizeScreen;
