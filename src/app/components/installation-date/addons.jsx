import styles from "@/app/styles/styles";
import React from "react";

export const addons = [
  {
    id: 1,
    title: "Managed Wi-Fi 6 app with Calix Gigspire Blast u4 router",
    price: 9.95,
  },
  {
    id: 2,
    title: "Managed Wi-Fi 6 app with Calix Gigspire Blast u6 router",
    price: 17.99,
  },
];

const Addons = ({ setSelectedAddon, selectedAddon }) => {
  return (
    <div className="mt-8">
      <p className={`${styles.paragraph} text-[#4B5563] mb-1`}>Add Ons</p>
      <div className="w-full  space-y-4 ">
        {addons.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() =>
                item.id === selectedAddon.id
                  ? setSelectedAddon({})
                  : setSelectedAddon(item)
              }
              className={`${
                selectedAddon.id === item.id
                  ? "border-primary border-[1px] bg-[#F1FAFF] "
                  : "border-gray-400/70 border-[1px] "
              }w-full cursor-pointer hover:border-primary rounded-lg flex items-center justify-between border-[1px]`}
            >
              <div className="flex py-4 gap-3 items-start px-4 justify-start w-3/4">
                {selectedAddon.id !== item.id ? (
                  <div className=" h-[20px] w-[20px] border-[1px] border-black rounded-full top-5 right-5"></div>
                ) : (
                  <div className=" h-[20px] w-[20px]  rounded-full top-5 right-5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.2071 9.70711C17.5976 9.31658 17.5976 8.68342 17.2071 8.29289C16.8166 7.90237 16.1834 7.90237 15.7929 8.29289L10.5 13.5858L8.20711 11.2929C7.81658 10.9024 7.18342 10.9024 6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071L9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L17.2071 9.70711Z"
                        fill="#05649C"
                      />
                    </svg>
                  </div>
                )}{" "}
                <p className="font-bold">{item.title}</p>
              </div>

              <p className="font-bold text-lg px-3">
                + ${item.price}{" "}
                <span className="text-sm text-[#4B5563] font-normal">
                  / month
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Addons;
