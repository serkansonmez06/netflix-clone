import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();
  // When scroll is a 100px (down in page) we add the navbar visibilty
  // if not remove visibility on navbar

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    //   Always use nav css, except when scrolling 100px down we want the black__navbar class
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav__logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
        alt="Netflix Logo"
      />
      {/* Small corner logo */}
      <img
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
