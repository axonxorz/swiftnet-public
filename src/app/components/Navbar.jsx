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
import { Menu, MenuHandler, MenuList, MenuItem, Button,} from "@material-tailwind/react";
import { YouTubeIcon } from "@components/YouTubeIcon";

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const whitetextAndLogo = [
    "/",
    "/lloydminster",
    "/whole-home-wifi",
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
              className={`hidden md:flex gap-12 justify-center items-center text-sm font-bold tracking-[-0.02em] ${
                whitetextAndLogo ? "text-white p-3 rounded bg-primary/90" : "text-[#1F2937]"
              }`}
            >
              <li>
                <Menu allowHover>
                  <MenuHandler>
                    <a href className={'cursor-pointer'}>Pricing &amp; Plans</a>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem><Link href="https://getfasterwifi.com/athabasca-signup" target="_blank">Athabasca, AB</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/attonslake-signup" target="_blank">Atton's Lake, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/coldlake-signup" target="_blank">Cold Lake, AB</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/jackfish-murraylake-signup" target="_blank">Jackfish/Murray Lake, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/kerrobert-signup" target="_blank">Kerrobert, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/kindersley-signup" target="_blank">Kindersley, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/lashburn-signup" target="_blank">Lashburn, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/lloydminster-signup" target="_blank">Lloydminster, AB/SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/Macklin-signup" target="_blank">Macklin, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/marshall-signup" target="_blank">Marhsall, SK</Link></MenuItem>
                    <MenuItem><Link href="https://getfasterwifi.com/provost-signup" target="_blank">Provost, AB</Link></MenuItem>
                    <MenuItem><Link href="/sign-up">All other areas</Link></MenuItem>
                  </MenuList>
                </Menu>
              </li>
              <li>
                <Link href="/business-class">Business Internet</Link>
              </li>
              <li>
                <Link href="/whole-home-wifi">Wi-Fi App </Link>
              </li>
              <li>
                <Link href="/faq">FAQ </Link>
              </li>
              <li>
                <Link href="/sign-up">Sign Up</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@swiftnetinternet">YouTube</Link>
              </li>
              <li>
                <Link href="https://portal.swift-net.ca" target="_blank">My Swift-Net</Link>
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
            <div className="py-14 flex flex-col justify-center">
              <Link href="/business-class">
                <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white list-none"
                >
                  Business Internet
                </li>
              </Link>
              <Link href="/whole-home-wifi">
                <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white list-none"
                >
                  Wi-Fi App
                </li>
              </Link>
              <Link href="/faq">
                <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white list-none"
                >
                  FAQ
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
              <Link href="https://portal.swift-net.ca">
                <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white list-none"
                >
                  My Swift-Net
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
              <a href="https://www.youtube.com/@swiftnetinternet">
                <li
                    onClick={() => setNav(false)}
                    className="py-4 text-sm text-white list-none"
                >
                  YouTube
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
