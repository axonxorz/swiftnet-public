"use client";
import React, { useEffect, useState } from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import StaticInputField from "./StaticInputField";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@components/phone-input/style/style.css";
import PhoneInput from "@/app/components/phone-input";
import { toast } from "react-hot-toast";
import { useSessionStore, useUserLocationStore } from "@/store";
import { postData } from "@/tools";
import { reverseGeocode } from "@/lib/gis";

const Form = () => {
    const locationStore = useUserLocationStore()
    const sessionStore = useSessionStore();
    const route = useRouter();
    const [Loading, setLoading] = useState(false);
    const ipAddress = useSessionStore(state => state.ipAddress)
    const priority = useSessionStore((state) => state.priority);

    const doReverseGeocode = async () => {
        return await reverseGeocode(locationStore.lat, locationStore.lng)
    }

    useEffect(() => {
        if(!locationStore.mapValidated) {
            // TODO: would be nice to redirect to step 1, but need to unwind pages and components as no
            // TODO: re-render happens when only the querystring changes (due to checking in a useEffect)
            route.replace('/')
        }
    }, [locationStore]);

    // TODO: THIS IS BROKEN IF THE PLACES API IS PROPERLY USED. THE ADDRESS IN locationStore SHOULD BE AddressInfo

    useEffect(() => {
        if(!locationStore.address) {
            doReverseGeocode().then((geocoded_address) => {
                locationStore.setGeocodedAddress(geocoded_address)
            }, (error) => {
                // Do nothing
            })
        }
    }, []);

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

    const onSubmit = async (data) => {
        setLoading(true);
        const browserType = navigator.userAgent;

        try {
            const {fullAddress, postalCode, city, country} = locationStore.geocodedAddress;
            console.log(fullAddress, postalCode, city, country)

            // TODO: implement Terek API lead funnel

            route.push(`/email-check?user=${data.email}`);
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
            console.log(error);
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
                                        register={...register("lastName")}
                                        type={"text"}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3 w-full mt-2">
                                <div className="sm:col-span-4  ">
                                    <InputField
                                        error={errors?.email}
                                        label={"Email"}
                                        name={"email"}
                                        register={...register("email")}
                                        type={"email"}
                                        required
                                    />
                                </div>

                                <div className="sm:col-span-4 mt-3">
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
                                            error={errors.phoneNumber?.message}
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
                                            Please enter a phone number
                                        </p>
                                    )}
                                </div>

                                <div className="mt-3">
                                    <label
                                        htmlFor={"Notes"}
                                        className="block text-sm font-medium leading-6 text-[#6B7280]"
                                    >
                                        Comments
                                    </label>

                                    <textarea  {...register('notes')} name="notes" className={`${errors?.notes?.message && "bg-red-400/20 text-white border-red-500 "
                                        }block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} cols="30" rows="5" {...register} ></textarea>
                                    {errors?.notes?.message && <p className="text-red-500 text-xs  ">{errors?.notes?.message}</p>}
                                </div>

                                {!!locationStore.address &&
                                    <div className="mt-3">
                                        <StaticInputField
                                            label={"Address"}
                                            value={locationStore.address}
                                            disabled
                                        />
                                    </div>
                                }

                                {!!locationStore.geocodedAddress &&
                                    <div className="mt-3">
                                        <StaticInputField
                                            label={"Approximate Address"}
                                            value={locationStore.geocodedAddress.fullAddress}
                                            disabled
                                        />
                                    </div>
                                }

                                <div className="mt-3 grid grid-cols-1 gap-2 gap-y-2  sm:grid-cols-6">
                                    <div className="sm:col-span-3 ">
                                        <StaticInputField
                                            label={"GPS Coordinates"}
                                            value={(locationStore.lat || 0.00).toFixed(5)}
                                        />
                                    </div>
                                    <div className="sm:col-span-3 ">
                                        <StaticInputField
                                            value={(locationStore.lng || 0.00).toFixed(5)}
                                        />
                                    </div>
                                </div>

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
