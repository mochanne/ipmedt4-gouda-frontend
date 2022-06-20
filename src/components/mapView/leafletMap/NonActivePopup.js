import React from 'react';
import {Popup} from 'react-leaflet';

import './NonActivePopup.css';

const NonActivePopup = (props) => {
    let afstand = Math.round(props.data[0] * 1000);
    const naam = props.data[3];


  return  (
    <Popup>
      <section className='nonActivePopup__content'>

        <p>U bent er nog niet</p>
        <p className='nonActivePopup__afstand'>nog {afstand}m te gaan</p>

      </section>

    </Popup>);
};

export default NonActivePopup;