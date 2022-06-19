import React, { Fragment } from 'react';
import {Marker} from 'react-leaflet';
import {Icon} from './Icon';
import MarkerPopup from './MarkerPopup';

const QRMarkers = (props) => {
  const { QRMarkers } = props;
  console.log(props);

  const markers = QRMarkers.map(({latitude, longitude, afbeelding, gedicht, info, naam}, index) => (
    <Marker 
      key={index} 
      position={[latitude, longitude]} 
      icon={Icon}
    >
      <MarkerPopup data={[afbeelding, gedicht, info, naam]}/>
      
    </Marker>
  ));
  return <Fragment>{markers}</Fragment>
};
export default QRMarkers;
//<MarkerPopup data={QRMarkers}/>