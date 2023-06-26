"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import PosIcon from "@/assets/position.png";
import CheckOut from "./CheckOut";

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
  const route = useRouter();
  const [checkOutHovered, setcheckOutHovered] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(false);
  // const ref = useRef(null);
  const confirmBuildingBtnRef = useRef(null);

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
        <div   id="confirm-building" className="w-[200px] border-2 rounded-lg shadow-md py-2 absolute top-1 flex items-end justify-center bg-white">
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
      }, 20);
    });
    marker.addListener("mouseover", () => {
      setDisplayCheckout(true);

      // infowindow.open({
      //   anchor: marker,
      //   map,
      // });
    });

    return marker;
  };

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
      console.log("sting zoom to 20");
      setUserLocation({
        ...userLocation,
        lat: parseFloat(searchParams.get("lat")),
        lng: parseFloat(searchParams.get("lng")),
        fullAdress: searchParams.get("fullAdress"),
      });
      setDefaultZoom(22);
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
        setDefaultZoom(22);
      });
    } else {
      toast.error("Geo Location not supported");
    }
  };

  const handleMapClick = async ({ lat, lng }) => {
    clearMarkers();
    defaultZoom === 7 && setDefaultZoom(11);

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
          Put the pin on the building where you want internet service.
        </p>
      </div>
      <div
        onClick={handleCurrentLocationButtonClick}
        className="absolute bottom-28 right-3 bg-white p-1 shadow-md cursor-pointer hover:bg-slate-100"
      >
        <Image src={PosIcon} width={30} height={30} />
      </div>
    </div>
  );
};

export default MapComponent;
