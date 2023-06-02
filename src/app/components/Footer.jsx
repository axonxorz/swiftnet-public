import React from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary py-3">
      <div className={`${styles.width}`}>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center pt-8 pb-10">
          <div>
            <Image src={logo} alt="" className="w-[200px]" unoptimized={true} />
          </div>

          <div>
            <ul className="flex flex-col md:flex-row text-center md:text-right gap-6 md:gap-12 text-sm tracking-[-0.02em] text-white mt-8 md:mt-0">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-center md:justify-between text-sm tracking-[-0.02em] text-white pt-4 border-t-[1px] border-solid border-white">
          <span>
            ISP website design and coding by{" "}
            <Link href="/" className="underline">
              TurnkeyISP
            </Link>
          </span>
          <p>Copyright 2023 swift-net.ca. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
