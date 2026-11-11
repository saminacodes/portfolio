import { useState } from "react";
import Image from "next/image";
import { CustomSections } from "../components/common/CustomSections";
import { Question } from "../components/common/Questions";

const taurusStars = [
  { name: "Aldebaran", designation: "α Tauri", magnitude: "1.0", ra: 4.5987, dec: 16.5098, color: "#ff6f69" },
  { name: "Elnath", designation: "β Tauri", magnitude: "1.7", ra: 5.4382, dec: 28.6079, color: "#67aaf9" },
  { name: "Alcyone", designation: "η Tauri", magnitude: "2.9", ra: 3.7914, dec: 24.1053, color: "#ffcc5c" },
  { name: "Tianguan", designation: "ζ Tauri", magnitude: "2.9", ra: 5.6274, dec: 21.1426, color: "#ffcc5c" },
  { name: "Chamukuy", designation: "θ² Tauri", magnitude: "3.4", ra: 4.4777, dec: 15.8709, color: "#ffcc5c" },
  { name: "λ Tauri", designation: "λ Tauri · Bibing", magnitude: "3.5", ra: 4.0113, dec: 12.4904, color: "#9896ce" },
  { name: "Ain", designation: "ε Tauri", magnitude: "3.6", ra: 4.4769, dec: 19.1805, color: "#67aaf9" },
  { name: "O-Tau", designation: "ο Tauri", magnitude: "3.6", ra: 3.4136, dec: 9.0291, color: "#ffcc5c" },
  { name: "Atlas", designation: "27 Tauri", magnitude: "3.6", ra: 3.8194, dec: 24.0535, color: "#96ceb4" },
  { name: "Prima Hyadum", designation: "γ Tauri", magnitude: "3.7", ra: 4.3299, dec: 15.6277, color: "#96ceb4" },
];

const taurusConnections = [
  // The horns meet the Hyades face at Ain and Prima Hyadum.
  ["Elnath", "Ain"],
  ["Aldebaran", "Tianguan"],
  ["Ain", "Aldebaran"],
  ["Prima Hyadum", "Ain"],
  ["Prima Hyadum", "λ Tauri"],
  ["Prima Hyadum", "Atlas"],
  // Outline the Hyades face with the stars included in this chart.
  ["Aldebaran", "Chamukuy"],
  ["Prima Hyadum", "Chamukuy"],
  // The lower body extends from λ Tauri toward O-Tau.
  ["λ Tauri", "O-Tau"],
];

function TaurusConstellation() {
  const [activeStar, setActiveStar] = useState(null);
  const bounds = { left: -18, right: 20, top: 32, bottom: 0 };
  const toPoint = ({ ra, dec }) => {
    const x = (4.55 - ra) * 14.5;
    return {
      x: 36 + ((x - bounds.left) / (bounds.right - bounds.left)) * 328,
      y: 30 + ((bounds.top - dec) / (bounds.top - bounds.bottom)) * 250,
    };
  };
  const starsByName = Object.fromEntries(taurusStars.map((star) => [star.name, star]));

  return (
    <aside className="taurus-card" aria-label="Taurus constellation star chart">
      <svg
        className="taurus-chart"
        viewBox="0 0 400 310"
        role="group"
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
                r={Math.max(1.5, 4.5 - Number(star.magnitude) * 0.6)}
                fill={star.color}
                onMouseEnter={() => setActiveStar(star)}
                onMouseLeave={() => setActiveStar(null)}
              />
            </g>
          );
        })}
      </svg>
      <div className="taurus-tooltip" role="status" aria-live="polite" aria-hidden={!activeStar}>
        {activeStar && (
          <>
            <strong>{activeStar.name} · {activeStar.designation}</strong>
            <span>Magnitude {activeStar.magnitude}</span>
          </>
        )}
      </div>
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
        imageLoading="eager"
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
                <Image
                  src="/images/about_2.jpg"
                  alt="A photo from Samina's life"
                  fill
                  sizes="(max-width: 768px) 70vw, 252px"
                />
              </div>
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
                <Image
                  src="/images/about_3.jpg"
                  alt="Another photo from Samina's life"
                  fill
                  sizes="(max-width: 768px) 70vw, 252px"
                />
              </div>
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
              . I am also the creator of <a className="about-link" href="https://www.darkmodecomics.com">DarkModeComics</a>, a web-comic about tech and startups.
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
          <h2 className="green-text">FAQ</h2>
          <div className="faq-layout">
            <div className="faq-container">
              <Question
                number="001"
                question="Where are you from?"
                answer="I am from Afghanistan and I live in the US. "
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
                  "If you have any inquiries related to thirdweb, please ",
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
