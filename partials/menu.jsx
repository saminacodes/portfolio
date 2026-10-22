import Link from "next/link";
import Socials from "../components/common/Socials";

export default function Menu({ id, onNavigate }) {
  return (
    <div className="menu" id={id}>
      <div className="wrapper">
        <ul className="nav-list">
          <li>
            <Link href="/" onClick={onNavigate}>Home</Link>
          </li>
          <li>
            <Link href="/blog" onClick={onNavigate}>Blog</Link>
          </li>
          <li>
            <Link href="/about" onClick={onNavigate}>About</Link>
          </li>
        </ul>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; {new Date().getFullYear()} saminacodes | All Rights Reserved
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
