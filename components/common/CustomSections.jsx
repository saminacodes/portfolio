import Image from "next/image";

export const CustomSections = (props) => {
  // Props: style, row, textColor for h2, titleType for h2, title for h2,
  //        imageLink, imageAlt, content, link, linkText, bgColor
  return (
    <section className={`block hero ${props.style}`}>
      <div className="wrapper">
        <div className={`row ${props.row}`}>
          <div className="col content-container">
            <h2 className={`${props.textColor} ${props.titleType}`}>
              {props.title}
            </h2>
            <p className="description">{props.content}</p>
            {props.link && (
              <a
                className="link"
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
                  aria-hidden="true"
                >
                  <path
                    d="M1 8H17M10 1L17 8L10 15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </div>
          <div className="col image-container">
            {props.imageLink && (
              <Image
                src={props.imageLink}
                fill
                alt={props.imageAlt || props.title || ""}
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 75vw, 480px"
              />
            )}
            <div className={`bg-square ${props.bgColor}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
