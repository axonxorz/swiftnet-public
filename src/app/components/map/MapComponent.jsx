"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import CheckOut from "./CheckOut";
import { toast } from "react-hot-toast";
import Image from "next/image";
import LocationImgUrl from "@/assets/location.png";

const defaultCenter = {
  lat: 53.31225509999999,
  lng: -110.072853,
};

const MapComponent = () => {
  const [userLocation, setUserLocation] = useState({
    lat: 53.31225509999999,
    lng: -110.072853,
  });
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const searchParams = useSearchParams();
  const [defaultZoom, setDefaultZoom] = useState(7);
  const [initialZoom, setiInitialDefaultZoom] = useState(7);
  const router = useRouter();
  const [checkOutHovered, setcheckOutHovered] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(true);
  const [initialMapState, setInitialMapState] = useState(defaultCenter);
  const [center, setMapCenter] = useState(defaultCenter);

  const resetState = (event) => {
    if (event.detail == 2) {
      router.push("/");
    } else if (event.detail == 1) {
      if (
        userLocation.lat === initialMapState.lat &&
        userLocation.lng === initialMapState.lng
      ) {
        router.back();
      } else {
        setUserLocation(initialMapState);
        markers.length > 0 ? setDefaultZoom(22) : setDefaultZoom(initialZoom);
      }
    }
  };

  const createMarker = (maps, map, position, draggable = true) => {
    clearMarkers();

    const marker = new maps.Marker({
      position,
      map,
      title: "Building  Location",
      draggable,
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

    // marker.addListener("mouseover", () => {
    //   infowindow.open({
    //     anchor: marker,
    //     map,
    //   });
    // });

    return marker;
  };

  const clearMarkers = () => {
    for (let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  };

  const getLatLng = async (address) => {
    const url = `/api/geocode?address=${address}`;

    return fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    })
      .then((response) => response.json())
      .then((data) => {
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
      setMapCenter({
        lat: userLocation.lat,
        lng: userLocation.lng,
      });
    }
  };

  const handleApiLoaded = (map, maps) => {
    setMaps(maps);

    map.addListener("zoom_changed", () => {
      var zoom = map.getZoom();
      setDefaultZoom(zoom);
    });

    //
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

    setDefaultZoom((state) => state + 1);

    if (!isDragging && !checkOutHovered) {
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
        center={center}
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
      <div className="absolute w-full top-2 left-0  flex items-center justify-center  z-50 px-2 ">
        <p
          className={`bg-white px-5 py-1 rounded-md shadow-md  border-1 ${styles.paragraph}`}
        >
          Put the pin on the building where you want internet service.{" "}
          <span
            onClick={() => {
              router.push(
                "/sign-up?step=2&fullAdress=undefined&lng=undefined&lat=undefined&city=undefined&state=undefined&country=undefined&codepostal=undefined"
              );
            }}
            className="text-primary font-bold hover:underline cursor-pointer hover:text-primary/90"
          >
            skip this step
          </span>{" "}
        </p>
      </div>

      <button
        className="absolute top-20  md:top-4 left-3 z-50 shadow-2xl shadow-white transition-all  duration-150   flex items-center justify-center  rounded-sm bg-white  cursor-pointer    focus:ring-4 focus:bg-slate-100 font-medium text-sm   focus:outline-none "
        onClick={(e) => resetState(e)}
      >
        <div className="w-[38px] h-[38px] text-center flex items-center justify-center">
          <p className="text-xl text-black  ">
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.9431 1.05718C11.4638 1.57788 11.4638 2.4221 10.9431 2.9428L3.88594 9.99999L10.9431 17.0572C11.4638 17.5779 11.4638 18.4221 10.9431 18.9428C10.4224 19.4635 9.57822 19.4635 9.05752 18.9428L1.05752 10.9428C0.536817 10.4221 0.536817 9.57788 1.05752 9.05718L9.05752 1.05718C9.57822 0.536482 10.4224 0.536482 10.9431 1.05718Z"
                fill="#1F2937"
              />
            </svg>
          </p>
        </div>
      </button>
      <button
        onClick={handleCurrentLocationButtonClick}
        className="absolute   shadow-2xl shadow-white transition-all w-[60px] h-[60px] duration-150 bottom-28 right-0 flex items-center justify-center  rounded-full bg-white p-1  cursor-pointer text-white   focus:ring-4 focus:bg-slate-100 font-medium text-sm   focus:outline-none "
      >
        <Image
          src={LocationImgUrl}
          alt="location"
          style={{
            height: "45px",
            width: "45px",
          }}
        />
      </button>
    </div>
  );
};

export default MapComponent;
