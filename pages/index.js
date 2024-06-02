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
        content="Product Manager, Content Creator, and Founder of Dark Mode Comics."
      ></CustomSections>
      <CustomSections
        style="secondary-hero"
        row="reverse"
        title="Product Manager"
        titleType="secondary-title"
        textColor="yellow-text"
        bgColor="bg-yellow"
        imageLink="/images/port-2.png"
        content="I am a product manager at thirdweb focused on improving our developer experience."
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
        content="Posts about developer experience, product management, frontend, and blockchain development."
        linkText="Read my blog!"
        link="https://saminacodes.medium.com/"
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
        link="https://instagram.com/DarkModeComix"
      ></CustomSections>
    </main>
  );
}
