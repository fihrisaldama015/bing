import React, { useState } from "react";
import "./Navbar.css";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FcMenu } from "react-icons/fc";
import { FcCollapse } from "react-icons/fc";
import { IconContext } from "react-icons";
import LogoUPN from "./Assets/Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  // const history = useHistory();
  // const handleArticle = useCallback(() => history.push("/#date"), [history]);
  // const handleAbout = useCallback(() => history.push("/#about"), [history]);
  const [navbar, setNavbar] = useState(false);
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => setMenu(!menu);
  const closeMenu = () => setMenu(true);
  const changePosition = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  return (
    <div>
      <nav className="main-navbar navDesktop">
        <ul>
          <li>
            <img src={LogoUPN} alt="logo" width="55" />
          </li>
          <IconContext.Provider value={{ size: 30 }}>
            {/* onClick={() => window.location.replace("/#date")} */}
            <Link to="date" smooth={true} duration={1000}>
              <li class="link">
                <FaGraduationCap />
                <div>ARTICLE</div>
              </li>
            </Link>
            {/* onClick={() => window.location.replace("/#about")} */}

            <Link to="about" smooth={true} duration={1000}>
              <li class="link">
                <BsFillPersonFill />
                <div>ABOUT US</div>
              </li>
            </Link>
          </IconContext.Provider>
        </ul>
      </nav>
      <nav className={navbar ? "navMobile active" : "navMobile "}>
        <ul
          className={menu ? "Box-shadow" : ""}
          style={{ backgroundColor: menu ? "#fff" : "var(--grey)" }}
        >
          <li>
            <img src={LogoUPN} alt="logo" width="55" />
          </li>
          {/* <IconContext.Provider value={{ size: 30 }}>
            <li class="nav-menu">
            <Link to="date" smooth={true} duration={1000}>
                <FaGraduationCap />
              </Link>
            </li>
            <li class="nav-menu">
            <Link to="about" smooth={true} duration={1000}>
                <BsFillPersonFill />
              </Link>
              </li>
            </IconContext.Provider> */}
          <li></li>
          <li class="toggle" onClick={toggleMenu}>
            <IconContext.Provider value={{ size: 30 }}>
              {menu ? <FcMenu /> : <FcCollapse />}
            </IconContext.Provider>
          </li>
          <div className="menuBar" style={{ display: menu ? "none" : "block" }}>
            <Link to="date" smooth={true} duration={1000}>
              <li className="menuLInk" onClick={closeMenu}>
                <p className="Box-shadow Rounded">ARTICLE</p>
              </li>
            </Link>
            <Link to="about" smooth={true} duration={1000}>
              <li className="menuLInk" onClick={closeMenu}>
                <p className="Box-shadow Rounded">ABOUT US</p>
              </li>
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
