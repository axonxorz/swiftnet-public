"use client";
import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import styles from "@/app/styles/styles";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import CheckOut from "./CheckOut";
import { toast } from "react-hot-toast";
import Image from "next/image";
import LocationImgUrl from "@/assets/location.png";

import { loaderReactCompat } from '@/lib/gmaps';
import { defaultMapCenter } from "@/lib/gis";
import { useUserLocationStore } from "@/store";
import { isNil } from "lodash-es";
import { backendClient } from "@/lib/backend";

const _defaultCenter = () => Object.assign({}, defaultMapCenter);

const OutageMap = () => {
  const params = useParams();

  // GMaps
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [center, setMapCenter] = useState(_defaultCenter);
  const [zoom, setZoom] = useState(7);

  // Outage data
  const [outage, setOutage] = useState(null);
  const [geometry, setGeometry] = useState([]);

  const getOutage = async () => {
    const outageUuid = params.uuid;
    let endpoint = `/api/outages/${outageUuid}`;
    let response = await backendClient.get(endpoint);
    setOutage(response.data);
    endpoint = `/api/outages/${outageUuid}/geometry`;
    response = await backendClient.get(endpoint);
    setGeometry(response.data);
    console.log(outage, geometry);
  }

  const updateGeometry = (maps, map, position, draggable = true) => {
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
        locationStore.setRawCoordinates(event.latLng.lat(), event.latLng.lng());
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

  // useEffect(() => {
  //   addMarkerToMap(currentLatLng());
  // }, [locationStore]);

  useEffect(() => {
    getOutage();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        googleMapLoader={loaderReactCompat}
        center={center}
        zoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={(map) => ({ mapTypeId: map.MapTypeId.HYBRID })}>
      </GoogleMapReact>
    </div>
  );
};

export default OutageMap;
