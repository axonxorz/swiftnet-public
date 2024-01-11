import styles from "@/app/styles/styles";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { isDisabledDate, maxInstallationDate, minInstallationDate } from "@/lib/installation-date";
import { DateTime } from "luxon";

import { AdapterLuxonExtended} from "@/lib/mui";

const InstallDatePicker = ({selectedDate, setSelectedDate}) => {
    const [error, setError] = useState(null);
    const [minDate] = useState(minInstallationDate(DateTime.local()));
    const [maxDate] = useState(maxInstallationDate(DateTime.local()));

    return (
        <div className="w-full text-start">
            <label className={`${styles.paragraph} text-[#4B5563]`}>
                Preferred Install Date <span className="font-bold">*</span>
            </label>
            <div className="relative max-w-sm w-full">
                <div className=" w-full ">
                    <LocalizationProvider dateAdapter={AdapterLuxonExtended}>
                        <DatePicker
                            hintText="Weekends or holiday"
                            className="w-full"
                            value={selectedDate}
                            onChange={(newDate) => setSelectedDate(newDate)}
                            minDate={minDate}
                            maxDate={maxDate}
                            shouldDisableDate={isDisabledDate}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        </div>
    );
};

export default InstallDatePicker;
