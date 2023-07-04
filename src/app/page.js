import { Toaster } from "react-hot-toast";
import Landing from "./landing/page";
import Script from "next/script";

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
