import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";

const ReliableInternet = () => {
  return (
    <>
      <div className={`${style.reliableInternetBg} h-[80vh]`}></div>

      <div className="mx-4 md:mx-0">
        <div className="md:w-[75%] m-auto py-5 md:py-16 px-5 md:px-20 bg-white rounded-lg relative top-[-150px] mb-[-100px] md:mb-0">
          <h2 className={styles.heading}>
            <span className="text-primary">Reliable and Resilient</span>{" "}
            Internet, Built for Northern Alberta and Saskatchewan Rural
            Communities
          </h2>
          <p className={`${styles.paragraph} my-3`}>
            Swift-Net.ca is committed to providing stable and reliable internet
            service to the communities of Lloydminster, Cold Lake, North
            Battleford, Bonnyville, Meadow Lake, and Kindersley, and the
            surrounding communities of northern Alberta and Saskatchewan. Our
            permanent fixed wireless connections are specifically designed to
            withstand the unique weather conditions of northern Alberta and
            Saskatchewan, ensuring that our customers enjoy uninterrupted
            internet access even during power disruptions, extreme weather, or
            construction in the summer.
          </p>
          <div>
            <h6
              className={`text-primary font-semibold text-base md:text-lg relative mb-3 md:mb-0 mt-6 md:mt-0 ${style.subHeadingBorder}`}
            >
              Permanent Fixed Wireless Connection
            </h6>
            <p className={styles.paragraph}>
              Swift-Net.ca engineers a permanent fixed wireless connection,
              which involves installing a wireless receiver on your property to
              connect to our network. This robust infrastructure ensures a
              stable and high-speed internet connection without the need for
              satellites or wired connections like DSL or cable.
            </p>

            <ul className="flex flex-col gap-3 my-6 text-base md:ext-lg font-semibold text-[#6B7280] tracking-[-0.02em]">
              <li>Less Susceptible to Power Disruptions</li>
              <li>Resilient to Extreme Weather Conditions</li>
              <li>Unaffected by Summer Construction</li>
            </ul>

            <p className={`${styles.paragraph}`}>
              Swift-Net.ca's permanent fixed wireless connection offers reliable
              internet service to the communities of Lloydminster, AB/SK, Cold
              Lake, AB, North Battleford, SK, Bonnyville, AB, Meadow Lake, SK,
              and Kindersley, SK. Designed to be less susceptible to power
              disruptions, extreme weather, and summer construction, our robust
              infrastructure ensures that our customers in northern Alberta and
              Saskatchewan enjoy a stable and uninterrupted internet connection,
              regardless of the challenges that the local environment may
              present. Choose Swift-Net.ca for dependable internet service you
              can trust.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReliableInternet;
