import React from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";

const Form = () => {
  return (
    <div className="w-full md:w-[900px] min-h-screen flex items-center justify-center">
      <div className="w-full md:w-[70%] min-h-screen  py-2 flex flex-col gap-5">
        <div className="py-2">
          <Image
            src={logo1}
            alt=""
            className="w-[250px] md:w-[300px]"
            unoptimized={true}
          />
        </div>

        <div className="w-full space-y-3 mt-2">
          <p className={`${styles.heading}`}>Let’s get started</p>
          <p className={`${styles.paragraph} `}>
            Once your registration is submitted, a customer service specialist
            will contact you for installation and payment details
          </p>
        </div>

        <form>
          <div className="space-y-3">
            <div className="border-b border-gray-900/10 ">
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    for="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      autocomplete="given-name"
                      placeholder="e.g john"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    for="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      placeholder="e.g doe"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    for="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g email@example.com"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   "
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    for="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phone"
                      name="phone-number"
                      type="phone"
                      placeholder="e.g (406) 555-0120"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6   "
                    />
                  </div>
                </div>

                <div className={`text-xl mt-4 font-bold sm:col-span-4`}>
                  <p>Desired service location</p>
                </div>

                <div className="col-span-full">
                  <label
                    for="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address Line 1
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      placeholder="e.g Washington Ave"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    for="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address Line 2
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      placeholder="e.g Washington Ave"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    for="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g New York"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="region"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      placeholder="Select State"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="postal-code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    ZIP Code
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      placeholder="e.g 3512"
                      className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
