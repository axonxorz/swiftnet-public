import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import map from "../../../assets/map.webp";
import mapsquare from "../../../assets/mapsquare.webp";
import Link from "next/link";
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
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="flex md:hidden rounded-xl overflow-hidden">
          <Image
            src={mapsquare}
            alt="Map showing pins on cities including Lloydminster, AB/SK, Cold Lake, AB. North Battleford, SK. Bonnyville, AB. Meadow Lake, SK. Kindersley, SK. Battleford, SK. Athabasca, AB. Lac La Biche, AB. Unity, SK, Provost, AB. Big Island Lake Cree Nation, SK. Macklin, SK. Blackfoot, AB. Wilkie, SK. Lashburn, SK. Maidstone, SK. Flying Dust First Nations, SK. Kerrobert, SK. Kitscoty, AB. and Boyle, A"
            unoptimized={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="flex items-center  md:flex-row gap-4 justify-between mt-4 px-4 flex-shrink flex-wrap">
          <ul className="list-disc ">
            <li>Kindersley, SK</li>
            <li className="cursor-pointer hover:underline underline font-bold"
              ><Link href={"https://getfasterwifi.com/supercharge-your-wifi"}>Cold Lake, AB </Link>
            </li>
            <li>The Battlefords, SK</li>
            <li>Bonnyville, AB</li>
            <li>Meadow Lake, SK</li>
          </ul>

          <ul className="list-disc">
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href={"https://getfasterwifi.com/supercharge-your-wifi"}>Lloydminster, AB/SK </Link>
            </li>
            <li>Unity, SK</li>
            <li>Athabasca, AB</li>
            <li>Lac La Biche, AB</li>
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href="https://getfasterwifi.ca/provost-wifi-campaign-1">Provost, AB </Link>
            </li>
          </ul>
          <ul className="list-disc">
            <li className="cursor-pointer hover:underline underline font-bold">
            <Link href="https://getfasterwifi.ca/marshall-lashburn-campaign-1866441">Marshall, SK </Link>
            </li>
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href="https://getfasterwifi.ca/provost-wifi-campaign-1">Macklin, SK </Link>
            </li>
            <li>Blackfoot, AB</li>
            <li>Wilkie, SK</li>
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href="https://getfasterwifi.ca/marshall-lashburn-campaign-1866441">Lashburn, SK </Link>
            </li>
          </ul>

          <ul className="list-disc">
            <li>Maidstone, SK </li>
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href="https://getfasterwifi.ca/jackfish-wifi-campaign-1">Jackfish/Murray Lake, SK</Link>
            </li>
            <li className="cursor-pointer hover:underline underline font-bold">
              <Link href="https://getfasterwifi.ca/swift-net-internet-inquiry-9785-5776-3473">Kerrobert, SK </Link>
            </li>
            <li>Kitscoty, AB</li>
            <li>Boyle, AB</li>
          </ul>
        </div>

        <p className={`${styles.paragraph} md:w-[65%] mt-5`}>
          Experience the difference with Swift-Net.ca's reliable internet
          service, designed specifically for rural communities in Alberta and
          Saskatchewan. Sign up today and enjoy our fast and dependable Whole Home Wi-Fi
          for you and your family!
        </p>
      </div>
    </div>
  );
};

export default ServiceProvider;
