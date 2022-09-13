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
        content="I am an education & partnerships focused developer relations engineer at thirdweb. I primarily work on educating users on how to use thirdweb or partner tools in their decentralized applications."
        linkText="Join my workshops!"
        link="https://lu.ma/saminacodes"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        title="Tech Educator"
        titleType="secondary-title"
        textColor="green-text"
        bgColor="bg-green"
        imageLink="/images/port-3.png"
        content="From teaching kids web development to teaching developers web3 development, I enjoy creating a wide variety of content easily accessible online."
        linkText="Learn web3 development!"
        link="https://cookie-project.xyz"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Founder DarkModeComics"
        titleType="secondary-title"
        textColor="blue-text"
        bgColor="bg-blue"
        imageLink="/images/port-4.png"
        content="What started as a little illustration turned into a series of comics to portray the day-to-day struggles of being a developer."
        linkText="Read my comics!"
        link="https://twitter.com/DarkModeComics"
      ></CustomSections>
    </main>
  );
}
