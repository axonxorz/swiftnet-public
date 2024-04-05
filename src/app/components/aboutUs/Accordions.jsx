"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import Image from "next/image";
import network from "../../../assets/networks.png";

const Accordions = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="bg-primary text-white relative pt-8 md:pt-20">
      <div id="faq" className={`${styles.width} `}>
        <div className="md:w-3/5">
          <div className="">
            <div className="mb-5">
              <h4 className="text-xl md:text-3xl font-semibold mb-3">
                Discover Swift-Net.ca - Better Service Where You Live
              </h4>
              <p className={styles.paragraph}>
                Are you looking for a reliable alternative to MCSnet, Xplore,
                Access Communications Cooperative, or BigWifi? Swift-Net.ca is
                the perfect solution, offering unmatched wireless internet
                services for rural communities in Saskatchewan and Alberta. When
                you experience outages or are unsatisfied with your current
                provider, switch to Swift-Net.ca and experience the difference a
                truly reliable and customer-focused internet service can make.
              </p>
            </div>

            <div className="pb-20">
              <Accordion open={open === 1} className={style.accordionBorder}>
                <AccordionHeader
                  className={styles.accordionHeader}
                  onClick={() => handleOpen(1)}
                >
                  Superior Service and Reliability
                </AccordionHeader>
                {open === 1 && (
                  <AccordionBody className={styles.paragraph}>
                    At Swift-Net.ca, we prioritize customer satisfaction and
                    service reliability. If you're experiencing outages with
                    your current provider like MCSnet, Xplore, Access
                    Communications Cooperative, or BigWifi, make the switch to
                    Swift-Net.ca and enjoy a stable, high-speed internet
                    connection that keeps you connected when you need it most.
                  </AccordionBody>
                )}
              </Accordion>
              <Accordion open={open === 2} className={style.accordionBorder}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className={styles.accordionHeader}
                >
                  Excellent Customer Support
                </AccordionHeader>
                {open === 2 && (
                  <AccordionBody className={styles.paragraph}>
                    At Swift-Net.ca, we prioritize customer satisfaction and
                    service reliability. If you're experiencing outages with
                    your current provider like MCSnet, Xplore, Access
                    Communications Cooperative, or BigWifi, make the switch to
                    Swift-Net.ca and enjoy a stable, high-speed internet
                    connection that keeps you connected when you need it most.
                  </AccordionBody>
                )}
              </Accordion>
              <Accordion open={open === 3} className={style.accordionBorder}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className={styles.accordionHeader}
                >
                  Reliable Internet
                </AccordionHeader>
                {open === 3 && (
                  <AccordionBody className={styles.paragraph}>
                    At Swift-Net.ca, we prioritize customer satisfaction and
                    service reliability. If you're experiencing outages with
                    your current provider like MCSnet, Xplore, Access
                    Communications Cooperative, or BigWifi, make the switch to
                    Swift-Net.ca and enjoy a stable, high-speed internet
                    connection that keeps you connected when you need it most.
                  </AccordionBody>
                )}
              </Accordion>

              <Accordion open={open === 4} className={style.accordionBorder}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className={styles.paragraph}
                >
                  A Customer-Centric Approach
                </AccordionHeader>
                {open === 4 && (
                  <AccordionBody className={styles.accordionText}>
                    Make the switch to Swift-Net.ca and discover the superior
                    alternative to MCSnet, Xplore, Access Communications
                    Cooperative, and BigWifi. Our reliable, high-speed internet
                    service, coupled with our unwavering commitment to customer
                    satisfaction, makes Swift-Net.ca the perfect choice for
                    rural communities in Saskatchewan and Alberta. Search no
                    more for an alternative; choose Swift-Net.ca and experience
                    the difference today.
                  </AccordionBody>
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute right-0 bottom-0">
        <Image src={network} alt="" className="w-[400px]" unoptimized={true} />
      </div>
    </div>
  );
};

export default Accordions;
