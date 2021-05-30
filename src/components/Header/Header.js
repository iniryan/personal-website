import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Header.css";
import Hamburger from "./Hamburger";
// import { gsap } from "gsap";

import { ReactComponent as UpArrow } from "../../assets/up-arrow-circle.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Moon } from "../../assets/night.svg";
import { ReactComponent as Sun } from "../../assets/sun.svg";

const Header = ({history,toggleMode,darkMode}) => {

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menu: <Menu />,
  });
  
  const [disabled, setDisabled] = useState(false);
  
  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menu: <Menu /> });
    });
  }, [history]);
  
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menu: <UpArrow />,
      });
      document.documentElement.style.overflowY = "hidden";
      // document.documentElement.style.opacity = 1;
    } else if (state.clicked === true) {
      setState({ clicked: !state.clicked, menu: <Menu /> });
      document.documentElement.style.overflowY = "auto";
      // document.documentElement.style.opacity = 1;
    } else if (state.clicked === false) {
      setState({ clicked: !state.clicked, menu: <UpArrow /> });
      document.documentElement.style.overflowY = "hidden";
      // document.documentElement.style.opacity = 1;
    }
  };
  
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // useEffect(() => {
  //   gsap.from(['.logo', '.mode', '.menu'],
  //     {
  //       y: 30,
  //       delay: 0.4,
  //       ease: "power3.InOut",
  //       opacity: 0,
  //      }, 0);
  // })

  return (
    <header id="header">
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">iniryan.</Link>
            </div>
            <div className="mode">
              <button onClick={() => {toggleMode()}} aria-label="mode"> 
              {darkMode ? (<Moon/>) : (<Sun/>)}
              </button>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu} aria-label="menu">
                {state.menu}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
