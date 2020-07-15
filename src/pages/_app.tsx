import GlobalContextContainer from "../context/GLobalContext";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextContainer>
      <Component {...pageProps} />
    </GlobalContextContainer>
  );
}

export default MyApp;
