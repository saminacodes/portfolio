import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div>
          <p className="contact-text">
            Download free coding <span> cheat sheets </span>
            on Ko-fi
          </p>
          <button className="button discord-button">
            <a
              target="_blank"
              rel="noreferrer"
              className="discord-button"
              href="https://ko-fi.com/saminacodes/shop"
            >
              <span>Support me on Ko-fi!</span>
            </a>
          </button>
        </div>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; 2023 saminacodes | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
