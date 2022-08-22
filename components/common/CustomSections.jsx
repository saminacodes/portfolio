export const CustomSections = (props) => {
  return (
    <section>
      <div className="wrapper">
        <div className="section-text">
          <h2 className={props.textColor}>{props.title}</h2>
          <p className="section-content">{props.content}</p>
          <a
            className="section-link"
            target="_blank"
            rel="noreferrer"
            href={props.link}
          >
            {props.linkText}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
            >
              <path
                d="M1 8H17M10 1L17 8L10 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
        <div>
          <img></img>
        </div>
      </div>
    </section>
  );
};