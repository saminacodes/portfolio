import Link from "next/link";

export default function Menu() {
  function closeMenu() {
    document
      .querySelector("header button.hamburger")
      .classList.remove("is-active");
    document
      .querySelector("header .mobile-menu")
      .classList.remove("active-menu");
  }

  return (
    <div className="mobile-menu">
      <div className="wrapper">
        <ul className="mobile nav-list">
          <li>
            <Link href="/">
              <a onClick={closeMenu}>home</a>
            </Link>
            <Link href="/setup">
              <a onClick={closeMenu}>setup</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
