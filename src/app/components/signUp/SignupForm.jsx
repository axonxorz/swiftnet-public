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
import { useAvailablePlansStore, useContactStore, useSessionStore, useUserLocationStore } from "@/store";
import { postData } from "@/tools";
import { reverseGeocode } from "@/lib/gis";

const SignupForm = () => {
    const locationStore = useUserLocationStore()
    const sessionStore = useSessionStore();
    const availablePlansStore = useAvailablePlansStore();
    const contactStore = useContactStore();
    const route = useRouter();
    const [Loading, setLoading] = useState(false);

    const doReverseGeocode = async () => {
        return await reverseGeocode(locationStore.rawCoordinates?.lat, locationStore.rawCoordinates?.lng)
    }

    // TODO: support fully missing coordinates, require 'comments' field


    const goHome = () => {
        route.replace('/')
    }

    useEffect(() => {
        if(!locationStore.rawCoordinates?.lat) {
            // TODO: would be nice to redirect to step 1, but need to unwind pages and components as no
            // TODO: re-render happens when only the querystring changes (due to checking in a useEffect)
            goHome();
        }
    }, [locationStore]);

    useEffect(() => {
        if(!!locationStore.rawCoordinates?.lat && (!locationStore.address && !locationStore.reverseGeocodedAddress)) {
            setLoading(true);
            doReverseGeocode().then((geocoded_address) => {
                locationStore.setReverseGeocodedAddress(geocoded_address)
            }, (error) => {
                goHome();
            }).finally(() => {
                setLoading(false);
            })
        }
    }, []);

    // TODO: comments required if address not specified
    // TODO: captcha
    const validationSchema = yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: yup.string().required("Phone number is required"),
        comments: yup.string().max(500),
    });

    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formData) => {
        setLoading(true);
        try {
            const checkData = {
                session: sessionStore,
                location: locationStore.getResolvedAddress(),
                contact: formData,
            }
            contactStore.setFirstName(formData.firstName);
            contactStore.setLastName(formData.lastName);
            contactStore.setEmail(formData.email);
            contactStore.setPhoneNumber(formData.phoneNumber);
            contactStore.setComments(formData.comments);

            const signupUrl = '/api/prequalification/check'
            const signupResponse = await postData(signupUrl, checkData);
            if(signupResponse.serviceable) {
                availablePlansStore.setPlans(signupResponse.plans);
                route.push(`/installation-date`);
            } else {
                const submittalData = {
                    serviceable: false,
                    session: sessionStore,
                    contact: contactStore,
                    location: locationStore.getResolvedAddress()
                  }
                const signupUrl = '/api/prequalification/submit'
                await postData(signupUrl, submittalData);
                route.push('/not-serviceable');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again later.');
            console.log(error);
        } finally {
            setLoading(false);
        }
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
                                        htmlFor={"Comments"}
                                        className="block text-sm font-medium leading-6 text-[#6B7280]"
                                    >
                                        Comments
                                    </label>

                                    <textarea  {...register('comments')} name="comments" className={`${errors?.comments?.message && "bg-red-400/20 text-white border-red-500 "
                                        }block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`} cols="30" rows="5" {...register} ></textarea>
                                    {errors?.comments?.message && <p className="text-red-500 text-xs  ">{errors?.comments?.message}</p>}
                                </div>

                                {!!locationStore.address &&
                                    <div className="mt-3">
                                        <StaticInputField
                                            label={"Address"}
                                            value={locationStore.address.fullAddress}
                                            disabled
                                        />
                                    </div>
                                }

                                {(!locationStore.address && !locationStore.reverseGeocodedAddress) &&
                                    <div className="mt-3">
                                        <StaticInputField
                                            label={"Approximate Address"}
                                            value={'Working...'}
                                            disabled
                                        />
                                    </div>
                                }

                                {(!locationStore.address && !!locationStore.reverseGeocodedAddress) &&
                                    <div className="mt-3">
                                        <StaticInputField
                                            label={"Approximate Address"}
                                            value={locationStore.reverseGeocodedAddress.fullAddress}
                                            disabled
                                        />
                                    </div>
                                }

                                <div className="mt-3 grid grid-cols-1 gap-2 gap-y-2  sm:grid-cols-6">
                                    <div className="sm:col-span-3 ">
                                        <StaticInputField
                                            label={"GPS Coordinates"}
                                            value={(locationStore.rawCoordinates?.lat || 0.00).toFixed(5)}
                                        />
                                    </div>
                                    <div className="sm:col-span-3 ">
                                        <StaticInputField
                                            value={(locationStore.rawCoordinates?.lng || 0.00).toFixed(5)}
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
                            {!Loading ? "Check Availability" : "Please Wait ..."}
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

export default SignupForm;
