"use client";
import { useEffect, useState } from "react";
import { backendClient } from "@/lib/backend";
import GoogleMapReact from 'google-map-react';
import { loaderReactCompat } from '@/lib/gmaps';
import { defaultMapCenter } from "@/lib/gis";
import { useUserLocationStore } from "@/store";

const _defaultCenter = () => Object.assign({}, defaultMapCenter);

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

export default function OutageMap(props){
  const { uuid } = props;

  const [outages, setOutages] = useState([]);

    const getOutages = async () => {
        const outageUrl = '/outage/'+{uuid}
        const response = await backendClient.get(outageUrl);
        setOutages(response.data);
    }

    useEffect(() => {
        getOutages();
    }, []);

  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [center, setMapCenter] = useState(_defaultCenter);
  const defaultProps = {
    // center: {lat: 54.423519, lng: -109.63857},
    zoom: 11
  };

  const handleApiLoaded = (map, maps) => {
    // setMaps(maps);
    // setMap(map);
    const triangleCoords = [
  
    ];
    const bermudaTriangle = new maps.Polygon({
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35
    });
    bermudaTriangle.setMap(map);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <p>TEST HERE: {uuid} </p>
      <p></p>
      {/* <GoogleMapReact
        googleMapLoader={loaderReactCompat}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)
      }
      > */}
        {/* <AnyReactComponent
          lat={54.458509}
          lng={-109.63148}
          text="My Marker"
        /> */}

      {/* </GoogleMapReact> */}
    </div>
  );
};