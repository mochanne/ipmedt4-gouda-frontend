import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {Icon} from './Icon';
import MarkerPopup from './MarkerPopup';
import Geo from "./Geo";
import CalculateDistance from "./CalculateDistance.js";

const QRMarkers = (props) => {
  const { QRMarkers } = props;
  const data = QRMarkers[0];
  const latlong= QRMarkers[1];
  
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
//<MarkerPopup data={[afbeelding, gedicht, info, naam]}/>