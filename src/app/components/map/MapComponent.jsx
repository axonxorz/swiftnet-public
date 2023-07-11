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
  // const ref = useRef(null);
  const confirmBuildingBtnRef = useRef(null);
  const [initialMapState, setInitialMapState] = useState(defaultCenter);
  const [center, setMapCenter] = useState(defaultCenter);

  // Add event listener to handle the back button press
  useEffect(() => {
    const handleBackButton = (event) => {
      event.preventDefault();
      // Perform your custom action here
      console.log("Custom action on back button press");
      // You can navigate to a different route using router.push()
      // router.push('/your-custom-route');
      router.refresh();
    };

    window.addEventListener("popstate", handleBackButton);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [router, window]);

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
    markers.length > 0 ? setDefaultZoom(22) : setDefaultZoom(initialZoom);
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

    const infowindowContent = document.createElement("div");
    infowindowContent.innerHTML = `
  <div class="relative">
    <div id="confirm-building" class="w-[200px] border-2 rounded-lg shadow-md py-2 absolute top-1 flex items-end justify-center bg-white">
      <div>
        <button class="py-2 bg-primary rounded-md text-white px-4">
          Confirm building hhh
        </button>
      </div>
    </div>
  </div>`;

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

    marker.addListener("mouseover", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });

    const confirmButton = infowindowContent.querySelector(
      "#confirm-building button"
    );
    confirmButton.addEventListener("click", () => {
      console.log("3lia"); // Code inside handleClick event
      // Add your code here to execute when the button is clicked inside the InfoWindow
    });

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
      console.log("you're draging the map");
      var zoom = map.getZoom();
      console.log(zoom);
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
      <button
        onClick={handleCurrentLocationButtonClick}
        className="absolute   shadow-2xl transition-all w-[60px] h-[60px] duration-150 bottom-28 right-0 flex items-center justify-center  rounded-full bg-white p-1  cursor-pointer text-white   focus:ring-4 focus:bg-slate-100 font-medium text-sm   focus:outline-none "
      >
        <Image
          src={LocationImgUrl}
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
