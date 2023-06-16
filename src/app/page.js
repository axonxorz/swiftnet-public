import { Toaster } from "react-hot-toast";
import Landing from "./landing/page";
import Script from "next/script";

export const metadata = {
  title: "Swift Net",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today! Experience the difference with Swift-Net.ca's reliable internet service, designed specifically for rural communities in Alberta and Saskatchewan. Sign up today and enjoy fast and dependable home wi-fi for you and your family!",
};

export default function Home() {
  return (
    <>
      <Script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API}&libraries=places`}
      />
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
