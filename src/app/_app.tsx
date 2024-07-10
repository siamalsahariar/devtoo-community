import { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRuIjAZK5h2eJoV/nER6Qlg6Z4AQVnpEuqFsT9xN5"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Script src="/js/custom.js" strategy="afterInteractive" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
