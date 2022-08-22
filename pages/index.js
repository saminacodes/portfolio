import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

// CustomLink takes in two props: title and url.
// If there is no title prop, by default it will show the website logo.
import CustomLink from "../components/common/CustomLink";
import { CustomSections } from "../components/common/CustomSections";

export default function Home() {
  return (
    <main id="home" className="home">
      <CustomSections
        title="Developer Relations Engineer"
        textColor="yellow-text"
        content="I am a content & partnerships focused engineer at thirdweb. I primarily work on educating users on how to use thirdweb or partner tools in their decentralized applications."
        linkText="Join my workshops!"
        link="samina.dev"
      ></CustomSections>
      <CustomSections
        title="Tech Educator"
        textColor="blue-text"
        content="From teaching kids web development to teaching developers web3 development, I enjoy creating a wide variety of content easily accessible online."
        linkText="Learn web3 development!"
        link="samina.dev"
      ></CustomSections>
      <CustomSections
        title="Founder DarkModeComics"
        textColor="green-text"
        content="What started as a little illustration turned into a series of comics to portray the day-to-day struggles of being a developer."
        linkText="Read my comics!"
        link="samina.dev"
      ></CustomSections>
    </main>
  );
}
