import React, { useEffect } from "react";

const InputField = ({
  label,
  value,
  error,
}) => {
  return (
    <div className=" ">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-[#6B7280]"
      >
        {label}&nbsp;
      </label>
      <div className="mt-1">
        <input
          value={value}
          readOnly
          className={`${
            error?.message && "bg-red-400/20 text-black border-red-500 "
          } block w-full rounded-md border-0 py-2 px-4 text-gray-700 bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `}
        />
      </div>
      {error && <p className="text-red-500 text-xs  ">{error.message}</p>}
    </div>
  );
};

export default InputField;
