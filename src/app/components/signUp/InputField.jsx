import React from "react";

const InputField = ({ label, name, placeholder, type, register, error }) => {
  return (
    <div className=" ">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-[#6B7280]"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`${
            error?.message && "bg-red-400/20 text-black border-red-500 "
          }block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          {...register}
        />
      </div>
      {error && <p className="text-red-500 text-xs  ">{error.message}</p>}
    </div>
  );
};

export default InputField;
