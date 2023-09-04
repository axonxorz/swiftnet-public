import React from "react";
import Link from "next/link";
import styles from "@/app/styles/styles";

export const metadata = {
  title: "Lloydminster Local Wi-Fi Internet Provider [SIGN UP]",
  description:
    "Finally truly unlimited, high-speed internet with Swift-Net.ca, your local Lloydminster Internet Provider. Don't settle for less, explore our affordable packages and experience the difference today!",
};

const Section3 = () => {
  return (
    <>
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
    </>
  );
};

export default Section3;
