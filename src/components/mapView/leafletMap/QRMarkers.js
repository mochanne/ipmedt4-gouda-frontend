import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {Icon} from './Icon';
import CalculateDistance from "./CalculateDistance.js";

const QRMarkers = (props) => {
  const { QRMarkers } = props;
  const latlong= QRMarkers[1];
  
  // via map zorgt die ervoor dat alle markers met alle data weergegeven worden.
  const markers = QRMarkers[0].map(({latitude, longitude, afbeelding, gedicht, info, naam}, index) => (
    <Marker 
      key={index} 
      position={[latitude, longitude]} 
      icon={Icon}
    >
     <CalculateDistance data={[afbeelding, gedicht, info, naam, latitude, longitude, latlong]}/> 
      
    </Marker>
  ));
  return <Fragment>{markers}</Fragment>

};
export default QRMarkers;