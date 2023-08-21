import React from "react";
import ExpLimitless from "../components/lloydminster/ExpLimitless";
import Sec3 from "../components/lloydminster/Sec3";
import Sec4 from "../components/lloydminster/Sec4";
import Sec5 from "../components/lloydminster/Sec5";
import Hero from "../components/lloydminster/Hero";
import styles from "../styles/styles";
import Link from "next/link";
import Image from "next/image";
import img1 from "@/assets/landings/lloydminster2.webp";

export const metadata = {
  title: "Lloydminster Local Wi-Fi Internet Provider [SIGN UP]",
  description:
    "Finally truly unlimited, high-speed internet with Swift-Net.ca, your local Lloydminster Internet Provider. Don't settle for less, explore our affordable packages and experience the difference today!",
};

const page = () => {
  return (
    <>
      <Hero />

      <div className="w-full  bg-primary py-6 flex items-center justify-center lg:min-h-[347px]">
        <p className="font-bold w-[80%] md:text-[20px] lg:text-[30px]  text-center text-white">
          Swift-Net.ca stands as a beacon of quality in the realm of home Wi-Fi
          internet service providers in Alberta & Saskatchewan. We firmly
          believe that everyone should have access to truly unlimited internet
          service, free from the concerns of data caps, overages, or throttling.
          Connect now with Swift-Net.ca, and experience the superior service of
          a local provider committed to your needs.
        </p>
      </div>

      <div className="h-[30px] md:h-[50px]"></div>

      <div className={styles.width + "my-6"}>
        <p className="font-bold md:text-[30px] my-2 text-[24px] lg:text-[36px] ">
          Exploring Internet Services in Lloydminster
        </p>
        <div className="w-full gap-6 py-6 flex items-start justify-between ">
          <div className="w-full md:w-1/2  space-y-4">
            <p className="text-gray-600 min-h-[150px]">
              At Swift-Net.ca, we don't just understand that everyone's internet
              needs are different - we embrace it. We offer a diverse range of
              services, from basic broadband for casual browsing and emailing,
              to high-speed wireless for heavy-duty gaming, streaming, and more.
              No matter your online habits, we have a service that fits
              perfectly.
            </p>

            <Link href={"/"}>
              <p className="hover:underline text-primary hover:font-bold cursor-pointer">
                Explore Our Services
              </p>
            </Link>
          </div>

          <div className="w-full md:w-1/2  space-y-4">
            <p className="text-gray-600 min-h-[150px]">
              We're not just providing services; we're revolutionizing
              high-speed home Wi-Fi in rural communities like Lloydminster, Cold
              Lake, North Battleford, and more! Our services are designed
              specifically for rural communities in Alberta and Saskatchewan.
              Sign up today and experience the future of home Wi-Fi.
            </p>
            <Link href={"/sign-up"}>
              <p className="hover:underline text-primary hover:font-bold cursor-pointer">
                Sign Up Today
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[30px] md:h-[50px]"></div>

      <div className={"w-full bg-[#F1FAFF]"}></div>
      <div className="h-[30px] md:h-[50px]"></div>

      <div className={styles.width}>
        <div className={" gap-6 py-6 flex items-start justify-between "}>
          <div className="w-full md:w-[35%]  space-y-4">
            <p className="font-bold text-[26px] md:text-[36px] ">
              Exciting Internet Deals in Lloydminster
            </p>
          </div>

          <div className="w-full md:w-[70%]  space-y-6">
            <p className="text-gray-600  ">
              We're always looking for ways to give our customers more value.
              That's why we regularly offer exciting internet deals in
              Lloydminster. From discounted packages to free installation
              offers, we're committed to providing you with high-quality
              internet services at a price you'll love. Check Out Our Deals
            </p>
            <Link href={"/"}>
              <button className="hover:underline mt-4 w-[250px] text-center bg-primary rounded-lg py-3  text-white hover:font-bold cursor-pointer">
                Check Out Our Deals
              </button>
            </Link>
          </div>
        </div>

        <Image
          src={img1}
          alt="lloydminster background page"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="h-[30px] md:h-[50px]"></div>

      {/* <ExpLimitless />
      <div className="h-[30px] md:h-[50px]"></div> */}
      {/* <Sec3 />
      <div className="h-[30px] md:h-[50px]"></div>
      <Sec4 />
      <div className="h-[30px] md:h-[50px]"></div>
      <Sec5 /> */}
    </>
  );
};

export default page;
