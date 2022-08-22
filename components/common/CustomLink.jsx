import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CustomLink(props) {
  // CustomLink takes in two props: title and url.
  // If there is no title prop, by default it will show the website logo.

  const router = useRouter();

  function routeChange(e) {
    e.preventDefault();
    router.push(`/${props.url}`);
  }

  useEffect(() => {
    router.prefetch(`/${props.url}`);
  }, []);

  return (
    <>
      {props.title && (
        <a
          className={`custom-link ${props.title}`}
          onClick={routeChange}
        >
          {props.title}
        </a>
      )}
      {!props.title && (
        <a
          className={`custom-link logo`}
          onClick={routeChange}
        >
          <Image
            width="112"
            height="40"
            layout="fixed"
            src="/assets/LOGO-nav.svg"
          />
        </a>
      )}
    </>
  );
}
