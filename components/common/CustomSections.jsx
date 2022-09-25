import Image from "next/image";

export const CustomSections = (props) => {
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
                >
                  <path
                    d="M1 8H17M10 1L17 8L10 15"
                    stroke="white"
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
                layout="intrinsic"
                width={480}
                height={480}
                objectFit="cover"
              ></Image>
            )}
            <div className={`bg-square ${props.bgColor}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
