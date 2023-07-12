import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import map from "../../../assets/map.png";
import mapsquare from "../../../assets/mapsquare.png";
const ServiceProvider = () => {
  return (
    <div className="bg-[#F1FAFF] pt-12 pb-12  md:pt-20 md:pb-28">
      <div className={styles.width}>
        <h2 className={`${styles.heading} md:w-3/5`}>
          Are you tired of{" "}
          <span className="text-[#EF4444]">slow and unreliable</span> internet
          service in your rural community?{" "}
        </h2>
        <p className={`${styles.paragraph} md:w-[65%] mt-3 mb-5`}>
          Look no further! Swift-Net.ca is the leading wireless internet service
          provider (WISP) in Alberta and Saskatchewan. We're dedicated to
          bringing high-speed home Wi-Fi to rural communities like Lloydminster,
          Cold Lake, North Battleford, and more!
        </p>
        <div className="hidden md:flex rounded-xl overflow-hidden">
          <Image
            src={map}
            alt="Map showing pins on cities including Lloydminster, AB/SK, Cold Lake, AB. North Battleford, SK. Bonnyville, AB. Meadow Lake, SK. Kindersley, SK. Battleford, SK. Athabasca, AB. Lac La Biche, AB. Unity, SK, Provost, AB. Big Island Lake Cree Nation, SK. Macklin, SK. Blackfoot, AB. Wilkie, SK. Lashburn, SK. Maidstone, SK. Flying Dust First Nations, SK. Kerrobert, SK. Kitscoty, AB. and Boyle, A"
            unoptimized={true}
          />
        </div>
        <div className="flex md:hidden rounded-xl overflow-hidden">
          <Image
            src={mapsquare}
            alt="Map showing pins on cities including Lloydminster, AB/SK, Cold Lake, AB. North Battleford, SK. Bonnyville, AB. Meadow Lake, SK. Kindersley, SK. Battleford, SK. Athabasca, AB. Lac La Biche, AB. Unity, SK, Provost, AB. Big Island Lake Cree Nation, SK. Macklin, SK. Blackfoot, AB. Wilkie, SK. Lashburn, SK. Maidstone, SK. Flying Dust First Nations, SK. Kerrobert, SK. Kitscoty, AB. and Boyle, A"
            unoptimized={true}
          />
        </div>

        <div className="flex items-center justify-between mt-4 px-4">
          <ul className="list-disc">
            <li>Lloydminster, AB/SK </li>
            <li>Cold Lake, AB</li>
            <li>North Battleford, SK</li>
            <li>Bonnyville, AB</li>
            <li>Meadow Lake, SK</li>
          </ul>

          <ul className="list-disc">
            <li>Kindersley, SK</li>
            <li>Battleford, SK</li>
            <li>Athabasca, AB</li>
            <li>Lac La Biche, AB</li>
            <li>Unity, SKProvost, AB</li>
          </ul>
          <ul className="list-disc">
            <li>Big Island Lake Cree Nation, SK </li>
            <li>Macklin, SK</li>
            <li>Blackfoot, AB</li>
            <li>Wilkie, SK</li>
            <li>Lashburn, SK</li>
          </ul>

          <ul className="list-disc">
            <li>Maidstone, SK </li>
            <li>Flying Dust First Nations, SK</li>
            <li>Kerrobert, SK</li>
            <li>Kitscoty, AB</li>
            <li>Boyle, AB</li>
          </ul>
        </div>

        <p className={`${styles.paragraph} md:w-[65%] mt-5`}>
          Experience the difference with Swift-Net.ca's reliable internet
          service, designed specifically for rural communities in Alberta and
          Saskatchewan. Sign up today and enjoy fast and dependable home Wi-Fi
          for you and your family!
        </p>
      </div>
    </div>
  );
};

export default ServiceProvider;
