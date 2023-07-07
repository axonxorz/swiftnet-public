import styles from "@/app/styles/styles";
import React, { useState } from "react";

const DatePicker = ({ selectedDate, setSelectedDate }) => {
  const [error, setError] = useState(null);

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

  // Function to set the default value to the next business day
  const setDefaultDate = () => {
    const currentDate = new Date();

    const getNextBusinessDay = (date) => {
      date.setDate(date.getDate() + 1); // Add 1 day initially

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
  const handleDateChange = (event) => {
    const { value } = event.target;

    // Validate the selected date
    const selected = new Date(value);
    const today = new Date();

    if (selected >= today) {
      if (isWeekend(selected)) {
        setError("We don't work on weekends.");
        setTimeout(() => {
          setError(null);
        }, 5000);
      } else if (isHoliday(selected)) {
        setError("You have selected a Canadian holiday.");
        setTimeout(() => {
          setError(null);
        }, 5000);
      } else {
        setSelectedDate(value);
      }
    } else {
      setError("Please select a future date.");
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  return (
    <div className="w-full text-start">
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Install Date <span className="font-bold">*</span>
      </label>
      <div className="relative max-w-sm w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </div>
        <input
          datepicker
          type="date"
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 "
          placeholder="Select date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};

export default DatePicker;
