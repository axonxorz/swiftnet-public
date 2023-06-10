import { Toaster } from "react-hot-toast";
import Landing from "./landing/page";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API}&libraries=places`}
      />
      <Toaster />

      <Landing />
    </>
  );
}
