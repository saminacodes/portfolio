import { CustomSections } from "../components/common/CustomSections";

export default function Home() {
  return (
    <main id="home" className="home">
      <CustomSections
        title="Hi, I'm Samina"
        style="main-hero"
        titleType="main-title"
        textColor="red-text"
        bgColor="bg-red"
        imageLink="/images/port-1.png"
        content="Developer Relations Engineer, Tech Educator, and Founder of Dark Mode Comics."
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Developer Relations Engineer"
        titleType="secondary-title"
        textColor="yellow-text"
        bgColor="bg-yellow"
        imageLink="/images/port-2.png"
        content="I am a developer relations engineer at thirdweb and my areas of focus are course building and strategy."
        linkText="Check out thirdweb!"
        link="https://thirdweb.com"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        title="Content Creator"
        titleType="secondary-title"
        textColor="green-text"
        bgColor="bg-green"
        imageLink="/images/port-3.png"
        content="I routinely update my tech-focused blog where I discuss topics such as developer relations, frontend and blockchain development, and productivity"
        linkText="Read my blog!"
        link="https://samina.dev"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Founder DarkModeComics"
        titleType="secondary-title"
        textColor="blue-text"
        bgColor="bg-blue"
        imageLink="/images/port-4.png"
        content="What was once a small illustration is now a series of comics that portray the day-to-day struggles of being a developer."
        linkText="Read my comics!"
        link="https://twitter.com/DarkModeComics"
      ></CustomSections>
    </main>
  );
}
