import { useState, useRef } from "react";
import Link from "next/link";
import Menu from "./menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const headerRef = useRef(null);

  function toggleMenu() {
    const next = !isMenuOpen;
    setIsMenuOpen(next);
    buttonRef.current.classList.toggle("is-active");
    let menu = headerRef.current.querySelector(".menu");
    let body = document.querySelector("body");

    menu.classList.toggle("active-menu");
    body.classList.toggle("active-menu");
  }

  function closeMenu() {
    setIsMenuOpen(false);
    buttonRef.current?.classList.remove("is-active");
    headerRef.current?.querySelector(".menu")?.classList.remove("active-menu");
    document.body.classList.remove("active-menu");
  }

  return (
    <header id="main-header" className="header" ref={headerRef}>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <Link href="/">saminacodes</Link>
          </div>
          <Menu id="main-menu" onNavigate={closeMenu} />
          <button
            className="hamburger hamburger--collapse"
            type="button"
            ref={buttonRef}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
