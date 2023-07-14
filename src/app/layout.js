"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import dotenv from "dotenv";
import Script from "next/script";
import { useStore } from "@/store";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  dotenv.config();

  const setIpAddress = useStore((state) => state.setIpAddress);

  fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      setIpAddress(ipAddress);
    })
    .catch((error) => {
      toast.error("Error:", error);
    });

  return (
    <html lang="en">
      <>
        <Script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places`}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YHLNF4M6RW" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
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
          {`function onClick(e) {
                e.preventDefault();
                grecaptcha.enterprise.ready(async () => {
                  const token = await
              grecaptcha.enterprise.execute(
              '6Ld8lREnAAAAAFzCEO8eAIYB9aLS2NKtRPejZGLk'
              , {action: 
              'LOGIN'});
           });
          }
          `}
        </Script>

        <body className={inter.className}>
          {pathname === "/sign-up" ||
          pathname === "/pricing" ||
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
