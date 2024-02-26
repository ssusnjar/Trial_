import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo1 from '../../../src/assets/Logo.png';

function Header() {
  const [navbar, setNavbar] = useState(false);
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  return (
    <div className={styles.main}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <a href="/">
            <img src={Logo1} className={styles.logo}></img>
          </a>
        </div>

        <div className={styles.navbarRight}>
          <input
            type="checkbox"
            id={styles.check}
            className={styles.check}
            checked={navbar}
            onChange={toggleNavbar}
          ></input>
          <label htmlFor={styles.check} className={styles.checkbtn}>
            <FontAwesomeIcon icon={faBars} />
          </label>
          <ul className={styles.navbarList}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Početna
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oNama"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                O nama
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Usluge"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Usluge
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Projekti"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Projekti
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Kontakt"
                className={({ isActive }) =>
                  isActive ? styles.active : styles.inactive
                }
                onClick={closeNavbar}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
