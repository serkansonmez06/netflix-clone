import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  // When scroll is a 100px (down in page) we add the navbar visibilty
  // if not remove visibility on navbar
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    //   Always use nav css, except when scrolling 100px down we want the black__navbar class
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG11.png"
        alt="Netflix Logo"
      />
      {/* Small corner logo */}
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
