import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: 'swift co',
  description: 'best isp in the world',
  keywords: ['best isp', 'isp']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
