import React from "react";

import './MapMenu.css';
import ProgressBar from '../ProgressBar';

const MapMenu = (props) => {

    return(
        <article className="mapMenu">

            <section className="mapMenu__left">
                <header className="mapMenu__header">
                    <h2>{props.route.name}</h2>
                </header>

                <section className="mapMenu__progressBar">
                    <ProgressBar totalPoints={props.route.totalPoints} completedPoints={props.route.completedPoints} />
                </section>
            </section>

            <section className="mapMenu__right">
                <section className="mapMenu__progressCard">
                    <p className="mapMenu__progressCard-score"> {props.route.completedPoints} / {props.route.totalPoints} </p>
                </section>
            </section>


        </article>
    );
}

export default MapMenu;