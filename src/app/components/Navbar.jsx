"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const whitetextAndLogo = [
    "/",
    "/lloydminster",
    "/wifi-app-by-calix",
  ].includes(pathname);

  return (
    <div className={`${whitetextAndLogo && "bg-transparent"}`}>
      <div className={`${styles.width} relative`}>
        <div className="w-full flex justify-between items-center absolute top-[15px]">
          <Link href={"/"}>
            <div>
              <Image
                src={whitetextAndLogo ? logo1 : logo2}
                alt=""
                className="w-[150px] md:w-[200px]"
                unoptimized={true}
              />
            </div>
          </Link>

          <div>
            <ul
              className={`hidden md:flex gap-12 justify-center items-center text-sm tracking-[-0.02em] ${
                whitetextAndLogo ? "text-white" : "text-[#1F2937]"
              }`}
            >
              <li>
                <Link href="/pricing">Pricing & Plans</Link>
              </li>
              <li>
                <Link href="/business-class">Business Internet</Link>
              </li>
              <li>
                <Link href="/wifi-app-by-calix">Wi-Fi App </Link>
              </li>
              <li>
                <Link href="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li className="bg-primary text-white py-2 px-4 rounded-lg">
                <a href="https://square.link/u/jdmxg2IR">Pay Now</a>
              </li>
            </ul>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="md:hidden">
              <HiOutlineMenuAlt3
                className={`cursor-pointer mr-6 ${
                  whitetextAndLogo ? "text-white" : "text-[#1F2937]"
                }`}
                size={32}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className="relative z-[200]">
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500 h-screen"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src={logo1}
                    width="87"
                    height="35"
                    alt="/"
                    unoptimized={true}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full   p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col justify-center gap-5">
              <Link href="/business-class">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Business Internet
                </li>
              </Link>
              <Link href="/wifi-app-by-calix">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Wi-Fi App
                </li>
              </Link>
              <Link href="/pricing">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Pricing
                </li>
              </Link>
              <Link href="/sign-up">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Sign Up
                </li>
              </Link>
              <a href="https://square.link/u/jdmxg2IR">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Pay Now
                </li>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
