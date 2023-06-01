import styles from "@/app/styles/styles";
import React from "react";

const About = () => {
  return (
    <div className={`${styles.width} pb-3 pt-20 md:pb-10`}>
      <div className="md:w-3/5">
        <span className="text-primary text-xs md:text-base tracking-[-0.02em] uppercase">
          ABOUT US
        </span>
        <h2 className={`${styles.heading} mt-1 mb-3`}>
          Swift-Net.ca: Bridging the Digital Divide with Trust and Excellence
        </h2>
        <p className={`${styles.paragraph} mb-8 md:mb-0`}>
          For far too long, rural customers have been left behind as urban
          centers continuously upgrade their internet services and
          infrastructure. Swift-Net.ca was established to address this imbalance
          by providing stable, high-speed internet to residential, agricultural,
          and commercial clients. Our goal is to connect these customers to a
          robust and reliable infrastructure, narrowing the digital divide.{" "}
          <br /> <br />
          Driven by high demand within our service area, Swift-Net.ca is rapidly
          expanding its network coverage. But our commitment to rural internet
          you can trust goes beyond technology alone. We also deliver
          exceptional customer service that our clients can vouch for. <br />{" "}
          <br />
          At Swift-Net.ca, we believe the true advantage of being our client
          begins after connecting you to the technology you need. Our dedicated
          team prides itself on offering a seamless and personalized service
          experience from the initial site survey to installation and beyond. As
          long as you're our customer, you can expect unparalleled support and
          assistance. <br /> <br />
          In today's fast-paced world, we understand the importance of a strong
          and reliable connection. It's our unwavering focus on exceptional
          customer service that sets us apart from the competition. If you
          believe, like we do, that the most important connection is the one
          between you and your internet service provider, we'd love to hear from
          you. Join Swift-Net.ca and experience the difference firsthand.
        </p>
      </div>
    </div>
  );
};

export default About;
