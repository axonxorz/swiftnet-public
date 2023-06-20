"use client";
import React, { useEffect } from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputField from "./InputField";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Form = () => {
    const searchParams = useSearchParams();




    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().required("Phone number is required").matches(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
            ,
            'Invalid phone number format (US)'
        ),
        streetAddress: yup.string(),
        streetAddress2: yup.string(),
        city: yup.string().required("City is required"),
        region: yup.string().required("State is required"),
        postalCode: yup.string().required("ZIP Code is required"),
        notes: yup.string(),

    });

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data) => {
        console.log({ ...data, lat: searchParams.get("lat"), lng: searchParams.get("lng") });

    };

    useEffect(() => {
        if (searchParams.get("city")) setValue('city', searchParams.get("city"))
        if (searchParams.get("state")) setValue('region', searchParams.get("state"))
        if (searchParams.get("codepostal")) setValue('postalCode', searchParams.get("codepostal"))

    }, [searchParams])

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
                    <p className={`${styles.paragraph} `}>
                        Once your registration is submitted, a customer service specialist
                        will contact you htmlFor installation and payment details
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
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

                                <div className="sm:col-span-4">
                                    <InputField
                                        error={errors?.phoneNumber}
                                        label={"Phone Number"}
                                        name={"phone"}
                                        placeholder={"e.g (406) 555-0120"}
                                        register={...register("phoneNumber")}
                                        type={"phone"}
                                    />
                                </div>

                                <div className={`text-xl mt-2  font-bold sm:col-span-4`}>
                                    <p>Desired service location</p>
                                </div>

                                <div className="sm:col-span-4">
                                    <InputField
                                        error={errors?.streetAddress}
                                        label={"Address Line 1"}
                                        name={"street-address"}
                                        placeholder={"e.g Washington Ave"}
                                        register={...register("streetAddress")}
                                        type={"string"}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputField
                                        error={errors?.streetAddress}
                                        label={"Address Line 2"}
                                        name={"street-address2"}
                                        placeholder={"e.g Washington Ave"}
                                        register={...register("streetAddress2")}
                                        type={"string"}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputField
                                        error={errors?.city}
                                        label={"City"}
                                        name={"city"}
                                        placeholder={"e.g New York"}
                                        register={...register("city")}
                                        type={"string"}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputField
                                        error={errors?.region}
                                        label={"State"}
                                        name={"region"}
                                        placeholder={"State"}
                                        register={...register("region")}
                                        type={"string"}
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <InputField
                                        error={errors?.postalCode}
                                        label={"ZIP Code"}
                                        name={"postalCode"}
                                        placeholder={"e.g 3512"}
                                        register={...register("postalCode")}
                                        type={"string"}
                                    />
                                </div>


                            </div>
                            <div className="sm:col-span-3 w-full mt-3">

                                <label
                                    htmlFor={"Notes"}
                                    className="block text-sm font-medium leading-6 text-[#6B7280]"
                                >
                                    Notes
                                </label>

                                <textarea name="notes" className={`${errors?.notes?.message && "bg-red-400/20 text-white border-red-500 "
                                    }block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} cols="30" rows="5" {...register} ></textarea>
                                {errors?.notes?.message && <p className="text-red-500 text-xs  ">{errors?.notes?.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-center justify-center mt-5 space-y-4 flex-col ">
                        <button
                            type="submit"
                            className="text-sm font-semibold leading-6  w-[400px] bg-primary rounded-lg text-white py-2 "
                        >
                            Check Availability
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
