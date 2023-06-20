"use client";

import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import AutoComplete from "@/app/components/home/AutoCompleteInput";
import Marker from "./Marker";

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [maps, setMaps] = useState(null);
  const [clickedPlaceData, setClickedPlaceData] = useState(null);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  // useEffect(() => {}, []);

  const handleApiLoaded = async (map, maps) => {
    setMaps(maps);
    let marker = new maps.Marker({
      position: userLocation,
      map,
      title: "User Location",
    });
    marker.setMap(map);
  };

  const handleMapClick = async ({ lat, lng }) => {
    setUserLocation({
      lat,
      lng,
    });
    try {
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.address) {
        const { city, country, postcode, region } = data.address;
        setClickedPlaceData({
          city,
          country,
          state: region,
          postcode,
          lat,
          lng,
        });
      } else {
      }
    } catch (error) {
      console.log("Error retrieving address information:", error);
    }
  };

  const handleCurrentLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(pos);
        },
        () => {
          toast.error("Geo Location not supported");
        }
      );
    }
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div className="absolute w-full top-10 left-0 z-50 flex items-center justify-center">
        <div className="md:w-1/2">
          <AutoComplete setUserLocation={setUserLocation} />
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDy4vJLsIMYYK8_CyTGciCUtsA2_87DXWg" }}
        center={userLocation || defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleMapClick}
      >
        {userLocation && clickedPlaceData && (
          <Marker clickedPlaceData={clickedPlaceData} />
        )}
      </GoogleMapReact>
      <div className="absolute w-full bottom-5  flex items-end justify-end right-12 z-50  px-5">
        <button
          onClick={handleCurrentLocationButtonClick}
          className="bg-white px-5 py-1 rounded-md shadow-md border-primary border-1 hover:text-white  hover:bg-primary border-2"
        >
          use my current location
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
