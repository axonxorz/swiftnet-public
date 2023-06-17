import React from "react";
import styles from "../styles/styles";

const Sec2 = () => {
  return (
    <div
      className={`${styles.width} flex items-center justify-center py-5 md:py-10`}
    >
      <div className="text-center  md:py-6 w-[95%]  md:w-[70%] space-y-5">
        <p className={`${styles.heading}`}>
          A Better Internet Experience is Here{" "}
          <span className="text-primary">Reliable fast internet</span>
        </p>
        <p className={`${styles.paragraph} text-[#1F2937]`}>
          We'll keep you connected wherever you are in your home. Your service
          is optimized, secure, and fully supported with loads of features like
          ConnectIQ to protect you, your family, and your devices.
        </p>
      </div>
    </div>
  );
};

export default Sec2;
