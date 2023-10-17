"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import CheckOut from "./CheckOut";
import { toast } from "react-hot-toast";
import Image from "next/image";
import LocationImgUrl from "@/assets/location.png";

import { loaderReactCompat } from '@/lib/gmaps';
import { defaultMapCenter, geocodeAddress } from "@/lib/gis";
import { useUserLocationStore } from "@/store";
import { isNil } from "lodash-es";

const _defaultCenter = () => Object.assign({}, defaultMapCenter);

const MapComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const locationStore = useUserLocationStore();

  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [checkOutHovered, setCheckOutHovered] = useState(false);
  const [displayCheckout, setDisplayCheckout] = useState(true);
  const [center, setMapCenter] = useState(_defaultCenter);
  const [zoom, setZoom] = useState(7);

  const createMarker = (maps, map, position, draggable = true) => {
    clearMarkers();

    const marker = new maps.Marker({
      position,
      map,
      title: "Building Location",
      draggable,
    });

    marker.setMap(map);
    marker.addListener("drag", () => {
      setIsDragging(true);
    });
    marker.addListener("dragend", (event) => {
      clearMarkers();
      //this because when dragend finish onClick event on the map get executed to that why we see two markers
      //so when the dragend i wait 50 ms then set Dragging to false and check it in the onclick
      setTimeout(() => {
        setIsDragging(false);
        locationStore.setCoordinates(event.latLng.lat(), event.latLng.lng());
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

  const currentLatLng = () => {
    // Return the current lat/lng, or the default values
    if(locationStore.getCoordinates()) {
      return locationStore.getCoordinates();
    } else {
      return _defaultCenter()
    }
  }

  const setLocationFromSearchParams = () => {
    if(!isNil(searchParams.get('lat')) && !isNil(searchParams.get('lng'))) {
      try {
        locationStore.setCoordinates(parseFloat(searchParams.get('lat')), parseFloat(searchParams.get('lng')));
      } catch(e) {
        // Don't care
      }
    } else if(!!searchParams.get('address')) {
      geocodeAddress(searchParams.get('address')).then((latLng) => {
        locationStore.setCoordinates(latLng.lat, latLng.lng);
      }, (error) => {
        if(error === 'ZERO_RESULTS') {
            toast.error("Place not found");
          } else {
            toast.error('Error searching for address coordinates')
          }
      });
    }
  }

  const addMarkerToMap = (location) => {
    if (map) {
      const marker = createMarker(maps, map, location);
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
      setMapCenter(currentLatLng());
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
        locationStore.setCoordinates(pos.lat, pos.lng)
      }, () => {
        toast.error('Location access blocked');
      }, {
        enableHighAccuracy: true
      });
    } else {
      toast.error("Geolocation not supported on this device");
    }
  };

  const handleMapClick = async ({ lat, lng }) => {
    clearMarkers();
    if (!isDragging && !checkOutHovered) {
      locationStore.setCoordinates(lat, lng);
    }
  };

  const confirmLocation = () => {
    if(locationStore.lat === null || locationStore.lng === null) { return; }
    locationStore.setMapValidated(true);
    router.push('/sign-up?step=2')
  }

  useEffect(() => {
    setLocationFromSearchParams();
  }, [map, searchParams]);

  useEffect(() => {
    addMarkerToMap(currentLatLng());
  }, [locationStore]);

  useEffect(() => {
    addMarkerToMap(currentLatLng());
  }, [map]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        googleMapLoader={loaderReactCompat}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        onClick={handleMapClick}
        options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}
      >
        {!isDragging && displayCheckout && currentLatLng() && (
          <CheckOut
            setCheckOutHovered={setCheckOutHovered}
            confirmLocation={confirmLocation}
          />
        )}
      </GoogleMapReact>
      <div className="absolute w-full top-2 left-0  flex items-center justify-center  z-50 px-2 ">
        <p
          className={`bg-white px-5 py-1 rounded-md shadow-md  border-1 ${styles.paragraph}`}
        >
          Place the pin on the building you are looking for service on.
          <span
            onClick={() => {
              router.push(
                "/sign-up?step=2"
              );
            }}
            className="text-primary font-bold hover:underline cursor-pointer hover:text-primary/90"
          >
            &nbsp;Skip this step
          </span>{" "}
        </p>
      </div>

      <button
        className="absolute top-20  md:top-4 left-3 z-50 shadow-2xl shadow-white transition-all  duration-150   flex items-center justify-center  rounded-sm bg-white  cursor-pointer    focus:ring-4 focus:bg-slate-100 font-medium text-sm   focus:outline-none "
        onClick={(e) => router.back()}
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
        onClick={() => handleCurrentLocationButtonClick()}
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
