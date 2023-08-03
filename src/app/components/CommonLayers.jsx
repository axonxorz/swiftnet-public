import React from "react";
import styles from "../styles/styles";
import Image from "next/image";
import network from "../../assets/network.png";
import Link from "next/link";

const CommonLayers = (props) => {
  return (
    <div className={`pt-20 ${styles.width}`}>
      <div className="h-[60px]"></div>
      <div className="flex flex-col lg:flex-row items-start justify-start px-4 ">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start  gap-4 px-3">
          <p className={styles.paragraph}>
            {" "}
            <Link href={"/"}>
              {" "}
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>{" "}
            {" > "}
            <span className="text-primary font-semibold ">{props.heading}</span>
          </p>

          <p className="font-bold text-[38px] md:text-[48px] ">
            {props.heading}
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-10 px-3">
          <p>{" " + props.description}</p>

          <div className="w-full flex mt-4 ">
            <Link href={"/sign-up"}>
              <button className="bg-primary  hover:bg-primary/40 text-white  w-[130px] cursor-pointer  font-medium text-base border-[1px] border-solid border-white  py-2 rounded-md">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${props.imgUrl} h-[50vh] md:h-[70vh] my-6`}></div>

      <div className="flex items-center justify-center px-4 mb-3">
        <div className="w-full flex flex-col md:flex-row justify-center items-center  gap-4">
          <div
            className={` w-full lg:w-1/2 md:mx-0 flex flex-col gap-10 items-center justify-center `}
          >
            {props.data.map((data) => (
              <div key={data.id}>
                <span className={` text-[30px] md:text-[34px] font-semibold`}>
                  {data.heading && data.heading}
                </span>
                <p className={`${styles.paragraph}`}>{data.description}</p>
              </div>
            ))}
          </div>

          <div className=" w-full lg:w-1/2 items-center justify-center flex  h-full">
            <Image
              src={props.img}
              alt="/"
              className="w-full h-[40vh] md:h-auto"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full  my-10 bg-primary">
        <div className="w-[10px] min-h-[300px] bg-primary"></div>
        <div className="flex-1 min-h-[300px] py-4 bg-[#F1FAFF] relative flex flex-col items-start justify-center md:px-4">
          <div className="absolute bottom-0  right-0  ">
            <svg
              width="255"
              height="270"
              viewBox="0 0 255 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.05">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M72.4385 269.909L77.8479 115.258L104.359 95.522L105.913 57.9238L127.443 42.4722L148.974 57.9238L150.527 95.522L177.038 115.258L182.448 269.909H72.4385ZM116.249 93.1654V94.906H138.583V93.1654H116.249ZM116.249 96.6199V98.3606H138.583V96.6199H116.249ZM116.249 100.074V101.815H138.583V100.074H116.249ZM116.249 106.984V108.724H138.583V106.984H116.249ZM116.249 103.529V105.27H138.583V103.529H116.249Z"
                  fill="#05649C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M150.446 94.2095L179.1 115.927L177.868 117.534L150.473 96.7803L150.446 94.2095Z"
                  fill="#05649C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M103.824 58.5659L127.444 41.2129L151.036 58.5659L149.831 60.1994L127.444 43.7301L105.029 60.1994L103.824 58.5659Z"
                  fill="#05649C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.413 94.2095L75.7588 115.927L76.9906 117.534L104.413 96.7803V94.2095Z"
                  fill="#05649C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 75.8658C0 42.472 19.8167 13.6039 48.5777 0L55.0583 10.0422C30.2071 21.6109 12.9612 46.7299 12.9612 75.8658C12.9612 105.002 30.1267 130.04 54.8976 141.636L48.417 151.678C19.7631 138.047 0 109.233 0 75.8658ZM51.8447 75.8658C51.8447 92.0137 61.5121 105.725 74.9285 110.625L81.1681 100.985L81.302 100.744C71.8757 98.2265 64.8327 88.0504 64.8327 75.8658C64.8327 63.6812 71.956 53.398 81.4627 50.961L81.1681 50.4522L75.116 41.0527C61.6192 45.9265 51.8715 59.6643 51.8715 75.8658H51.8447ZM25.9224 75.8658C25.9224 100.583 40.5707 121.846 61.5924 131.272L68.0462 121.284C50.9342 113.946 38.8836 96.3787 38.8836 75.8658C38.8836 55.3528 51.0146 37.6517 68.2069 30.3677L61.7531 20.3791C40.651 29.7518 25.9224 51.0681 25.9224 75.8658Z"
                  fill="#05649C"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M254.858 75.8658C254.858 42.472 235.041 13.6039 206.28 0L199.8 10.0422C224.651 21.6109 241.897 46.7299 241.897 75.8926C241.897 105.055 224.731 130.067 199.961 141.663L206.441 151.705C235.095 138.047 254.858 109.233 254.858 75.8926V75.8658ZM203.013 75.8658C203.013 92.0137 193.346 105.725 179.93 110.625L173.69 100.985L173.556 100.744C182.982 98.2265 190.025 88.0504 190.025 75.8658C190.025 63.6812 182.902 53.3979 173.396 50.961L173.69 50.4522L179.742 41.0527C193.239 45.9265 202.987 59.6643 202.987 75.8658H203.013ZM228.936 75.8658C228.936 100.583 214.288 121.846 193.266 131.272L186.812 121.284C203.924 113.946 215.948 96.3787 215.948 75.8658C215.948 55.3528 203.817 37.6517 186.624 30.3677L193.078 20.3791C214.18 29.7518 228.909 51.0681 228.909 75.8658H228.936Z"
                  fill="#05649C"
                />
              </g>
            </svg>
          </div>

          <div className={`px-4 md:px-0 `}>
            <p className={`${styles.paragraph}  pr-10`}>{props.paragraph1} </p>
            {props.paragraph2 && <br />}
            <p className={`${styles.paragraph}  mb-7 pr-10`}>
              {props.paragraph2 && props.paragraph2}
            </p>

            <div className="  w-full flex ">
              <Link href={"/sign-up"}>
                <button className="bg-primary hover:bg-primary/40 text-white  w-[130px] cursor-pointer  font-medium text-base border-[1px] border-solid border-white px-4 py-2 rounded-md">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonLayers;
