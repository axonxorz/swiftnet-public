"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PosIcon from "@/assets/position.png";
import CheckOut from "./CheckOut";
import { toast } from "react-hot-toast";

const defaultCenter = {
  lat: 53.31225509999999,
  lng: -110.072853,
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState(defaultCenter);
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const searchParams = useSearchParams();
  const [defaultZoom, setDefaultZoom] = useState(7);
  const [initialZoom, setiInitialDefaultZoom] = useState(7);
  const route = useRouter();
  const [checkOutHovered, setcheckOutHovered] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(true);
  // const ref = useRef(null);
  const confirmBuildingBtnRef = useRef(null);
  const [initialMapState, setInitialMapState] = useState(false);

  // const confirmBuildingBtn = document?.getElementById("confirm-building");

  // useEffect(() => {
  //   confirmBuildingBtn?.addEventListener("click", () => {
  //     route.push(
  //       `/sign-up?step=2&fullAdress=${userLocation.fullAdress}&lng=${userLocation.lng}&lat=${userLocation.lat}&city=${userLocation.city}&state=${userLocation.state}&country=${userLocation.city}&codepostal=${userLocation.postal_code}`
  //     );
  //   });

  //   confirmBuildingBtn?.addEventListener("mouseover", () => {
  //     setcheckOutHovered(true);
  //   });

  //   confirmBuildingBtn?.addEventListener("mouseout", () => {
  //     setcheckOutHovered(false);
  //   });
  // }, [confirmBuildingBtn]);

  useEffect(() => {
    const confirmBuildingBtn = confirmBuildingBtnRef.current;
    console.log(confirmBuildingBtn);
    const handleClick = () => {
      // your logic here

      console.log("click mee ah");
    };

    const handleMouseEnter = () => {
      // your logic here
      console.log("ebrtzr");
    };

    const handleMouseLeave = () => {
      // your logic here
      console.log("leave");
    };

    if (confirmBuildingBtn) {
      confirmBuildingBtn.addEventListener("click", handleClick);
      confirmBuildingBtn.addEventListener("mouseenter", handleMouseEnter);
      confirmBuildingBtn.addEventListener("mouseleave", handleMouseLeave);
      console.log("heeeree");
      return () => {
        // remove the event listeners when the component unmounts
        confirmBuildingBtn.removeEventListener("click", handleClick);
        confirmBuildingBtn.removeEventListener("mouseenter", handleMouseEnter);
        confirmBuildingBtn.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [confirmBuildingBtnRef]);

  const resetState = () => {
    setUserLocation(initialMapState);
    setDefaultZoom(initialZoom);
  };

  const createMarker = (
    maps,
    map,
    position,
    draggable = true,
    confirmBuildingBtnRef
  ) => {
    clearMarkers();

    const marker = new maps.Marker({
      position,
      map,
      title: "Building  Location",
      draggable,
    });

    const infowindow = new google.maps.InfoWindow({
      content: `
      <div class="relative">
        <div  ref="${confirmBuildingBtnRef}"  id="confirm-building" className="w-[200px] border-2 rounded-lg shadow-md py-2 absolute top-1 flex items-end justify-center bg-white">
          <div>
            <button class="py-2 bg-primary rounded-md text-white px-4">
              Confirm building
            </button>
          </div>
        </div>
      </div>`,
      ariaLabel: "Uluru",
    });

    marker.setMap(map);
    marker.addListener("drag", () => {
      setIsDragging(true);
      defaultZoom === 7 && setDefaultZoom(11);
    });
    marker.addListener("dragend", (event) => {
      clearMarkers();

      //this because when dragend finish onClick event on the map get executed to that why we see two markers
      //so when the dragend i wait 50 ms then set Dragging to false and check it in the onclick
      setTimeout(() => {
        setIsDragging(false);
        setUserLocation({
          ...userLocation,
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      }, 10);
    });
    marker.addListener("mouseover", () => {
      setDisplayCheckout(true);
    });

    return marker;
  };

  const clearMarkers = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  };

  const getLatLng = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}`;

    return fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === "OK") {
          const result = data.results[0];
          const latLng = result.geometry.location;
          return latLng;
        } else {
          toast.error("place not found");
          throw new Error(data.status);
        }
      })
      .catch((error) => console.error(error));
  };

  const setLocationFromSearchParams = () => {
    if (
      searchParams.get("lat") &&
      searchParams.get("lng") &&
      searchParams.get("fullAdress")
    ) {
      if (
        searchParams.get("lat") !== "undefined" &&
        searchParams.get("lat") !== "undefined"
      ) {
        setUserLocation({
          ...userLocation,
          lat: parseFloat(searchParams.get("lat")),
          lng: parseFloat(searchParams.get("lng")),
          fullAdress: searchParams.get("fullAdress"),
        });
        setInitialMapState({
          ...userLocation,
          lat: parseFloat(searchParams.get("lat")),
          lng: parseFloat(searchParams.get("lng")),
          fullAdress: searchParams.get("fullAdress"),
        });
      }
      setDefaultZoom(21);
    } else {
      if (searchParams.get("fullAdress")) {
        getLatLng(searchParams.get("fullAdress")).then((latLng) => {
          setUserLocation({
            ...userLocation,
            lat: parseFloat(latLng.lat),
            lng: parseFloat(latLng.lng),
            fullAdress: searchParams.get("fullAdress"),
          });
          setInitialMapState({
            ...userLocation,
            lat: parseFloat(latLng.lat),
            lng: parseFloat(latLng.lng),
            fullAdress: searchParams.get("fullAdress"),
          });
          setDefaultZoom(21);
        });
      }
    }
  };

  const addMarkerToMap = (location) => {
    if (map) {
      const marker = createMarker(maps, map, location);
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
    }
  };

  const handleApiLoaded = (map, maps) => {
    setMaps(maps);
    setMap(map);
  };

  const handleCurrentLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation({ ...userLocation, ...pos });
        setDefaultZoom(21);
        setiInitialDefaultZoom(21);
      });
    } else {
      toast.error("Geo Location not supported");
    }
  };

  const handleMapClick = async ({ lat, lng }) => {
    clearMarkers();
    if (defaultZoom === 7) {
      setDefaultZoom(11);
      setiInitialDefaultZoom(11);
    }

    if (!isDragging && !checkOutHovered) {
      console.log("click");

      setUserLocation({ ...userLocation, lat, lng });
    }
  };

  useEffect(() => {
    setLocationFromSearchParams();
  }, [searchParams]);

  useEffect(() => {
    addMarkerToMap(userLocation);
  }, [userLocation]);

  useEffect(() => {
    addMarkerToMap(userLocation);
  }, [map]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API }}
        center={userLocation || defaultCenter}
        zoom={defaultZoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleMapClick}
        options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}
      >
        {!isDragging && displayCheckout && userLocation?.lat && (
          <CheckOut
            userLocation={userLocation}
            setcheckOutHovered={setcheckOutHovered}
          />
        )}
      </GoogleMapReact>
      <div className="absolute w-full top-3 left-0  flex items-center justify-center  z-50  ">
        <p
          className={`bg-white px-5 py-1 rounded-md shadow-md  border-1 ${styles.paragraph}`}
        >
          Put the pin on the building where you want internet service.{" "}
          <span
            className="underline hover:no-underline font-bold text-primary cursor-pointer"
            onClick={() => resetState()}
          >
            Reset map
          </span>
        </p>
      </div>
      <div
        onClick={handleCurrentLocationButtonClick}
        className="absolute bottom-28 right-1 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-white p-1 shadow-md cursor-pointer hover:bg-slate-100"
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9996 0C12.4905 0 12.8884 0.39797 12.8884 0.88889V2.22222C12.8884 2.23552 12.8882 2.24876 12.8876 2.26191C17.5793 2.68409 21.3156 6.42033 21.738 11.112C21.7511 11.1114 21.7643 11.1111 21.7776 11.1111H23.1109C23.6018 11.1111 23.9998 11.5091 23.9998 12C23.9998 12.4909 23.6018 12.8889 23.1109 12.8889H21.7776C21.7643 12.8889 21.7511 12.8886 21.738 12.888C21.3156 17.5795 17.5794 21.3157 12.8878 21.738C12.8884 21.7511 12.8887 21.7644 12.8887 21.7777V23.1111C12.8887 23.602 12.4907 24 11.9998 24C11.5089 24 11.1109 23.602 11.1109 23.1111V21.7777C11.1109 21.7644 11.1112 21.7511 11.1118 21.7379C6.42037 21.3155 2.68433 17.5794 2.26196 12.888C2.24878 12.8886 2.23554 12.8889 2.22223 12.8889H0.88889C0.39797 12.8889 0 12.4909 0 12C0 11.5091 0.397969 11.1111 0.888889 11.1111H2.22223C2.23554 11.1111 2.24878 11.1114 2.26194 11.112C2.68426 6.4206 6.42021 2.68452 11.1115 2.26199C11.111 2.2488 11.1107 2.23555 11.1107 2.22222V0.888889C11.1107 0.397968 11.5086 0 11.9996 0ZM12 20.5277C16.7097 20.5277 20.5278 16.7097 20.5278 11.9999C20.5278 7.29019 16.7097 3.47217 12 3.47217C7.29019 3.47217 3.47217 7.29019 3.47217 11.9999C3.47217 16.7097 7.29019 20.5277 12 20.5277Z"
            fill="#0075F0"
          />
          <circle cx="12" cy="12" r="7" fill="#0075F0" />
        </svg>
      </div>
    </div>
  );
};

export default MapComponent;
