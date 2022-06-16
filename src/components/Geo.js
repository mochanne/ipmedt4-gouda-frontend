import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import {Icon} from './Icon';

function LocationMarker() {
    const [position, setPosition] = useState(null);
    console.log (position);

    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
      });
    }, [map]);

    return position === null ? null : (
      <Marker position={position} icon={Icon}>
        <Popup>
          You are here. <br />
        </Popup>
      </Marker>
    );
  }

  export default LocationMarker;