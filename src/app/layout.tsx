// app/layout.tsx
import Script from "next/script";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRuIjAZK5h2eJoV/nER6Qlg6Z4AQVnpEuqFsT9xN5"
        crossOrigin="anonymous"
      ></Script>
      <body>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
