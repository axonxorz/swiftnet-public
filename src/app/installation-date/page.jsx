"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter } from "next/navigation";
import Plans from "../components/installation-date/plans";
import InstallDatePicker from "../components/installation-date/date-picker";
import Addons, { addons } from "@components/installation-date/addons";
import { useAvailablePlansStore, useSessionStore, useUserLocationStore } from "@/store";
import "@/app/styles/custom.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { postData } from "@/tools";
import { DateTime } from "luxon";
import { minInstallationDate, nextBusinessDay } from "@/lib/installation-date";
import { toast } from "react-hot-toast";


const Page = () => {
  const router = useRouter();
  const sessionStore = useSessionStore();
  const availablePlansStore = useAvailablePlansStore();

  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(nextBusinessDay(minInstallationDate(DateTime.local())));
  const [selectedPlan, setSelectedPlan] = useState(((availablePlansStore?.plans || [])[(availablePlansStore?.plans || []).length-1]));
  const [selectedAddon, setSelectedAddon] = useState(addons[0]);

  useEffect(() => {
      if(availablePlansStore.plans.length === 0) {
        toast.error('Could not find any plans for you, please try again later.');
        router.replace('/')
      }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const signupUrl = '/api/prequalification/submit'
      const data = {
        session: sessionStore,
        installationDate: selectedDate.toISODate(),
        plan: selectedPlan,
        addon: selectedAddon
      }
      const signupResponse = await postData(signupUrl, data);
      if(signupResponse.result) {
        router.replace(`/thank-you`);
      } else {
        toast.error('Something went wrong on our end, please try again later.')
      }
    } finally {
      setLoading(false)
    }
  };

    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <div className="w-full min-h-screen flex flex-col items-center ">
          <div className="h-[100px] "></div>
            <div className="w-full px-4 md:w-[60%] py-4 space-y-4 relative">
              {/* title */}
              <div className="w-full text-start space-y-4">
                <p className={`${styles.heading} font-bold text-[36px]`}>
                  Fantastic News!
                </p>
                <p className={`${styles.paragraph} text-[#4B5563]`}>
                  Our service is available at your location! Please select your
                  preferred installation date and plan below.
                </p>
              </div>

              <InstallDatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <Plans
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <Addons
                selectedAddon={selectedAddon}
                setSelectedAddon={setSelectedAddon}
              />
              <div className="text-center py-4">
                <button
                  onClick={handleSubmit}
                  className={`py-3 ${
                    loading ? "bg-primary/70 " : "bg-primary "
                  } rounded-lg text-white w-full hover:bg-primary/90`}
                >
                  {!loading ? "Confirm Choices" : "Please Wait ..."}
                </button>
                <p className={styles.paragraph + "text-center mt-1"}>
                  You will not be charged until your service is installed and
                  verified.
                </p>
            </div>
          </div>
        </div>
      </LocalizationProvider>
      );
};

export default Page;
