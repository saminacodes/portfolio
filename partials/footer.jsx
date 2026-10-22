import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
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
