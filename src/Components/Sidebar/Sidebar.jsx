import React from "react";
import "./Sidebar.css";
// import Logo from '../../assets/Logo.svg'
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <aside className="aside">
      <a href="#" className="nav__logo">
        <img src={logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="icon-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="icon-note"></i>
              </a>
            </li>
             
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="icon-bubble"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; {year}
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
