import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div>
          <p className="contact-text">
            Free coding visual <span> cheat sheets </span>
          </p>
          <button className="button discord-button">
            <a
              target="_blank"
              rel="noreferrer"
              className="discord-button"
              href="https://ko-fi.com/saminacodes/shop"
            >
              <span>Download</span>
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
