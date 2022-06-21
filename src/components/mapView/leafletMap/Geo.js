import React, { useEffect, useState } from "react";
import {Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import QRMarkers from './QRMarkers';
import {LocationIcon} from './Icon';
import LocationPopup from "./LocationPopup";

const LocationMarker = (props) => {
    const [position, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition([52.010117, 4.706840]);//e.latlng);
      });
    }, [map]);

    //position =[52.010117, 4.706840];

    return position === null ? null : (
      <article>
        <QRMarkers QRMarkers={[props.QRMarkers, position]} />

      <Marker position={position} icon={LocationIcon}>
        <LocationPopup>
          <p> U bent hier </p>
        </LocationPopup>
      </Marker>
      </article>
    );
  }

export default LocationMarker;