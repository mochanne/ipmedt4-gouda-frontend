import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import QRMarkers from './QRMarkers';
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
      <article>
        <QRMarkers QRMarkers={[props.QRMarkers, position]} />

      <Marker position={position} icon={Icon}>
        <Popup>
          U bent hier. <br />
        </Popup>
      </Marker>
      </article>
    );
  }

export default LocationMarker;