import Link from "next/link";
import Socials from "../components/common/Socials";

export default function Menu() {
  function closeMenu() {
    document
      .querySelector("header button.hamburger")
      .classList.remove("is-active");
    document.querySelector("header .menu").classList.remove("active-menu");
    document.querySelector("body").classList.remove("active-menu");
  }

  return (
    <div className="menu">
      <div className="wrapper">
        <ul className="nav-list">
          <li>
            <Link href="/">
              <a onClick={closeMenu}>Home</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/setup">
              <a onClick={closeMenu}>Setup</a>
            </Link>
          </li> */}
          <li>
            <Link href="/about">
              <a onClick={closeMenu}>About</a>
            </Link>
          </li>
          <li>
            <Link href="https://saminacodes.medium.com/">
              <a onClick={closeMenu}>Blog</a>
            </Link>
          </li>
        </ul>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; 2024 saminacodes | All Rights Reserved
          </p>
        </div>
      </div>
      <div className="left-graphics graphics">
        <div className="yellow graphic"></div>
        <div className="blue graphic"></div>
      </div>
      <div className="right-graphics graphics">
        <div className="red graphic"></div>
        <div className="green graphic"></div>
      </div>
    </div>
  );
}
