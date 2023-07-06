import styles from "@/app/styles/styles";
import React, { useState } from "react";

const DatePicker = ({ setSelectedDate, selectedDate }) => {
  // Function to set the default value to the next week from the current date
  const setDefaultDate = () => {
    const currentDate = new Date();
    const nextWeek = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); // Adding 7 days

    const year = nextWeek.getFullYear();
    const month = String(nextWeek.getMonth() + 1).padStart(2, "0");
    const day = String(nextWeek.getDate()).padStart(2, "0");

    const defaultDate = `${year}-${month}-${day}`;
    setSelectedDate(defaultDate);
  };

  // Call the setDefaultDate function to set the default value when the component mounts
  useState(setDefaultDate);

  // Function to handle changes in the date input
  const handleDateChange = (event) => {
    const { value } = event.target;
    setSelectedDate(value);
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
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Select date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
      </div>
    </div>
  );
};

export default DatePicker;
