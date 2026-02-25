import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div>
          <p className="contact-text">
            Build apps
            <span>
              <br />
              with Replit
            </span>
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className="button discord-button"
            href="https://replit.com/refer/saminacodes"
          >
            <span>Get $10 in Credits</span>
          </a>
        </div>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; {new Date().getFullYear()} saminacodes | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
