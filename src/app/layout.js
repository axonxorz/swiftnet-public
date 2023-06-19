"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./styles/output.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata = {
  title: "AB & SK Wi-Fi Broadband Internet Service by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today! Experience the difference with Swift-Net.ca's reliable internet service, designed specifically for rural communities in Alberta and Saskatchewan. Sign up today and enjoy fast and dependable home wi-fi for you and your family!",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <head></head>

      <body className={inter.className}>
        {pathname === "/sign-up" || pathname === "/map" ? (
          <>{children}</>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
