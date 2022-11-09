import Socials from "../components/common/Socials";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div>
          <p className="contact-text">
            Be a part of the
            <span className="highlighted-text"> dark mode </span> community.
          </p>
          <button className="button discord-button">
            <a
              target="_blank"
              rel="noreferrer"
              className="discord-button"
              href="https://discord.gg/NbDtMMBhH6"
            >
              <span>Join discord!</span>
              {
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.4129 5.28476C23.4709 4.37617 21.3945 3.71584 19.2236 3.33984C18.957 3.82186 18.6455 4.47018 18.4308 4.98591C16.1231 4.63887 13.8367 4.63887 11.5714 4.98591C11.3567 4.47018 11.0382 3.82186 10.7692 3.33984C8.59601 3.71584 6.51719 4.37859 4.57524 5.28957C0.658303 11.2086 -0.403514 16.9806 0.127396 22.6706C2.72531 24.6107 5.24301 25.7892 7.71822 26.5604C8.32936 25.7193 8.87442 24.8252 9.34397 23.8828C8.44969 23.543 7.59316 23.1237 6.78384 22.6369C6.99855 22.4778 7.20857 22.3115 7.41148 22.1404C12.3477 24.4492 17.7111 24.4492 22.5884 22.1404C22.7937 22.3115 23.0037 22.4778 23.2161 22.6369C22.4043 23.1261 21.5455 23.5454 20.6512 23.8853C21.1207 24.8252 21.6635 25.7217 22.2769 26.5628C24.7545 25.7916 27.2746 24.6131 29.8725 22.6706C30.4954 16.0744 28.8083 10.3554 25.4129 5.28476ZM10.0165 19.1713C8.53465 19.1713 7.31944 17.7879 7.31944 16.1033C7.31944 14.4187 8.5087 13.033 10.0165 13.033C11.5243 13.033 12.7394 14.4163 12.7135 16.1033C12.7158 17.7879 11.5243 19.1713 10.0165 19.1713ZM19.9834 19.1713C18.5016 19.1713 17.2864 17.7879 17.2864 16.1033C17.2864 14.4187 18.4756 13.033 19.9834 13.033C21.4912 13.033 22.7064 14.4163 22.6805 16.1033C22.6805 17.7879 21.4912 19.1713 19.9834 19.1713Z"
                    fill="white"
                  />
                </svg>
              }
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
