"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import dotenv from "dotenv";
import Head from "next/head";
import Script from "next/script";
import { useStore } from "@/store";

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AB & SK Wi-Fi Home Internet Service by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

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
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/datepicker.min.js"></script>
      </Head>

      <>
        <Script
          async
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places`}
        />
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
