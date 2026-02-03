import { CustomSections } from "../components/common/CustomSections";
import { Question } from "../components/common/Questions";

export default function AboutPage() {
  return (
    <main id="about" className="about">
      <CustomSections
        title="Hello, World!"
        style="main-hero"
        titleType="main-title"
        textColor="red-text"
        bgColor="bg-red"
        imageLink="/images/samina.jpg"
        content="My name is Samina and I just want to make you smile. ʕ•ᴥ•ʔ"
      />
      <section className="about-section">
        <div className="wrapper">
          <div className="content-container">
            <h2 className="yellow-text">About</h2>
            <p className="about-text">
              I work at {" "}
              <a className="about-link" href="https://thirdweb.com">
                thirdweb
              </a>
              , where I focus on blockchain and AI development tools.
              
              <br /> When I am not working, I enjoy playing video games,
              learning piano, gardening, and{" "}
              <a
                className="about-link"
                href="https://www.goodreads.com/user/show/123932450-samina\"
              >
                reading
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="faq-section">
        <div className="wrapper">
          <h2 className="blue-text">F.A.Q</h2>
          <div className="faq-container">
            <Question
              number="001"
              question="Where are you from?"
              answer="I am from Afghanistan. I live in the United States. "
            />
            <Question
              number="002"
              question="When did you start programming?"
              answer="I started programming January 2018 with an introductory CS course at my University. My first programming language was technically JavaScript, but through a library called p5.js."
            />
            <Question
              number="003"
              question="What are you currently working on?"
              answer="I am tinkering with hardware "
            />
            <Question
              number="004"
              question="Can you teach me how to code?"
              answer={
                <>
                  No, but I created this website called{" "}
                  <a
                    key="test"
                    href="https://resources.technology"
                  >
                    resources
                  </a>
                  , which you can browse through. 
                </>
              }
            />

            <Question
              number="005"
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
              number="006"
              question="How can I contact you?"
              answer={[
                "I am intentionally impossible to reach. If you have any inquiries related to thirdweb, please ",
                <a key="test2" href="https://thirdweb.com/contact-us">
                  contact our team.
                </a>,
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
