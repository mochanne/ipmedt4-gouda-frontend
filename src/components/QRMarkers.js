import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {Icon} from './Icon';
import MarkerPopup from './MarkerPopup';
import LocationMarker from './Geo'; 

const QRMarkers = (props) => {
  const { QRMarkers } = props;
  console.log (LocationMarker);
  //console.log(posistion);
  
  const markers = QRMarkers.map((QRMarkers, index) => (
    <Marker 
      key={index} 
      position={QRMarkers.geometry} 
      icon={Icon}
    >
      <MarkerPopup data={QRMarkers}/>
    </Marker>
  ));  
  return <Fragment>{markers}</Fragment>
};
export default QRMarkers;