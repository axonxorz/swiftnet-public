import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={`${style.wifiHeroBg} h-auto `}>
      {/* <div className="bg-white p-3"> */}
      <div className="w-full h-screen flex items-center justify-start  ">
        {/* <div className="absolute top-0 right-0 w-full h-[20%]  bg-gradient-to-b  from-black/50 -z-50"></div> */}
        <div
          className={`w-full md:w-[658px]  min-h-[444px]  md:ml-[10%] rounded-md bg-primary/90  py-8 px-6 `}
        >
          <p className="mb-2 text-white">Swift-Net.ca Presents</p>
          <p className="font-semibold text-2xl md:text-6xl tracking-[-0.02em] text-white md:w-4/5 leading-[44px] md:leading-[72px]">
            Whole Home Wi-Fi Solutions by Swift-net.ca
          </p>
          <p className={`${styles.paragraph} text-white md:w-[90%] mt-6 mb-12`}>
            Welcome to a new era of internet experience, brought to you by
            Swift-Net.ca. We're excited to introduce the Wi-Fi App by Calix, a
            game-changing solution designed to keep you connected wherever you
            are in your home. This service is optimized, secure, and fully
            supported, with a host of features like ConnectIQ to protect you,
            your family, and your devices.
          </p>

          <Link href={"/sign-up"}>
            <div
              className={` bg-white text-center py-2 rounded-lg cursor-pointer text-white mt-6 w-[160px]`}
            >
              <p className="text-primary text-lg">Sign Up</p>
            </div>
          </Link>

          <div className="w-full mt-6 flex gap-4">
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.calix.smarthome"
              }
            >
              <svg
                className="cursor-pointer hover:bg-primary/95"
                width="149"
                height="44"
                viewBox="0 0 149 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74.9499 23.9264C72.3627 23.9264 70.254 25.8943 70.254 28.6047C70.254 31.2986 72.3627 33.283 74.9499 33.283C77.5382 33.283 79.6469 31.2986 79.6469 28.6047C79.6458 25.8943 77.5371 23.9264 74.9499 23.9264ZM74.9499 31.4416C73.532 31.4416 72.3099 30.2723 72.3099 28.6058C72.3099 26.9217 73.5331 25.77 74.9499 25.77C76.3678 25.77 77.5899 26.9217 77.5899 28.6058C77.5899 30.2712 76.3678 31.4416 74.9499 31.4416ZM64.7045 23.9264C62.1173 23.9264 60.0086 25.8943 60.0086 28.6047C60.0086 31.2986 62.1173 33.283 64.7045 33.283C67.2928 33.283 69.4015 31.2986 69.4015 28.6047C69.4015 25.8943 67.2928 23.9264 64.7045 23.9264ZM64.7045 31.4416C63.2866 31.4416 62.0645 30.2723 62.0645 28.6058C62.0645 26.9217 63.2877 25.77 64.7045 25.77C66.1224 25.77 67.3445 26.9217 67.3445 28.6058C67.3456 30.2712 66.1224 31.4416 64.7045 31.4416ZM52.5187 25.363V27.3474H57.2685C57.1266 28.4639 56.7548 29.279 56.1872 29.8455C55.4964 30.5363 54.4151 31.2986 52.5187 31.2986C49.5949 31.2986 47.3091 28.9413 47.3091 26.0175C47.3091 23.0937 49.5949 20.7364 52.5187 20.7364C54.0961 20.7364 55.2478 21.3568 56.0981 22.1543L57.4984 20.754C56.3104 19.6199 54.7341 18.752 52.5187 18.752C48.5136 18.752 45.1465 22.0124 45.1465 26.0175C45.1465 30.0226 48.5136 33.283 52.5187 33.283C54.6802 33.283 56.3115 32.5735 57.5864 31.2447C58.8976 29.9335 59.3057 28.0899 59.3057 26.6016C59.3057 26.1418 59.2705 25.7161 59.199 25.3619H52.5187V25.363ZM102.357 26.9041C101.968 25.8591 100.78 23.9264 98.3524 23.9264C95.9423 23.9264 93.9392 25.8228 93.9392 28.6047C93.9392 31.2271 95.9247 33.283 98.5823 33.283C100.726 33.283 101.967 31.9718 102.482 31.2095L100.887 30.1458C100.355 30.9257 99.6284 31.4394 98.5823 31.4394C97.5373 31.4394 96.7926 30.9609 96.3141 30.0215L102.57 27.4343L102.357 26.9041ZM95.9775 28.4639C95.9247 26.6555 97.3778 25.7348 98.4239 25.7348C99.239 25.7348 99.9298 26.1429 100.161 26.727L95.9775 28.4639ZM90.8922 33.0003H92.947V19.2492H90.8922V33.0003ZM87.524 24.9725H87.4536C86.9927 24.4225 86.1061 23.9264 84.9907 23.9264C82.651 23.9264 80.5071 25.9823 80.5071 28.6234C80.5071 31.2458 82.651 33.2841 84.9907 33.2841C86.1072 33.2841 86.9927 32.788 87.4536 32.2215H87.524V32.8947C87.524 34.6844 86.567 35.6414 85.0259 35.6414C83.7675 35.6414 82.9876 34.7383 82.6686 33.976L80.8789 34.7207C81.3926 35.9604 82.7566 37.485 85.0259 37.485C87.436 37.485 89.4743 36.0671 89.4743 32.6109V24.2113H87.5251V24.9725H87.524ZM85.1678 31.4416C83.7499 31.4416 82.563 30.2536 82.563 28.6234C82.563 26.9745 83.7499 25.77 85.1678 25.77C86.567 25.77 87.6659 26.9745 87.6659 28.6234C87.6659 30.2536 86.567 31.4416 85.1678 31.4416ZM111.987 19.2492H107.069V33.0003H109.12V27.7907H111.986C114.261 27.7907 116.498 26.144 116.498 23.5205C116.498 20.897 114.262 19.2492 111.987 19.2492ZM112.04 25.8767H109.12V21.1632H112.04C113.574 21.1632 114.445 22.4337 114.445 23.5205C114.445 24.5853 113.574 25.8767 112.04 25.8767ZM124.725 23.9022C123.239 23.9022 121.7 24.5567 121.063 26.0076L122.885 26.7677C123.274 26.0076 124 25.759 124.76 25.759C125.822 25.759 126.901 26.3959 126.918 27.5278V27.6697C126.546 27.4574 125.75 27.1395 124.778 27.1395C122.814 27.1395 120.814 28.2186 120.814 30.2349C120.814 32.0752 122.425 33.2599 124.229 33.2599C125.608 33.2599 126.369 32.6406 126.847 31.9146H126.917V32.9761H128.899V27.7038C128.9 25.264 127.077 23.9022 124.725 23.9022ZM124.476 31.4383C123.805 31.4383 122.867 31.1017 122.867 30.2701C122.867 29.2086 124.035 28.8016 125.044 28.8016C125.945 28.8016 126.37 28.9963 126.918 29.2614C126.759 30.5363 125.662 31.4383 124.476 31.4383ZM136.118 24.2025L133.765 30.1645H133.694L131.252 24.2025H129.041L132.703 32.535L130.615 37.1704H132.756L138.4 24.2025H136.118ZM117.631 33.0003H119.682V19.2492H117.631V33.0003Z"
                  fill="white"
                />
                <path
                  d="M52.1589 11.2673C52.1589 12.1891 51.8861 12.9228 51.3394 13.4706C50.719 14.1218 49.9094 14.4474 48.915 14.4474C47.9624 14.4474 47.1517 14.1174 46.4862 13.4574C45.8196 12.7963 45.4863 11.9779 45.4863 11.0011C45.4863 10.0232 45.8196 9.20476 46.4862 8.54476C47.1517 7.88366 47.9624 7.55366 48.915 7.55366C49.388 7.55366 49.8401 7.64606 50.2691 7.82976C50.6992 8.01456 51.0435 8.25986 51.3009 8.56676L50.7212 9.14756C50.2845 8.62506 49.6828 8.36436 48.9139 8.36436C48.2187 8.36436 47.6181 8.60856 47.111 9.09696C46.6039 9.58536 46.3509 10.2201 46.3509 11C46.3509 11.7799 46.6039 12.4146 47.111 12.903C47.6181 13.3914 48.2187 13.6356 48.9139 13.6356C49.6509 13.6356 50.2658 13.3903 50.7575 12.8986C51.0765 12.5785 51.2613 12.133 51.3108 11.5621H48.9139V10.769H52.1116C52.1446 10.9417 52.1589 11.1078 52.1589 11.2673Z"
                  fill="white"
                />
                <path
                  d="M57.23 8.51072H54.2248V10.6029H56.9352V11.396H54.2248V13.4882H57.23V14.3H53.3767V7.70002H57.23V8.51072Z"
                  fill="white"
                />
                <path
                  d="M60.806 14.3H59.9579V8.51072H58.1143V7.70002H62.6496V8.51072H60.806V14.3Z"
                  fill="white"
                />
                <path
                  d="M65.9309 14.3V7.70002H66.779V14.3H65.9309Z"
                  fill="white"
                />
                <path
                  d="M70.54 14.3H69.6919V8.51072H67.8483V7.70002H72.3836V8.51072H70.54V14.3Z"
                  fill="white"
                />
                <path
                  d="M80.9689 13.4475C80.3199 14.1141 79.5136 14.4474 78.5489 14.4474C77.5842 14.4474 76.7779 14.1141 76.13 13.4475C75.481 12.7809 75.1576 11.9647 75.1576 11C75.1576 10.0353 75.481 9.21911 76.13 8.55251C76.7779 7.88591 77.5842 7.55151 78.5489 7.55151C79.5081 7.55151 80.3133 7.88701 80.9645 8.55691C81.6157 9.22681 81.9413 10.0408 81.9413 11C81.9413 11.9647 81.6168 12.7809 80.9689 13.4475ZM76.7559 12.8942C77.2443 13.3892 77.8416 13.6356 78.5489 13.6356C79.2562 13.6356 79.8546 13.3881 80.3419 12.8942C80.8303 12.3992 81.0756 11.7678 81.0756 11C81.0756 10.2322 80.8303 9.60081 80.3419 9.10581C79.8546 8.61081 79.2562 8.36441 78.5489 8.36441C77.8416 8.36441 77.2443 8.61191 76.7559 9.10581C76.2686 9.60081 76.0233 10.2322 76.0233 11C76.0233 11.7678 76.2686 12.3992 76.7559 12.8942Z"
                  fill="white"
                />
                <path
                  d="M83.1315 14.3V7.70002H84.1633L87.3709 12.8337H87.4072L87.3709 11.5621V7.70002H88.219V14.3H87.3335L83.9774 8.91663H83.9411L83.9774 10.1882V14.3H83.1315Z"
                  fill="white"
                />
                <path
                  d="M52.1589 11.2673C52.1589 12.1891 51.8861 12.9228 51.3394 13.4706C50.719 14.1218 49.9094 14.4474 48.915 14.4474C47.9624 14.4474 47.1517 14.1174 46.4862 13.4574C45.8196 12.7963 45.4863 11.9779 45.4863 11.0011C45.4863 10.0232 45.8196 9.20476 46.4862 8.54476C47.1517 7.88366 47.9624 7.55366 48.915 7.55366C49.388 7.55366 49.8401 7.64606 50.2691 7.82976C50.6992 8.01456 51.0435 8.25986 51.3009 8.56676L50.7212 9.14756C50.2845 8.62506 49.6828 8.36436 48.9139 8.36436C48.2187 8.36436 47.6181 8.60856 47.111 9.09696C46.6039 9.58536 46.3509 10.2201 46.3509 11C46.3509 11.7799 46.6039 12.4146 47.111 12.903C47.6181 13.3914 48.2187 13.6356 48.9139 13.6356C49.6509 13.6356 50.2658 13.3903 50.7575 12.8986C51.0765 12.5785 51.2613 12.133 51.3108 11.5621H48.9139V10.769H52.1116C52.1446 10.9417 52.1589 11.1078 52.1589 11.2673Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M57.23 8.51072H54.2248V10.6029H56.9352V11.396H54.2248V13.4882H57.23V14.3H53.3767V7.70002H57.23V8.51072Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M60.806 14.3H59.9579V8.51072H58.1143V7.70002H62.6496V8.51072H60.806V14.3Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M65.9309 14.3V7.70002H66.779V14.3H65.9309Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M70.54 14.3H69.6919V8.51072H67.8483V7.70002H72.3836V8.51072H70.54V14.3Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M80.9689 13.4475C80.3199 14.1141 79.5136 14.4474 78.5489 14.4474C77.5842 14.4474 76.7779 14.1141 76.13 13.4475C75.481 12.7809 75.1576 11.9647 75.1576 11C75.1576 10.0353 75.481 9.21911 76.13 8.55251C76.7779 7.88591 77.5842 7.55151 78.5489 7.55151C79.5081 7.55151 80.3133 7.88701 80.9645 8.55691C81.6157 9.22681 81.9413 10.0408 81.9413 11C81.9413 11.9647 81.6168 12.7809 80.9689 13.4475ZM76.7559 12.8942C77.2443 13.3892 77.8416 13.6356 78.5489 13.6356C79.2562 13.6356 79.8546 13.3881 80.3419 12.8942C80.8303 12.3992 81.0756 11.7678 81.0756 11C81.0756 10.2322 80.8303 9.60081 80.3419 9.10581C79.8546 8.61081 79.2562 8.36441 78.5489 8.36441C77.8416 8.36441 77.2443 8.61191 76.7559 9.10581C76.2686 9.60081 76.0233 10.2322 76.0233 11C76.0233 11.7678 76.2686 12.3992 76.7559 12.8942Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  d="M83.1315 14.3V7.70002H84.1633L87.3709 12.8337H87.4072L87.3709 11.5621V7.70002H88.219V14.3H87.3335L83.9774 8.91663H83.9411L83.9774 10.1882V14.3H83.1315Z"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeMiterlimit="10"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1946 8.7146C11.0507 9.01741 10.9707 9.39455 10.9707 9.83725V34.1649C10.9707 34.6085 11.0508 34.9857 11.1949 35.2883L24.4807 22.0006L11.1946 8.7146ZM11.8884 36.009C12.3851 36.245 13.0445 36.1876 13.7658 35.7786L29.3837 26.9037L25.1878 22.7078L11.8884 36.009ZM30.2862 26.392L35.2169 23.5906C36.7536 22.7161 36.7536 21.2872 35.2169 20.4138L30.284 17.6108L25.8948 22.0006L30.2862 26.392ZM29.3822 17.0984L13.7658 8.22466C13.0445 7.81477 12.385 7.75779 11.8883 7.99411L25.1877 21.2935L29.3822 17.0984Z"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="147.5"
                  height="43"
                  rx="4.5"
                  stroke="white"
                />
              </svg>
            </Link>

            <Link href={"https://apps.apple.com/us/app/commandiq/id1437258693"}>
              <svg
                width="133"
                height="44"
                className="cursor-pointer hover:bg-primary/95"
                viewBox="0 0 133 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M90.1793 21.1211V23.6413H88.5997V25.2939H90.1793V30.9094C90.1793 32.8269 91.0468 33.5939 93.229 33.5939C93.6125 33.5939 93.9778 33.5482 94.2973 33.4935V31.859C94.0234 31.8864 93.8499 31.9047 93.5486 31.9047C92.5716 31.9047 92.1425 31.4481 92.1425 30.4072V25.2939H94.2973V23.6413H92.1425V21.1211H90.1793Z"
                  fill="white"
                />
                <path
                  d="M99.8566 33.7309C102.76 33.7309 104.541 31.786 104.541 28.5628C104.541 25.3579 102.751 23.4039 99.8566 23.4039C96.953 23.4039 95.1633 25.3579 95.1633 28.5628C95.1633 31.786 96.9438 33.7309 99.8566 33.7309ZM99.8566 31.9869C98.1491 31.9869 97.1904 30.7359 97.1904 28.5628C97.1904 26.4079 98.1491 25.1479 99.8566 25.1479C101.555 25.1479 102.523 26.4079 102.523 28.5628C102.523 30.7268 101.555 31.9869 99.8566 31.9869Z"
                  fill="white"
                />
                <path
                  d="M106.064 33.5391H108.027V27.668C108.027 26.2709 109.077 25.3305 110.566 25.3305C110.913 25.3305 111.497 25.3944 111.661 25.4492V23.5134C111.451 23.4586 111.077 23.4312 110.785 23.4312C109.488 23.4312 108.383 24.1435 108.1 25.1205H107.954V23.5956H106.064V33.5391Z"
                  fill="white"
                />
                <path
                  d="M116.536 25.0748C117.988 25.0748 118.937 26.0883 118.983 27.6497H113.961C114.07 26.0975 115.084 25.0748 116.536 25.0748ZM118.974 30.8546C118.608 31.6308 117.796 32.0599 116.609 32.0599C115.038 32.0599 114.025 30.9551 113.961 29.2111V29.1015H120.982V28.4167C120.982 25.2939 119.312 23.4039 116.545 23.4039C113.742 23.4039 111.961 25.4218 111.961 28.5993C111.961 31.7769 113.705 33.7309 116.554 33.7309C118.828 33.7309 120.416 32.6352 120.864 30.8546H118.974Z"
                  fill="white"
                />
                <path
                  d="M77.3054 29.8671C77.4568 32.3088 79.4915 33.8703 82.52 33.8703C85.7566 33.8703 87.7819 32.2331 87.7819 29.6211C87.7819 27.5674 86.6273 26.4317 83.826 25.7787L82.3212 25.4096C80.542 24.9932 79.8228 24.4349 79.8228 23.4601C79.8228 22.2298 80.9395 21.4254 82.6146 21.4254C84.2045 21.4254 85.3024 22.2109 85.5011 23.4696H87.5642C87.4412 21.1698 85.4159 19.5515 82.643 19.5515C79.6619 19.5515 77.6745 21.1698 77.6745 23.602C77.6745 25.6084 78.8007 26.8008 81.2707 27.3781L83.031 27.804C84.8386 28.2299 85.6336 28.8545 85.6336 29.8955C85.6336 31.1069 84.3844 31.987 82.6809 31.987C80.8543 31.987 79.5862 31.1637 79.4064 29.8671H77.3054Z"
                  fill="white"
                />
                <path
                  d="M56.9693 23.4312C55.618 23.4312 54.4492 24.1069 53.8466 25.2392H53.7005V23.5956H51.8104V36.8445H53.7735V32.0325H53.9287C54.4492 33.0826 55.5723 33.7035 56.9876 33.7035C59.4986 33.7035 61.0965 31.7221 61.0965 28.5628C61.0965 25.4035 59.4986 23.4312 56.9693 23.4312ZM56.4123 31.9412C54.7688 31.9412 53.737 30.6446 53.737 28.5719C53.737 26.4901 54.7688 25.1935 56.4215 25.1935C58.0833 25.1935 59.0785 26.4627 59.0785 28.5628C59.0785 30.672 58.0833 31.9412 56.4123 31.9412Z"
                  fill="white"
                />
                <path
                  d="M67.9658 23.4312C66.6144 23.4312 65.4457 24.1069 64.843 25.2392H64.6969V23.5956H62.8069V36.8445H64.77V32.0325H64.9252C65.4457 33.0826 66.5688 33.7035 67.9841 33.7035C70.495 33.7035 72.0929 31.7221 72.0929 28.5628C72.0929 25.4035 70.495 23.4312 67.9658 23.4312ZM67.4088 31.9412C65.7653 31.9412 64.7335 30.6446 64.7335 28.5719C64.7335 26.4901 65.7653 25.1935 67.4179 25.1935C69.0798 25.1935 70.075 26.4627 70.075 28.5628C70.075 30.672 69.0798 31.9412 67.4088 31.9412Z"
                  fill="white"
                />
                <path
                  d="M48.2882 33.5391H50.5406L45.6099 19.8827H43.3291L38.3984 33.5391H40.5751L41.8338 29.9144H47.0389L48.2882 33.5391ZM44.3607 22.3623H44.5216L46.4995 28.1352H42.3733L44.3607 22.3623Z"
                  fill="white"
                />
                <path
                  d="M39.7168 9.58196V16.1699H42.0954C44.0585 16.1699 45.1953 14.96 45.1953 12.8554C45.1953 10.7827 44.0494 9.58196 42.0954 9.58196H39.7168ZM40.7395 10.5133H41.9813C43.3463 10.5133 44.1544 11.3807 44.1544 12.8691C44.1544 14.3802 43.36 15.2385 41.9813 15.2385H40.7395V10.5133Z"
                  fill="white"
                />
                <path
                  d="M48.6769 16.2657C50.1287 16.2657 51.019 15.2933 51.019 13.6817C51.019 12.0792 50.1242 11.1022 48.6769 11.1022C47.2251 11.1022 46.3303 12.0792 46.3303 13.6817C46.3303 15.2933 47.2205 16.2657 48.6769 16.2657ZM48.6769 15.3937C47.8232 15.3937 47.3438 14.7683 47.3438 13.6817C47.3438 12.6043 47.8232 11.9742 48.6769 11.9742C49.5261 11.9742 50.01 12.6043 50.01 13.6817C50.01 14.7637 49.5261 15.3937 48.6769 15.3937Z"
                  fill="white"
                />
                <path
                  d="M58.6003 11.1981H57.6188L56.7331 14.992H56.6555L55.6328 11.1981H54.6923L53.6697 14.992H53.5966L52.7064 11.1981H51.7111L53.0807 16.1699H54.0897L55.1123 12.5084H55.19L56.2172 16.1699H57.2353L58.6003 11.1981Z"
                  fill="white"
                />
                <path
                  d="M59.7307 16.1699H60.7123V13.2617C60.7123 12.4856 61.1734 12.0016 61.8993 12.0016C62.6252 12.0016 62.9722 12.3988 62.9722 13.1978V16.1699H63.9538V12.9512C63.9538 11.7688 63.342 11.1022 62.2326 11.1022C61.4839 11.1022 60.9908 11.4355 60.7488 11.9879H60.6758V11.1981H59.7307V16.1699Z"
                  fill="white"
                />
                <path
                  d="M65.4996 16.1699H66.4812V9.25781H65.4996V16.1699Z"
                  fill="white"
                />
                <path
                  d="M70.1728 16.2657C71.6246 16.2657 72.5148 15.2933 72.5148 13.6817C72.5148 12.0792 71.62 11.1022 70.1728 11.1022C68.721 11.1022 67.8262 12.0792 67.8262 13.6817C67.8262 15.2933 68.7164 16.2657 70.1728 16.2657ZM70.1728 15.3937C69.319 15.3937 68.8397 14.7683 68.8397 13.6817C68.8397 12.6043 69.319 11.9742 70.1728 11.9742C71.022 11.9742 71.5059 12.6043 71.5059 13.6817C71.5059 14.7637 71.022 15.3937 70.1728 15.3937Z"
                  fill="white"
                />
                <path
                  d="M75.4395 15.4257C74.9053 15.4257 74.5172 15.1655 74.5172 14.7181C74.5172 14.2798 74.8277 14.0469 75.5125 14.0013L76.7269 13.9237V14.3391C76.7269 14.9555 76.1791 15.4257 75.4395 15.4257ZM75.1884 16.2521C75.8412 16.2521 76.3845 15.969 76.6813 15.4714H76.7589V16.1699H77.7039V12.7732C77.7039 11.7231 77.0008 11.1022 75.7545 11.1022C74.6268 11.1022 73.8233 11.6501 73.7229 12.5038H74.6725C74.782 12.1523 75.161 11.9514 75.7088 11.9514C76.3799 11.9514 76.7269 12.2482 76.7269 12.7732V13.2023L75.3801 13.28C74.1977 13.353 73.5311 13.8689 73.5311 14.7637C73.5311 15.6722 74.2296 16.2521 75.1884 16.2521Z"
                  fill="white"
                />
                <path
                  d="M81.0349 16.2521C81.7197 16.2521 82.2995 15.9279 82.5962 15.3846H82.6738V16.1699H83.6143V9.25781H82.6328V11.9879H82.5597C82.2903 11.4401 81.7151 11.1159 81.0349 11.1159C79.7794 11.1159 78.9713 12.1112 78.9713 13.6817C78.9713 15.2568 79.7702 16.2521 81.0349 16.2521ZM81.3133 11.9971C82.1351 11.9971 82.651 12.6499 82.651 13.6863C82.651 14.7272 82.1397 15.3709 81.3133 15.3709C80.4824 15.3709 79.9848 14.7363 79.9848 13.6817C79.9848 12.6362 80.487 11.9971 81.3133 11.9971Z"
                  fill="white"
                />
                <path
                  d="M89.9794 16.2657C91.4313 16.2657 92.3215 15.2933 92.3215 13.6817C92.3215 12.0792 91.4267 11.1022 89.9794 11.1022C88.5276 11.1022 87.6328 12.0792 87.6328 13.6817C87.6328 15.2933 88.5231 16.2657 89.9794 16.2657ZM89.9794 15.3937C89.1257 15.3937 88.6463 14.7683 88.6463 13.6817C88.6463 12.6043 89.1257 11.9742 89.9794 11.9742C90.8286 11.9742 91.3125 12.6043 91.3125 13.6817C91.3125 14.7637 90.8286 15.3937 89.9794 15.3937Z"
                  fill="white"
                />
                <path
                  d="M93.6208 16.1699H94.6024V13.2617C94.6024 12.4856 95.0635 12.0016 95.7894 12.0016C96.5153 12.0016 96.8623 12.3988 96.8623 13.1978V16.1699H97.8439V12.9512C97.8439 11.7688 97.2321 11.1022 96.1227 11.1022C95.374 11.1022 94.8809 11.4355 94.6389 11.9879H94.5659V11.1981H93.6208V16.1699Z"
                  fill="white"
                />
                <path
                  d="M102.365 9.96089V11.2209H101.575V12.0473H102.365V14.855C102.365 15.8138 102.798 16.1973 103.889 16.1973C104.081 16.1973 104.264 16.1744 104.424 16.147V15.3298C104.287 15.3435 104.2 15.3527 104.049 15.3527C103.561 15.3527 103.346 15.1244 103.346 14.6039V12.0473H104.424V11.2209H103.346V9.96089H102.365Z"
                  fill="white"
                />
                <path
                  d="M105.741 16.1699H106.723V13.2663C106.723 12.513 107.17 12.0062 107.974 12.0062C108.668 12.0062 109.037 12.408 109.037 13.2023V16.1699H110.019V12.9604C110.019 11.7779 109.366 11.1068 108.307 11.1068C107.558 11.1068 107.033 11.4401 106.791 11.9971H106.714V9.25781H105.741V16.1699Z"
                  fill="white"
                />
                <path
                  d="M113.56 11.9377C114.286 11.9377 114.761 12.4445 114.783 13.2252H112.272C112.327 12.449 112.834 11.9377 113.56 11.9377ZM114.779 14.8276C114.596 15.2157 114.19 15.4303 113.596 15.4303C112.811 15.4303 112.304 14.8779 112.272 14.0059V13.9511H115.783V13.6087C115.783 12.0473 114.948 11.1022 113.564 11.1022C112.163 11.1022 111.273 12.1112 111.273 13.7C111.273 15.2887 112.145 16.2657 113.569 16.2657C114.706 16.2657 115.5 15.7179 115.724 14.8276H114.779Z"
                  fill="white"
                />
                <path
                  d="M27.7458 22.3309C27.7696 20.4818 28.7627 18.7322 30.338 17.7637C29.3442 16.3443 27.6796 15.4444 25.9477 15.3902C24.1006 15.1963 22.3098 16.4955 21.3685 16.4955C20.409 16.4955 18.9598 15.4095 17.3992 15.4416C15.365 15.5073 13.4687 16.6638 12.479 18.4422C10.3516 22.1255 11.9384 27.5386 13.9763 30.5159C14.9959 31.9738 16.1875 33.6023 17.7467 33.5445C19.2725 33.4813 19.8423 32.5716 21.684 32.5716C23.5087 32.5716 24.0433 33.5445 25.6341 33.5078C27.2714 33.4813 28.3029 32.0435 29.2867 30.5718C30.0193 29.533 30.583 28.3849 30.957 27.17C29.0329 26.3562 27.748 24.42 27.7458 22.3309Z"
                  fill="white"
                />
                <path
                  d="M24.741 13.4322C25.6336 12.3606 26.0734 10.9832 25.9669 9.59253C24.6031 9.73577 23.3433 10.3876 22.4386 11.4181C21.5539 12.425 21.0935 13.7781 21.1805 15.1156C22.5448 15.1297 23.886 14.4955 24.741 13.4322Z"
                  fill="white"
                />
                <rect
                  x="1"
                  y="0.5"
                  width="131"
                  height="43"
                  rx="6.5"
                  stroke="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;