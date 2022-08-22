import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

// CustomLink takes in two props: title and url.
// If there is no title prop, by default it will show the website logo.
import CustomLink from "../components/common/CustomLink";
import IndexHeroSection from './index/indexheroSection';

export default function Home() {

  return (
    <main id='home' className='home'>
      <IndexHeroSection/>
    </main>
  )
}
