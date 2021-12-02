import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link } from "react-scroll";
import "./BackToTop.css";
const BackToTop = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div className="circle" style={{ display: scroll ? "block" : "none" }}>
        <IconContext.Provider value={{ size: 50 }}>
          <Link to="header" smooth={true} duration={1000}>
            <BsFillArrowUpCircleFill />
          </Link>
        </IconContext.Provider>
      </div>
    </>
  );
};

export default BackToTop;
