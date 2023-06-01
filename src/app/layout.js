import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
