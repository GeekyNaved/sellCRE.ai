"use client";
import React, {useState} from "react";
import Image from "next/image";
import "./header.css";
// import styles from "./header.module.css";
import Button from "./Button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="container">
      <a
        className={openMenu ? "invisible" : "visible"}
        href="#"
        onClick={() => setOpenMenu(false)}
      >
        <Image
          width={100}
          height={100}
          src="/images/logo.png"
          className="logo"
          alt="logo"
        />
      </a>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="list">
          <li>
            <a className="link" onClick={() => setOpenMenu(false)} href="#">
              Features
            </a>
          </li>
          <li>
            <a className="link" onClick={() => setOpenMenu(false)} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="link" onClick={() => setOpenMenu(false)} href="#">
              Login
            </a>
          </li>
          <li>
            <a className="link" onClick={() => setOpenMenu(false)} href="#">
              <Button title="Try For Free" />
            </a>
          </li>
          <li className={openMenu ? "visible" : "invisible"}>
            <a to="/" onClick={() => setOpenMenu(false)}>
              <Image
                width={100}
                height={100}
                src="/images/logo.png"
                className="logo"
                alt="logo"
              />
            </a>
          </li>
        </ul>
        {/* nav icon  */}
        {/* <div className="mobile-navbar-btn">
          <div onClick={() => setOpenMenu(true)}>
            <IconMenu className="mobile-nav-icon" />
          </div>
          <AiOutlineClose
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
