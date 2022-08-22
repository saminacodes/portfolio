import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <p className="contact-text">
          I am <span className="highlighted-text">always advocating</span> for
          others.
        </p>
        <button href="mailto:hello@samina.codes" className="button">
          Let's work together!
        </button>
      </div>
    </footer>
  );
}
