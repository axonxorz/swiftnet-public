"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter } from "next/navigation";
import Plans from "../components/installation-date/plans";
import InstallDatePicker from "../components/installation-date/date-picker";
import Addons, { addons } from "@components/installation-date/addons";
import { useAvailablePlansStore, useContactStore, useSessionStore, useUserLocationStore } from "@/store";
import "@/app/styles/custom.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";
import { minInstallationDate, nextBusinessDay } from "@/lib/installation-date";
import { toast } from "react-hot-toast";
import { Alert } from "@mui/material";
import { backendClient } from "@/lib/backend";


const Page = () => {
  const router = useRouter();
  const sessionStore = useSessionStore();
  const contactStore = useContactStore();
  const locationStore = useUserLocationStore();
  const availablePlansStore = useAvailablePlansStore();

  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(nextBusinessDay(minInstallationDate(DateTime.local())));
  const [selectedPlan, setSelectedPlan] = useState(((availablePlansStore?.plans || [])[(availablePlansStore?.plans || []).length-1]));
  const [recommendedPlan] = useState(selectedPlan);
  const [selectedAddon, setSelectedAddon] = useState(addons[0]);

  useEffect(() => {
      if(!contactStore.firstName) {
        // Assume someone landed here directly, need to go through contact process
        router.replace('/sign-up?step=2')
      }
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const signupUrl = '/api/prequalification/submit'
      const data = {
        serviceable: true,
        session: sessionStore,
        contact: contactStore,
        location: locationStore.getResolvedAddress(),
        installationDate: selectedDate.toISODate(),
        plan: selectedPlan,
        addon: selectedAddon
      }
      const signupResponse = await backendClient.post(signupUrl, data);
      if(signupResponse.data.result) {
        router.replace(`/thank-you`);
      } else {
        toast.error('Something went wrong on our end, please try again later.')
      }
    } catch(e) {
      console.log('Error during submission', e);
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

              {!availablePlansStore.plans.length &&
                  <Alert severity="warning" className="text-[120%]">
                    We ran into a problem getting your personalized plans. One of our team
                    members will contact you to assist in selecting one that fits your needs!
                  </Alert>
              }

              <Plans
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                recommendedPlan={recommendedPlan}
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
