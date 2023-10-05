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
import "@components/phone-input/style/style.css";
import PhoneInput from "@/app/components/phone-input";
import { toast } from "react-hot-toast";
import { useStore } from "@/store";
import { postData } from "@/tools";
import Cookies from "js-cookie";

const Form = () => {
    const searchParams = useSearchParams();
    const route = useRouter();
    const [Loading, setLoading] = useState(false);
    const ipAddress = useStore(state => state.ipAddress)
    const priority = useStore((state) => state.priority);
    const note = Cookies.get('note');



    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().required("Phone number is required"),
        notes: yup.string().max(500),
    });

    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

    

    useEffect(() => {
        if(note && note != ""){
            setValue('notes' , note)
        }
    },[note])

   

    // Example POST method implementation:

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
            const response = await fetch(`/api/geocode?latlng=${searchParams.get("lat")},${searchParams.get("lng")}&sensor=true`,
                {
                    method: "GET",
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

                city = addressInfo.city?.long_name || "NA";
                googleAPIFullAddress = addressInfo.fullAddress || "NA";
                postalCode = addressInfo.postalCode?.long_name || "NA";
                country = addressInfo.country?.long_name || "NA";
            }
            const fullAddress = searchParams.get("fullAddress") !== "undefined" ? searchParams.get("fullAddress") : googleAPIFullAddress


            const towerCoverageResponse = await fetch(`https://api.towercoverage.com/towercoverage.asmx/EUSPrequalAPI?multicoverageid=${process.env.NEXT_PUBLIC_MULTICOVERAGE_ID}&Account=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_USER}&Address=${fullAddress}&city=${city}&Country=${country}&State=""&zipcode=${postalCode}&Latitude=${searchParams.get("lat")}&Longitude=${searchParams.get("lng")}&RxMargin=&key=${process.env.NEXT_PUBLIC_TOWERCOVRAGE_API_KEY}`);
            const towerCoverageResult = await towerCoverageResponse.text();



            await fetch("https://api.towercoverage.com/towercoverage.asmx/EUSsubmisssion", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
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


            const postDataResponse = await postData("/api", { ...data, supported: !towerCoverageResult.includes("No"), city, googleAPIFullAddress, codepostal: postalCode, country, lng: searchParams.get("lng"), lat: searchParams.get("lat"), fullAddress, ipAddress, browserType , priority });
            const { message, status } = postDataResponse;

            if (status === 1) {
               
                route.push(`/email-check?user=${data.email}`);
            } else {
                toast.error(message)
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            
        }

        Cookies.remove('note');
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
                                        required
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
                                        required
                                    />
                                </div>




                            </div>
                            <div className="sm:col-span-3 w-full mt-3">

                                <div className="sm:col-span-4  ">
                                    <InputField
                                        error={errors?.email}
                                        label={"Email"}
                                        name={"email"}
                                        placeholder={"e.g email@example.com"}
                                        register={...register("email")}
                                        type={"email"}
                                        required
                                    />
                                </div>

                                <div className="mb-2">

                                </div>

                                <div className="sm:col-span-4 ">
                                    <label
                                        htmlFor={"phone"}
                                        className="block text-sm font-medium leading-6 text-[#6B7280]"
                                    >
                                        Phone number <span className="font-bold">*</span>
                                    </label>
                                    <div className="flex">
                                        <PhoneInput
                                            register={register}
                                            enableSearch={true}
                                            disableSearchIcon={true}
                                            country={"ca"}
                                            value={getValues("phoneNumber")}
                                            onChange={(phone) => setValue("phoneNumber", phone)}
                                            dropdownStyle={{ zIndex: 100 }}
                                            error={errors.phoneNumber}
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

                    <div className=" flex items-center justify-center mt-5 space-y-4 flex-col  px-4 ">
                        <button
                            type="submit"
                            disabled={Loading}
                            className={`text-sm font-semibold leading-6  w-[400px] ${Loading ? "bg-primary/70 " : "bg-primary "} rounded-lg text-white py-2 `}
                        >
                            {!Loading ? "Check Availability" : "please wait ..."}
                        </button>

                        <p className={`${styles.paragraph} text-center`}>
                        Charges apply only after installation and verification of your services. Your contact info will solely be used for providing internet services, with the ability to opt-out anytime .
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
