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
import axios from "axios"

import { useSessionStore } from "@/store";
import { generateSessionId } from "@/tools";
import { ChatWidget } from "@components/ChatWidget";

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
    axios.get('https://api.ipify.org/', {params: {format: 'json'}})
      .then((response) => {
        session.setIpAddress(response.data.ip);
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
        <Script>
          {`
          window.embeddedChatbotConfig = {
          chatbotId: "vWc2qLzTg1LkbHrulvIYK",
          domain: "www.chatbase.co"
          }
          `}
        </Script>
        <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" >
        </Script>

        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>

        <body className={inter.className}>
          <Toaster/>
          {pathname === "/sign-up" ||
          pathname === "/pricing" ||
          pathname === "/map" ||
          pathname === "/signup-contact" ? (
              <>{children}</>
          ) : (
              <>
                <Navbar/>
                {children}
                <Footer/>
              </>
          )}
          <ChatWidget></ChatWidget>
        </body>
      </>
    </html>
  );
}
