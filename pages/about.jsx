import { useState } from "react";
import { CustomSections } from "../components/common/CustomSections";
import { Question } from "../components/common/Questions";

const taurusStars = [
  { name: "Aldebaran", x: -0.93, y: 16.51, color: "var(--pastel-red)" },
  { name: "Elnath", x: -12.91, y: 28.61, color: "var(--pastel-yellow)" },
  { name: "Zeta", x: -15.61, y: 21.14, color: "var(--pastel-green)" },
  { name: "Gamma", x: 2.9, y: 15.63, color: "var(--pastel-purple)" },
  { name: "Delta1", x: 2.16, y: 17.54, color: "var(--pastel-blue)" },
  { name: "Epsilon", x: 0.81, y: 19.18, color: "var(--pastel-red)" },
  { name: "Theta2", x: 0.79, y: 15.87, color: "var(--pastel-yellow)" },
  { name: "Tau", x: -2.43, y: 22.96, color: "var(--pastel-green)" },
  { name: "Lambda", x: 7.45, y: 12.49, color: "var(--pastel-purple)" },
  { name: "Omicron", x: 15.98, y: 9.03, color: "var(--pastel-blue)" },
  { name: "Xi", x: 15.42, y: 9.73, color: "var(--pastel-red)" },
  { name: "Alcyone", x: 10.58, y: 24.1, color: "var(--pastel-yellow)" },
];

const taurusConnections = [
  ["Elnath", "Zeta"],
  ["Zeta", "Tau"],
  ["Tau", "Epsilon"],
  ["Epsilon", "Aldebaran"],
  ["Epsilon", "Delta1"],
  ["Delta1", "Gamma"],
  ["Epsilon", "Theta2"],
  ["Theta2", "Aldebaran"],
  ["Lambda", "Alcyone"],
  ["Alcyone", "Xi"],
  ["Xi", "Omicron"],
];

function TaurusConstellation() {
  const bounds = { left: -18, right: 20, top: 32, bottom: 5 };
  const toPoint = ({ x, y }) => ({
    x: 36 + ((x - bounds.left) / (bounds.right - bounds.left)) * 328,
    y: 30 + ((bounds.top - y) / (bounds.top - bounds.bottom)) * 250,
  });
  const starsByName = Object.fromEntries(taurusStars.map((star) => [star.name, star]));

  return (
    <aside className="taurus-card" aria-label="Taurus constellation star chart">
      <svg
        className="taurus-chart"
        viewBox="0 0 400 310"
        role="img"
        aria-labelledby="taurus-title taurus-description"
      >
        <title id="taurus-title">Taurus constellation</title>
        <desc id="taurus-description">
          A star chart showing Taurus, with the stars positioned using the coordinates provided.
        </desc>
        {taurusConnections.map(([from, to]) => {
          const start = toPoint(starsByName[from]);
          const end = toPoint(starsByName[to]);
          return (
            <line
              key={`${from}-${to}`}
              className="taurus-connection"
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
            />
          );
        })}
        {taurusStars.map((star, index) => {
          const point = toPoint(star);
          return (
            <g
              key={star.name}
              className="taurus-star-group"
              style={{ animationDelay: `${index * 0.23}s` }}
            >
              <circle
                className="taurus-star"
                cx={point.x}
                cy={point.y}
                r="2.7"
                fill={star.color}
              />
            </g>
          );
        })}
      </svg>
    </aside>
  );
}

export default function AboutPage() {
  const [frontPhoto, setFrontPhoto] = useState("top");

  return (
    <main id="about" className="about">
      <CustomSections
        title="Hello, World!"
        style="main-hero"
        titleType="main-title"
        textColor="red-text"
        imageFrame="polaroid"
        imageLink="/images/samina.jpg"
        content="My name is Samina and I just want to make you smile. ʕ•ᴥ•ʔ"
      />
      <section className="about-section">
        <div className="wrapper">
          <div className="about-gallery" role="group" aria-label="Photo gallery">
            <figure
              className={`gallery-polaroid gallery-polaroid-bottom ${
                frontPhoto === "bottom" ? "is-front" : ""
              }`}
              onMouseEnter={() => setFrontPhoto("bottom")}
              onFocus={() => setFrontPhoto("bottom")}
              onClick={() => setFrontPhoto("bottom")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setFrontPhoto("bottom");
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Bring the lower photo to the front"
            >
              <div className="gallery-photo-frame">
                <div className="gallery-photo-placeholder" aria-hidden="true" />
              </div>
              <figcaption>Add photo</figcaption>
            </figure>
            <figure
              className={`gallery-polaroid gallery-polaroid-top ${
                frontPhoto === "top" ? "is-front" : ""
              }`}
              onMouseEnter={() => setFrontPhoto("top")}
              onFocus={() => setFrontPhoto("top")}
              onClick={() => setFrontPhoto("top")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setFrontPhoto("top");
                }
              }}
              tabIndex={0}
              role="button"
              aria-label="Bring the upper photo to the front"
            >
              <div className="gallery-photo-frame">
                <div className="gallery-photo-placeholder" aria-hidden="true" />
              </div>
              <figcaption>Add photo</figcaption>
            </figure>
          </div>
          <div className="content-container">
            <h2 className="yellow-text">My Story</h2>
            <p className="about-text">
              I&apos;m a product manager working at the intersection of blockchain
              and AI at a startup called{" "}
              <a className="about-link" href="https://thirdweb.com">
                thirdweb
              </a>
              . I also enjoy creating content and working on small side projects
              to learn new things.
            </p>
            <p className="about-text">
              Outside of work, I&apos;m always up for quiet adventures like
              watching Studio Ghibli movies, {" "}
              <a
                className="about-link"
                href="https://www.goodreads.com/user/show/123932450-samina"
              >
                reading sci-fi and dystopian novels
              </a>
              ,
              playing video games, or doodling. If I&apos;m not at my laptop,
              you&apos;ll likely find me recharging at the movies, a museum, or a
              tennis court.
            </p>
          </div>
        </div>
      </section>
      <div className="faq-section">
        <div className="wrapper">
          <h2 className="blue-text">FAQ</h2>
          <div className="faq-layout">
            <div className="faq-container">
              <Question
                number="001"
                question="Where are you from?"
                answer="I am from Afghanistan. I live in the United States. "
              />
              <Question
                number="002"
                question="When did you start programming?"
                answer={[
                  "I started programming January 2018 with an introductory CS course at my University. My first programming language was technically JavaScript, but through a library called ",
                  <a key="p5js" href="https://p5js.org/">
                    p5.js
                  </a>,
                  ".",
                ]}
              />
              <Question
                number="003"
                question="Where is your profile pic from?"
                answer={[
                  "It was an art piece I commissioned from my favorite artist, ",
                  <a
                    key="test"
                    href="https://twitter.com/YungKhan/status/1583982316820779010?s=20&t=MGGLiBsL8kjQXWn7I1RsTg"
                  >
                    YungKhan.
                  </a>,
                ]}
              />
              <Question
                number="004"
                question="How can I contact you?"
                answer={[
                  "I am intentionally impossible to reach. If you have any inquiries related to thirdweb, please ",
                  <a key="test2" href="https://thirdweb.com/contact-us">
                    contact our team.
                  </a>,
                ]}
              />
            </div>
            <TaurusConstellation />
          </div>
        </div>
      </div>
    </main>
  );
}
