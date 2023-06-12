import { Toaster } from "react-hot-toast";
import Landing from "./landing/page";
import Script from "next/script";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Script
        async
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACES_API}&libraries=places`}
      />
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0"
        nonce="VhNMcz7M"
      ></script>

      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <Toaster />

      <Landing />
    </>
  );
}
