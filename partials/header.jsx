import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Menu from "./menu";

export default function Header() {
  const buttonRef = useRef(null);
  const headerRef = useRef(null);

  function toggleMenu() {
    buttonRef.current.classList.toggle("is-active");
    let menu = headerRef.current.querySelector('.menu');
    let body = document.querySelector('body');
    console.log(body);

    menu.classList.toggle('active-menu');
    body.classList.toggle('active-menu');
  }

  // const router = useRouter();

  // useEffect(() => {
  //   const homeLink = menuRef.current.querySelector(".home-link");
  //   const setupLink = menuRef.current.querySelector(".setup-link");

  //   if (router.asPath === "/") {
  //     homeLink.classList.add("active");
  //     setupLink.classList.remove("active");
  //   } else if (router.asPath === "/setup") {
  //     homeLink.classList.remove("active");
  //     setupLink.classList.add("active");
  //   }
  // }, [router.asPath]);

  return (
    <header id="main-header" className="header" ref={headerRef}>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <Link href="/">
              <a>saminacodes</a>
            </Link>
          </div>
          <button
            className="hamburger hamburger--collapse"
            type="button"
            ref={buttonRef}
            onClick={toggleMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
        <Menu />
      </div>
    </header>
  );
}
