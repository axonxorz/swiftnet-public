import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";

const ReliableInternet = () => {
  return (
    <>
      <div
        className={`${style.reliableInternetBg} h-[80vh]  border-2 md:flex hidden`}
      ></div>
      <div className={` h-[150px] md:hidden flex`}></div>

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
          <div className="w-full">
            <div className="flex  flex-col gap-4 my-4">
              <div className="w-full space-y-2">
                <h6
                  className={`text-primary font-semibold text-xl md:text-2xl relative mb-3 md:mb-0 mt-6 md:mt-0 ${style.subHeadingBorder}`}
                >
                  Permanent Fixed Wireless Connection
                </h6>
                <p className={styles.paragraph}>
                  Swift-Net.ca engineers a permanent fixed wireless connection,
                  which involves installing a wireless receiver on your property
                  to connect to our network. This robust infrastructure ensures
                  a stable and high-speed internet connection without the need
                  for satellites or wired connections like DSL or cable.
                </p>
              </div>

              <div className="w-full space-y-2">
                <h6
                  className={`text-primary font-semibold text-xl md:text-2xl relative mb-3 md:mb-0 mt-6 md:mt-0 ${style.subHeadingBorder}`}
                >
                  Less Susceptible to Power Disruptions
                </h6>
                <p className={styles.paragraph}>
                  Our fixed wireless network is designed with built-in
                  redundancies to minimize the impact of remote power
                  disruptions on your internet connectivity. This ensures that
                  you can continue to enjoy a stable connection even when power
                  outages occur in your community.
                </p>
              </div>

              <div className="w-full space-y-2">
                <h6
                  className={`text-primary font-semibold text-xl md:text-2xl relative mb-3 md:mb-0 mt-6 md:mt-0 ${style.subHeadingBorder}`}
                >
                  Resilient to Extreme Weather Conditions
                </h6>
                <p className={styles.paragraph}>
                  Swift-Net.ca understands the unique weather challenges faced
                  by communities in northern Alberta and Saskatchewan, such as
                  heavy snowfall, freezing rain, and icy conditions. Our fixed
                  wireless infrastructure is built to withstand these harsh
                  weather conditions, ensuring that your internet connection
                  remains stable and reliable during extreme weather events.
                </p>
              </div>

              <div className="w-full space-y-2">
                <h6
                  className={`text-primary font-semibold text-xl md:text-2xl relative mb-3 md:mb-0 mt-6 md:mt-0 ${style.subHeadingBorder}`}
                >
                  Unaffected by Summer Construction
                </h6>
                <p className={styles.paragraph}>
                  Fixed wireless connections are like your mobile phone and less
                  susceptible to disruptions caused by summer construction
                  projects, as they do not rely on underground cables that can
                  be accidentally damaged during digging or excavation work.
                  This means that you can count on Swift-Net.ca's internet
                  service to remain uninterrupted throughout the summer months.
                </p>
              </div>
            </div>

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
