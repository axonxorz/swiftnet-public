"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import dotenv from "dotenv";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  dotenv.config();

  return (
    <html lang="en">
      <Head></Head>

      <>
        <Script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places`}
        />
        <body className={inter.className}>
          {pathname === "/sign-up" ||
          pathname === "/map" ||
          pathname === "/email-check" ? (
            <>{children}</>
          ) : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </body>
      </>
    </html>
  );
}
