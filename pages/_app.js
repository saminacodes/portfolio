import "../styles/config.scss";
import Header from "../partials/header";
import Footer from "../partials/footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
