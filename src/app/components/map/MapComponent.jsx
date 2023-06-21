"use client";
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import AutoCompleteInput2 from "../home/AutoComplete2";
import Marker from "./Marker";
import { useSearchParams } from "next/navigation";

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState({
    lat: 53.31225509999999,
    lng: -110.072853,
  });
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (
      searchParams.get("lat") &&
      searchParams.get("lng") &&
      searchParams.get("fullAdress")
    ) {
      setUserLocation({
        lat: parseFloat(searchParams.get("lat")),
        lng: parseFloat(searchParams.get("lng")),
        fullAdress: searchParams.get("fullAdress"),
      });
    }
  }, [
    searchParams.get("lat"),
    searchParams.get("lng"),
    searchParams.get("fullAdress"),
  ]);

  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    // map.setMap(null);
  }

  const defaultProps = {
    center: {
      lat: 53.31225509999999,
      lng: -110.072853,
    },
    zoom: 7,
  };

  useEffect(() => {
    const googleMarkers = markers;

    if (map) {
      let marker = new maps.Marker({
        position: { lat: userLocation.lat, lng: userLocation.lng },
        map,
        title: "User Location",
      });
      marker.setMap(map);
      googleMarkers.push(marker);

      setMarkers(googleMarkers);
    }
  }, [userLocation, map, maps]);

  useEffect(() => {
    const googleMarkers = markers;
    if (map) {
      let marker = new maps.Marker({
        position: {
          lat: defaultProps.center.lat,
          lng: defaultProps.center.lng,
        },
        map,
        title: "User Location",
      });
      marker.setMap(map);
      googleMarkers.push(marker);

      setMarkers(googleMarkers);
    }
  }, [map]);

  const handleApiLoaded = async (map, maps) => {
    setMaps(maps);
    setMap(map);
    const googleMarkers = [];

    let marker = new maps.Marker({
      position: userLocation,
      map,
      title: "User Location",
    });
    marker.setMap(map);
    googleMarkers.push(marker);
    setMarkers(googleMarkers);
  };

  const handleMapClick = async ({ lat, lng }) => {
    clearMarkers();
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
        !userLocation.city &&
          setUserLocation({
            ...userLocation,
            city,
            country,
            state: region,
            postal_code: postcode,
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
      <div className="absolute hidden w-full top-16 left-0 z-50 md:flex items-start justify-start"></div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyD4Xhf2UTNPOcMy4e1skCikmLhtIAtawS4" }}
        center={{
          lat: userLocation?.lat || defaultProps.center.lat,
          lng: userLocation?.lng || defaultProps.center.lng,
        }}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleMapClick}
        defaultOptions={{
          mapTypeId: "satellite", //google.maps.MapTypeId.TERRAIN,
        }}
      >
        {userLocation?.lat && <Marker userLocation={userLocation} />}
      </GoogleMapReact>

      <div className="absolute w-full top-3 left-0  flex items-center justify-center  z-50  ">
        <p
          className={`bg-white px-5 py-1 rounded-md shadow-md  border-1 ${styles.paragraph}`}
        >
          Put the pin on the building where you want internet service.
        </p>
      </div>

      <div
        onClick={() => handleCurrentLocationButtonClick()}
        className="absolute bottom-28 right-3 bg-white p-1 shadow-md cursor-pointer hover:bg-slate-100"
      >
        <div className="rounded-full border-4 border-primary w-[30px] h-[30px] flex items-center justify-center">
          <div className="rounded-full  bg-primary w-[15px] h-[15px] "></div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
