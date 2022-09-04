import { CustomSections } from "../components/common/CustomSections";

export default function Home() {
  return (
    <main id="home" className="home">
      <CustomSections
        title="Hi, I'm Samina"
        textColor="red-text"
        imageLink="/images/port-1.png"
        content="Developer Relations Engineer, Tech Educator, and Founder of Dark Mode Comics."
      ></CustomSections>
      <CustomSections
        title="Developer Relations Engineer"
        textColor="yellow-text"
        imageLink="/images/port-1.png"
        content="I am an education & partnerships focused developer relations engineer at thirdweb. I primarily work on educating users on how to use thirdweb or partner tools in their decentralized applications."
        linkText="Join my workshops!"
        link="https://lu.ma/saminacodes"
      ></CustomSections>
      <CustomSections
        title="Tech Educator"
        textColor="blue-text"
        imageLink="/images/port-1.png"
        content="From teaching kids web development to teaching developers web3 development, I enjoy creating a wide variety of content easily accessible online."
        linkText="Learn web3 development!"
        link="https://cookie-project.xyz"
      ></CustomSections>
      <CustomSections
        title="Founder DarkModeComics"
        textColor="green-text"
        imageLink="/images/port-1.png"
        content="What started as a little illustration turned into a series of comics to portray the day-to-day struggles of being a developer."
        linkText="Read my comics!"
        link="https://twitter.com/DarkModeComics"
      ></CustomSections>
    </main>
  );
}
