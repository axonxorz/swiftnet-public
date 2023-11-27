"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Head from "next/head";

import { useSessionStore } from "@/store";
import { generateSessionId } from "@/tools";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const session = useSessionStore();

  useEffect(() => {
    session.setSessionId(generateSessionId());
    session.setUserAgent(navigator.userAgent);
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        session.setIpAddress(data.ip);
      })
      .catch((error) => {
        console.log('Error fetching IP:', error);
      });
  }, []);

  return (
    <html lang="en">
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YHLNF4M6RW" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-YHLNF4M6RW');
        `}
        </Script>
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6Ld8lREnAAAAAFzCEO8eAIYB9aLS2NKtRPejZGLk"
          async
          defer
        />

        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>

        <body className={inter.className}>
          <Toaster />
          {pathname === "/sign-up" ||
          pathname === "/pricing" ||
          pathname === "/map" ||
          pathname === "/signup-contact" ? (
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
