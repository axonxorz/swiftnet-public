import React from "react";
import ima1 from "@/assets/landings/bestinternetSec/Affordable.png";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";

const Section4 = () => {
  const data = [
    {
      class: "affordableBg",
      title: "Affordable Internet in Lloydminster: Our Commitment to Value",
      p1: "At Swift-Net.ca, we don't just believe that high-speed internet should be accessible to everyone - we make it happen. We're committed to providing affordable internet services in Lloydminster. Our range of packages ensures that you can find a plan that fits your budget without compromising on speed or reliability. ",
      p2: "Experience the freedom of unlimited internet service! With no data caps or limits, you can surf, stream, and game to your heart's content without worrying about running out of data, incurring overage charges, or speed throttling. Our affordable plans come with a fixed monthly price, so you know exactly what to expect on your bill – no hidden fees or unexpected charges. ",
    },
    {
      class: "experienceBg",

      title: "Experience High-Speed Internet in Lloydminster",
      p1: "With Swift-Net.ca, buffering is a thing of the past. Our high-speed internet packages offer lightning-fast speeds, perfect for streaming your favorite shows, playing online games, or simply browsing the web. Experience the difference high-speed internet can make in your daily life. ",
      p2: "We don't just provide fast and reliable wireless internet service; we redefine it. With Swift-Net.ca, you can stream, browse, and game without buffering or delays. Our internet service ensures consistent speeds, so you won't experience a sudden decrease in performance during peak hours or after reaching a certain data threshold.",
    },
    {
      class: "lloydminsterBg",

      title: "Llyoydminster Broadband: Reliable and Fast",
      p1: "Our broadband services are designed with one thing in mind: unshakeable reliability. We know how frustrating it can be when your internet connection drops out, which is why we've built our network to provide consistent, reliable speeds. With Swift-Net.ca broadband, you can enjoy a smooth, uninterrupted online experience.",
      p2: "Swift-Net.ca is not just committed, but driven to provide stable and reliable internet service to the communities of Lloydminster, Cold Lake, North Battleford, Bonnyville, Meadow Lake, and Kindersley, and the surrounding communities of northern Alberta and Saskatchewan. Our permanent fixed wireless connections are specifically designed to withstand the unique weather conditions of northern Alberta and Saskatchewan, ensuring that our customers enjoy uninterrupted internet access even during power disruptions, extreme weather, or construction in the summer.",
    },
    {
      class: "stayConnectedBg",

      title: "Stay Connected with Our Wireless Internet in Lloydminster",
      p1: "Our wireless internet services offer the ultimate in convenience and flexibility. Whether you're working from home, streaming your favorite shows, or just browsing the web, our wireless internet keeps you connected. Plus, with our easy-to-use equipment and setup, getting online has never been easier. **[Stay Connected](#)**",
      p2: "Swift-Net.ca doesn't just provide a wireless connection; we engineer a permanent fixed wireless connection. This involves installing a wireless receiver on your property to connect to our network. This robust infrastructure ensures a stable and high-speed internet connection without the need for satellites or wired connections like DSL or cable. **[Learn More](#)**",
    },
    {
      class: "futureBg",

      title: "The Future of Connectivity in Lloydminster",
      p1: "While other providers may offer fiber internet services to homes, Swift-Net.ca takes a different approach. Our network is built with redundant fiber backhaul to our towers. This means we can deliver the most reliable internet in Lloydminster. Our network is designed to provide the speed and reliability of fiber, without the need for physical fiber connections to each home. It's not just an alternative to fiber; it's a superior choice.",
      p2: "Experience the future of internet with our wireless services. Offering high speeds and a reliable connection, our network is perfect for heavy internet users. Our fixed wireless network is designed with built-in redundancies to minimize the impact of remote power disruptions on your internet connectivity. This ensures that you can continue to enjoy a stable connection even when power outages occur in your community. ",
    },
    {
      class: "vaietyinternetBg",

      title: "Choose from Our Variety of Internet",
      p1: "Packages in Lloydminster. We offer a range of internet packages to suit every need and budget. From basic packages for light users to comprehensive plans for heavy users, we have something for everyone. Plus, with our easy-to-understand pricing and no hidden fees, choosing the right package has never been easier. ",
      p2: "Our team is dedicated to serving rural communities in Alberta and Saskatchewan, ensuring that everyone can enjoy high-speed home Wi-Fi, no matter where they live. Simply enter your home address into our signup form, and we'll get you connected in no time. ",
    },
  ];
  return (
    <>
      <div className={"md:py-8 w-full  bg-[#F1FAFF]"}>
        <div className={styles.width + "py-[10px] md:py-[20px] "}>
          <p className="text-[#1F2937] text-[36px] font-semibold">
            Why We're the Best Internet Provider in Lloydminster
          </p>

          <p className="text-[16px] mt-5 ">
            Swift-Net.ca is the undisputed leader among internet providers. As a
            part of the Lloydminster community, we're dedicated to providing our
            neighbors with the best internet services possible. Our customers
            consistently praise our lightning-fast speeds, rock-solid service,
            and friendly, local customer support. But don't just take our word
            for it - check out our customer testimonials to see why we're the
            best internet provider in Lloydminster. <br /> <br /> Choosing
            Swift-Net.ca means choosing an internet service provider that values
            transparency and customer satisfaction above all else. Our truly
            unlimited home Wi-Fi internet service lets you enjoy high-speed home
            Wi-Fi without any limitations or restrictions. Connect with us today
            and experience the freedom of truly unlimited internet in rural
            Alberta and Saskatchewan.{" "}
          </p>

          <div className="w-full py-3 ">
            <div className="flex  justify-between items-start  flex-wrap mt-3 ">
              {data.map((item) => {
                return (
                  <div className="w-full md:w-[49%] min-h-[400px] flex items-start justify-start flex-col my-3">
                    <div
                      className={`${style[item.class]} h-[256px] w-full `}
                    ></div>
                    <p className="font-bold text-[24px] mt-3">{item.title}</p>
                    <p className="text-[16px] mt-3">{item.p1}</p>
                    <br />
                    <br />
                    <p className="text-[16px]">{item.p2}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
