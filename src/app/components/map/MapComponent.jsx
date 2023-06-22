"use client";
import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import CheckOut from "./CheckOut";
import { useSearchParams } from "next/navigation";

const defaultCenter = {
  lat: 53.31225509999999,
  lng: -110.072853,
};

const defaultZoom = 7;

const createMarker = (maps, map, position, draggable = true) => {
  const marker = new maps.Marker({
    position,
    map,
    title: "User Location",
    draggable,
  });

  return marker;
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(defaultCenter);
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const searchParams = useSearchParams();

  const clearMarkers = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  };

  const setLocationFromSearchParams = () => {
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
  };

  const addMarkerToMap = (location) => {
    if (map) {
      const marker = createMarker(maps, map, location);
      marker.setMap(map);

      marker.addListener("drag", (event) => {
        setIsDragging(true);
      });
      marker.addListener("dragend", (event) => {
        setIsDragging(false);
        setUserLocation({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      });

      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    }
  };

  const handleApiLoaded = (map, maps) => {
    setMaps(maps);
    setMap(map);
    const marker = createMarker(maps, map, userLocation);
    marker.addListener("drag", (event) => {
      setIsDragging(true);
    });
    marker.addListener("dragend", (event) => {
      setIsDragging(false);
      setUserLocation({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      });
    });

    marker.setMap(map);
    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  const handleCurrentLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(pos);
      });
    } else {
      toast.error("Geo Location not supported");
    }
  };

  const handleMapClick = async ({ lat, lng }) => {
    clearMarkers();
    setUserLocation({ lat, lng });
    try {
      const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.address) {
        const { city, country, postcode, region } = data.address;
        setUserLocation((prevLocation) => ({
          ...prevLocation,
          city,
          country,
          state: region,
          postal_code: postcode,
          lat,
          lng,
        }));
      }
    } catch (error) {
      console.log("Error retrieving address information:", error);
    }
  };

  useEffect(() => {
    setLocationFromSearchParams();
  }, [searchParams]);

  useEffect(() => {
    clearMarkers();
    addMarkerToMap(userLocation);
  }, [userLocation]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API }}
        center={userLocation || defaultCenter}
        defaultZoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleMapClick}
        options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}
      >
        {!isDragging && userLocation?.lat && (
          <CheckOut userLocation={userLocation} />
        )}
      </GoogleMapReact>
      <div className="absolute w-full top-3 left-0  flex items-center justify-center  z-50  ">
        <p
          className={`bg-white px-5 py-1 rounded-md shadow-md  border-1 ${styles.paragraph}`}
        >
          Put the pin on the building where you want internet service.
        </p>
      </div>
      <div
        onClick={handleCurrentLocationButtonClick}
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
