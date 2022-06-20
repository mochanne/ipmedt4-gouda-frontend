import React, { useState } from "react";
import {Popup} from 'react-leaflet';

import './ActivePopup.css';

const MarkerPopup = (props) => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const content = {
        afbeelding : props.data[0],
        gedicht: props.data[1],
        info: props.data[2],
        naam: props.data[3]
    };

    return(
        <Popup>

            <section className="popup__container">
                <figure className="popup__image">
                    <img src={content.afbeelding} alt="popup image" />
                </figure>

                <header className="popup__header">
                    <h2> {content.naam} </h2>
                </header>

                <section className="popup__content-container">
                    
                    <section className="popup__content-tabs">
                        <section className={toggleState === 1 ? "popup__content-tab active-tab" : "popup__content-tab"} onClick={ () => toggleTab(1) }> Gedicht </section>
                        <section className={toggleState === 2 ? "popup__content-tab active-tab" : "popup__content-tab"} onClick={ () => toggleTab(2) }> Info </section>
                    </section>

                    <section className="popup__content-blocks">

                        <section className={toggleState === 1 ? "popup__content-block active-content" : "popup__content-block"}>
                            <p dangerouslySetInnerHTML={{ __html: content.gedicht }}></p>
                        </section>

                        <section className={toggleState === 2 ? "popup__content-block active-content" : "popup__content-block"}>
                            <p dangerouslySetInnerHTML={{ __html: content.info }}></p>
                        </section>

                    </section>
                    
                </section>
            </section>

        </Popup>
    );
}

export default MarkerPopup;