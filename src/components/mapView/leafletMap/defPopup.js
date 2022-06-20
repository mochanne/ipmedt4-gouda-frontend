import React from 'react';
import {Popup} from 'react-leaflet';

const DefPopup = (props) => {
    console.log(props);
    console.log(props.data[0]);
    let afstand = Math.round(props.data[0] * 1000);
    console.log(afstand);

    const naam = props.data[3];


  return  (<Popup>
    
    <p>U bent niet hier</p>
    <p className='Popup-text'>{naam}</p>
    <p className='afstand'>nog {afstand}m te gaan</p>

  </Popup>);
};

export default  DefPopup;