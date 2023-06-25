"use client";
import React, { useEffect, useState } from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "@/components/phone-input";
import { toast } from "react-hot-toast";
import { useStore } from "@/store";
const Form = () => {
    const searchParams = useSearchParams();
    const route = useRouter();
    const [Loading, setLoading] = useState(false);
    const ipAddress = useStore(state => state.ipAddress)


    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().required("Phone number is required"),
        notes: yup.string(),
    });

    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });


    // Example POST method implementation:
    async function postData(url = "", data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }

    const AddressInfo = (address) => {
        // Filter the address components
        const filteredComponents = address.address_components.filter(component => {
            return (
                component.types.includes('country') ||
                component.types.includes('locality') ||
                component.types.includes('postal_code')
            );
        });

        // Extract the desired properties
        const country = filteredComponents.find(component => component.types.includes('country'));
        const city = filteredComponents.find(component => component.types.includes('locality'));
        const postalCode = filteredComponents.find(component => component.types.includes('postal_code'));
        const fullAddress = address.formatted_address;

        // Render the results
        return { city, country, postalCode, fullAddress };
    }



    const onSubmit = async (data) => {
        setLoading(true);
        const browserType = navigator.userAgent;

        try {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${searchParams.get("lat")},${searchParams.get("lng")}&sensor=true&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}`, 
          {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
          }
          );
          const geocodeData = await response.json();
      
          let city = "";
          let googleAPIFullAddress = "";
          let postalCode = "";
          let country = "";
      
          if (geocodeData?.results?.length > 0) {
            const result = geocodeData.results[0];
            const addressInfo = AddressInfo(result);
      
            city = addressInfo.city?.long_name || "";
            googleAPIFullAddress = addressInfo.fullAddress || "";
            postalCode = addressInfo.postalCode?.long_name || "";
            country = addressInfo.country?.long_name || "";
          }
          const fullAddress  = searchParams.get("fullAdress") !== "undifined" ? searchParams.get("fullAdress") : googleAPIFullAddress
      

          const towerCoverageResponse = await fetch(`https://api.towercoverage.com/towercoverage.asmx/EUSPrequalAPI?multicoverageid=${process.env.NEXT_PUBLIC_MULTICOVERAGE_ID}&Account=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_USER}&Address=${fullAddress}&city=${city}&Country=${country}&State=""&zipcode=${postalCode}&Latitude=${searchParams.get("lat")}&Longitude=${searchParams.get("lng")}&RxMargin=&key=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_API_KEY}`);
          const towerCoverageResult = await towerCoverageResponse.text();
          


          await fetch("https://api.towercoverage.com/towercoverage.asmx/EUSsubmisssion", {
            "headers": {
              "accept": "*/*",
              "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
              "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
              "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `multicoverageid=${process.env.NEXT_PUBLIC_MULTICOVERAGE_ID}&Account=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_USER}&Firstname=${data.firstName}&city=${city}&lastname=${data.lastName}&Address=${fullAddress}&Country=${country}&State=NA&zipcode=${postalCode}&phonenumber=${data.phoneNumber}&emailaddress=${data.email}&howdidyouhear=NA&preferredmethod=NA&besttimetocontact=NA&comments=${data.notes}&clientip=${ipAddress}&Latitude=${searchParams.get("lat")}&Longitude=${searchParams.get("lng")}&key=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_API_KEY}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "omit"
          });

      
          const postDataResponse = await postData("/api", {...data, supported: !towerCoverageResult.includes("No"), city, googleAPIFullAddress, codepostal: postalCode, country, lng: searchParams.get("lng"), lat: searchParams.get("lat") , fullAddress , ipAddress , browserType });
          const {message ,  status } = postDataResponse;
      
          if (status === 1) {
            route.push(`/email-check?user=${data.email}`);
          }else {
            toast.error(message)
          }
        } catch (error) {
          toast.error('Something went wrong. Please try again.');
        }
      
        setLoading(false);
      };
      


    return (
        <div className="w-full md:w-[900px] min-h-screen flex items-center justify-center mb-10 p-4 ">
            <div className="w-full md:w-[70%] min-h-screen  py-2 flex flex-col ">
                <div className="py-2">
                    <Link href={"/"}>
                        <Image
                            src={logo1}
                            alt=""
                            style={{
                                width: "256.43px",
                                height: "48px"
                            }}
                            unoptimized={true}
                        /></Link>
                </div>

                <div className="w-full  mt-4">
                    <p className={`${styles.heading}`}>Let’s get started</p>

                </div>


                <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <div className="space-y-1">
                        <div className="border-b border-gray-900/10 ">
                            <div className="mt-2 grid grid-cols-1 gap-2 gap-y-2  sm:grid-cols-6">
                                <div className="sm:col-span-3 ">
                                    <InputField
                                        error={errors?.firstName}
                                        label={"First Name"}
                                        name={"first-name"}
                                        placeholder={"e.g john"}
                                        register={...register("firstName")}
                                        type={"text"}
                                    />
                                </div>
                                <div className="sm:col-span-3 ">
                                    <InputField
                                        error={errors?.lastName}
                                        label={"Last Name"}
                                        name={"last-name"}
                                        placeholder={"e.g doe"}
                                        register={...register("lastName")}
                                        type={"text"}
                                    />
                                </div>

                                <div className="sm:col-span-4  ">
                                    <InputField
                                        error={errors?.email}
                                        label={"Email"}
                                        name={"email"}
                                        placeholder={"e.g email@example.com"}
                                        register={...register("email")}
                                        type={"email"}
                                    />
                                </div>



                                <div className="sm:col-span-4 ">
                                    {/* <label className="text-xs font-semibold px-1">Phone number</label> */}
                                    <div className="flex">

                                        <PhoneInput
                                            register={register}
                                            enableSearch={true}
                                            disableSearchIcon={true}
                                            country={"uk"}
                                            value={getValues("phoneNumber")}
                                            onChange={(phone) => setValue("phoneNumber", phone)}
                                            dropdownStyle={{ zIndex: 100 }}
                                        />
                                        <input
                                            type="phone"
                                            placeholder="Phone number"
                                            className={"hidden"}
                                            {...register("phoneNumber")}
                                        />
                                    </div>
                                    {errors.phoneNumber && (
                                        <p className="text-sm text-red-600 ">
                                            Please enter the phone number
                                        </p>
                                    )}
                                </div>


                            </div>
                            <div className="sm:col-span-3 w-full mt-3">

                                <label
                                    htmlFor={"Notes"}
                                    className="block text-sm font-medium leading-6 text-[#6B7280]"
                                >
                                    Notes
                                </label>

                                <textarea  {...register('notes')} name="notes" className={`${errors?.notes?.message && "bg-red-400/20 text-white border-red-500 "
                                    }block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} cols="30" rows="5" {...register} ></textarea>
                                {errors?.notes?.message && <p className="text-red-500 text-xs  ">{errors?.notes?.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-center justify-center mt-5 space-y-4 flex-col ">
                        <button
                            type="submit"
                            disabled={Loading}
                            className={`text-sm font-semibold leading-6  w-[400px] ${Loading ? "bg-primary/70 " : "bg-primary "}rounded-lg text-white py-2 `}
                        >
                            {!Loading ? "Check Availability" : "please wait ..."}
                        </button>

                        <p className={`${styles.paragraph}`}>
                            You will not be charged until your service is installed and
                            verified.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
