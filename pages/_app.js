import "../styles/config.scss";
import Header from "../partials/header";
import Footer from "../partials/footer";

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
