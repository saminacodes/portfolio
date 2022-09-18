import "../styles/config.scss";
import Header from "../partials/header";
import Footer from "../partials/footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  console.log("Stop inspecting my code. >:(");
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
