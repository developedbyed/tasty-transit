
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "50%",
    height: "100%",
  };

  const customStyles = [
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#800080' // Purple color for small roads
        }
      ]
    }
  ];

  const center = {
    lat: 57.36769142203658,
    lng: -2.189288869889704,
  };

  const markerIcon = {
    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg fill="#FFA500" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 395.71 395.71" xmlSpace="preserve">
        <g>
          <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </g>
      </svg>
    `)
  };

  return (
    <div className="w-full h-full">
      <Map
        google={props.google}
        zoom={14}
        style={mapStyles}
        styles={customStyles}
        initialCenter={center}
        center={center}
        disableDefaultUI={true}
      >
        <Marker
          position={center}
          icon={markerIcon}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: `${import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY}`,
  // apiKey: 'AIzaSyAcYiJ7MGciJRBZqRvaeXLPfebe8OxrCXQ'
})(MapContainer);
