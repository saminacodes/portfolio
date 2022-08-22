import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import CustomLink from "../components/common/CustomLink";

export default function Header() {
  // CustomLink takes in two props: title and url.
  // If there is no title prop, by default it will show the website logo.
  return (
    <header id="main-header" className="header">
      <div className="wrapper">
        <nav>
          <div className="logo">
            <Link href="/">
              <a>saminacodes</a>
            </Link>
          </div>
          {/* <ul className="nav-list">
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio-page">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-page">
                <a>Contact</a>
              </Link>
            </li> */}
          {/* <button className="mobile-menu"></button>
          </ul> */}
        </nav>
      </div>
    </header>
  );
}
