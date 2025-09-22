// app/layout.js
import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DreamWithKSB</title>
        <meta name="description" content="Real estate platform" />
        <link
          rel="icon"
          href="/logo.png"
          sizes="50000x50000"
          type="image/x-icon"
        />
      </head>
      <body>
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
