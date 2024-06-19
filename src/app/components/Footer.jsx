"use client";

import React from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
      <div className="bg-primary py-3">
        <div className={`${styles.width}`}>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center pt-8 pb-10">
            <div>
              <Image
                src={logo}
                alt=""
                className="w-[200px]"
                unoptimized={true}
              />
            </div>

            <div>
              <ul className="flex flex-col md:flex-row text-center md:text-right gap-3 md:gap-6 text-sm tracking-[-0.02em] text-white mt-8 md:mt-0">
                <li>
                  <Link href="/tos.pdf" target="_blank">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy_policy.pdf" target="_blank">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/accessibility_plan.pdf" target="_blank">Accessibility Plan</Link>
                </li>
                <li>
                  <Link href="/business-class">Business Internet</Link>
                </li>
                <li>
                  <Link href="/whole-home-wifi">Wi-Fi App</Link>
                </li>
                <li className="uppercase">
                  <Link href="/faq">FAQ</Link>
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
                <li className="bg-primary text-white px-4 rounded-lg">
                  <Link href="https://square.link/u/jdmxg2IR">Pay Now</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
              className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-center md:justify-between text-sm tracking-[-0.02em] text-white pt-4 border-t-[1px] border-solid border-white">
            <p>
              Copyright {new Date().getFullYear()} Swift-Net.ca. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
  );
};
