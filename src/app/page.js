import { Toaster } from "react-hot-toast";
import Landing from "./landing/page";
import Script from "next/script";

export const metadata = {
  title: "[EASY SIGN-UP] AB/SK Local Wi-Fi Internet Provider by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

export default function Home() {
  return (
    <>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0"
        nonce="VhNMcz7M"
      />

      <Toaster />

      <Landing />
    </>
  );
}
