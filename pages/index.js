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
        content="I create things."
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Product"
        titleType="secondary-title"
        textColor="yellow-text"
        bgColor="bg-yellow"
        imageLink="/images/port-2.png"
        content="I work at thirdweb where I focus on blockchain and AI."
        linkText="Check out thirdweb!"
        link="https://thirdweb.com"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        title="Eeducational Content"
        titleType="secondary-title"
        textColor="green-text"
        bgColor="bg-green"
        imageLink="/images/port-3.png"
        content="I create content on anything I am learning about."
        linkText="Check out my content!"
        link="https://instagram.com/saminacodes"
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Creator DarkModeComics"
        titleType="secondary-title"
        textColor="blue-text"
        bgColor="bg-blue"
        imageLink="/images/port-4.png"
        content="What was once a small illustration is now a series of comics of my day-to-day struggles."
        linkText="Read my comics!"
        link="https://instagram.com/DarkModeComix"
      ></CustomSections>
    </main>
  );
}
