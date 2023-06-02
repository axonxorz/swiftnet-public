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
  let [logo, setlogo] = useState("");
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setlogo(logo1);
    } else {
      setlogo(logo2);
    }
  }, [pathname, logo]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={`${
        logo === logo1 && "bg-transparent"
      }`}
    >
      <div className={`${styles.width} relative`}>
        <div className="w-full flex justify-between items-center absolute top-[15px]">
          <div>
            <Image
              src={logo}
              alt=""
              className="w-[150px] md:w-[200px]"
              unoptimized={true}
            />
          </div>

          <div>
            <ul
              className={`hidden md:flex gap-12 text-sm tracking-[-0.02em] ${
                logo === logo1 ? "text-white" : "text-[#1F2937]"
              }`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="md:hidden">
              <HiOutlineMenuAlt3
                className={`cursor-pointer mr-6 ${
                  logo === logo1 ? "text-white" : "text-[#1F2937]"
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
                  className="rounded-full shadow-md shadow-gray-800 p-3 cursor-pointer"
                >
                  <AiOutlineClose className="text-white" />
                </div>
              </div>
            </div>
            <div className="py-14 flex flex-col justify-center gap-5">
              <Link href="/#">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Home
                </li>
              </Link>
              <Link href="/about-us">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  About Us
                </li>
              </Link>
              <Link href="/contact-us">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-white list-none"
                >
                  Contact Us
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
