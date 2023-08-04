import styles from "@/app/styles/styles";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const DatePickerCmp = ({ selectedDate, setSelectedDate }) => {
  const searchParams = useSearchParams();
  const [error, setError] = useState(null);
  const [minDate] = useState(selectedDate);

  const checkIsWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
  };

  const checkIsHoliday = (date) => {
    // Replace with your own logic to determine Canadian holidays
    // Example: Checking for Canada Day on July 1st and Boxing Day on December 26th
    const isCanadaDay = date.get("month") === 6 && date.day() === 1;
    const isBoxingDay = date.get("month") === 11 && date.day() === 26;

    return isCanadaDay || isBoxingDay;
  };

  const disabledDateForDatePicker = (date) => {
    return checkIsHoliday(date) || checkIsWeekend(date);
  };

  // Function to set the default value to the next business day
  const setDefaultDate = () => {
    const currentDate = new Date();

    const getNextBusinessDay = (date) => {
      // check priority
      if (searchParams.get("priority") === "1") {
        date.setDate(date.getDate() + 1); // Add 1 day initially
      } else {
        date.setDate(date.getDate() + 2); // Add 2 day initially
      }

      const isWeekend = (date) => {
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
      };

      const isHoliday = (date) => {
        // Replace with your own logic to determine Canadian holidays
        // Example: Checking for Canada Day on July 1st and Boxing Day on December 26th
        const isCanadaDay = date.getMonth() === 6 && date.getDate() === 1;
        const isBoxingDay = date.getMonth() === 11 && date.getDate() === 26;

        return isCanadaDay || isBoxingDay;
      };

      while (isWeekend(date) || isHoliday(date)) {
        date.setDate(date.getDate() + 1); // Add 1 day until a non-weekend and non-holiday day is found
      }

      return date;
    };

    const nextBusinessDay = getNextBusinessDay(currentDate);

    const year = nextBusinessDay.getFullYear();
    const month = String(nextBusinessDay.getMonth() + 1).padStart(2, "0");
    const day = String(nextBusinessDay.getDate()).padStart(2, "0");

    const defaultDate = `${year}-${month}-${day}`;
    setSelectedDate(defaultDate);
  };

  // Call the setDefaultDate function to set the default value when the component mounts
  useState(setDefaultDate);

  // Function to handle changes in the date input
  const handleDateChange = (value) => {
    setError(null);

    // Validate the selected date
    const selected = new Date(value);
    const today = new Date();

    if (!searchParams.get("priority")) {
      const after2 = today.getDate() + 2;
      if (
        selected.getDate() < after2 &&
        selected.getMonth() <= today.getMonth() &&
        selected.getFullYear() <= today.getFullYear() &&
        selected > today
      ) {
        setError(
          "Sorry, your request may take up to 2 business days to process."
        );
        setTimeout(() => {
          setError(null);
        }, 5000);
        return;
      }
    }
    setSelectedDate(selected);
  };

  return (
    <div className="w-full text-start">
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Install Date <span className="font-bold">*</span>
      </label>
      <div className="relative max-w-sm w-full">
        <div className=" w-full ">
          <DatePicker
            hintText="Weekends or holiday"
            className="w-full"
            value={dayjs(selectedDate)}
            onChange={handleDateChange}
            minDate={dayjs(minDate)}
            shouldDisableDate={disabledDateForDatePicker}
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default DatePickerCmp;
