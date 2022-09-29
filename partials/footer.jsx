import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div>
          <p className="contact-text">
            I am <span className="highlighted-text">always <br></br> advocating</span> for
            others.
          </p>
          <button className="button email-button">
            <a href="https://calendly.com/saminacodes">
              <span>Let's work together!</span>
              {/* <svg
                width="24"
                height="19"
                viewBox="0 0 24 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3333 18.8334H2.66659C2.04775 18.8334 1.45425 18.5876 1.01667 18.15C0.579084 17.7124 0.333252 17.1189 0.333252 16.5001V2.39858C0.359423 1.7975 0.616762 1.22977 1.05154 0.813899C1.48632 0.398031 2.06494 0.16618 2.66659 0.166749H21.3333C21.9521 0.166749 22.5456 0.412582 22.9832 0.850167C23.4208 1.28775 23.6666 1.88124 23.6666 2.50008V16.5001C23.6666 17.1189 23.4208 17.7124 22.9832 18.15C22.5456 18.5876 21.9521 18.8334 21.3333 18.8334ZM2.66659 4.67942V16.5001H21.3333V4.67942L11.9999 10.9001L2.66659 4.67942ZM3.59992 2.50008L11.9999 8.10008L20.3999 2.50008H3.59992Z"
                  fill="white"
                />
              </svg> */}
            </a>
          </button>
        </div>
        <div className="footer-socials">
          <Socials username="saminacodes"></Socials>
          <p className="copyright">
            &copy; 2022 saminacodes | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
