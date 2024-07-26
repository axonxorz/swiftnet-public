import React from "react";

import "@/app/styles/custom.css";
import styles from "@/app/styles/styles";
import Link from "next/link";

export const metadata = {
  title:
    "Swift-Net.ca: Fort Kent Tower"
};

const page = () => {
  return (
    <>
      <div className="pt-20 pb-20">
        <div className="flex flex-col lg:flex-row items-start justify-center px-4">
          <div className="w-1/2 md:w-1/2 flex flex-col justify-center items-start gap-4 px-3 bg-primary text-white rounded">
            <p className="font-bold text-[38px] md:text-[48px]">
              Fort Kent Tower
            </p>
            <p>
              Hi Swift-Net.ca customers,<br/>
              <br/>
              We have received notification from Peter Charles, the landowner where our tower is located. As per our
              contract, Peter has the right to ask us to remove the tower. We have been given notice to remove the
              tower by midnight on November 30th, 2024. We are currently in the process of qualifying a new tower site
              to serve you.<br/>
              <br/>
              Please reach out if you have any questions or have a suggestion for a new tower site.
            </p>
            <p className="pb-4">
              Sincerely,<br/>
              Swift-Net.ca Management<br/>
              <Link href="/contact-us" className="underline">+1 (866) 667-2375</Link><br/>
              <Link href="mailto:support@swift-net.ca" className="underline">support@swift-net.ca</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
