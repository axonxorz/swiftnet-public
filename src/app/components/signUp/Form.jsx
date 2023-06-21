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
import { useRouter, useSearchParams } from "next/navigation";
import PhoneInput from "@/components/phone-input";

const Form = () => {
    const searchParams = useSearchParams();
    const route = useRouter();
    
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

    const onSubmit = async (data) => {
        console.log({ ...data, postal_code: searchParams.get("codepostal"), region: searchParams.get("state"), city: searchParams.get("city"), lat: searchParams.get("lat"), lng: searchParams.get("lng"), fullAdress: searchParams.get("fullAdress"), supportedplace: searchParams.get("supportedplace"), supportedplace: searchParams.get("supportedplace") });

        // const response = await axios.
        postData("/api", data).then((res_data) => {
            const {status} = res_data
            console.log(res_data); // JSON data parsed by `data.json()` call

            if(status === 1){
                route.push(
                    `/email-check?user=${data.email}`
                  );
            }
        });
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



                                <div className="sm:col-span-4 ">
                                    {/* <label className="text-xs font-semibold px-1">Phone number</label> */}
                                    <div className="flex">

                                        <PhoneInput
                                            register={register}
                                            enableSearch={true}
                                            disableSearchIcon={true}
                                            country={"us"}
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
