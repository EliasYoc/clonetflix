import { useEffect, useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setShowNav(true) : setShowNav(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <nav className={`nav ${showNav && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="netflix logo"
      />
    </nav>
  );
};

export default Nav;
