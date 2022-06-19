import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {Icon} from './Icon';

const LocationMarker = (props) => {
    const [position, setPosition] = useState(null);
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