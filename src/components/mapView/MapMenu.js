import React from "react";
import './MapMenu.css';
import ProgressBar from '../ProgressBar';

const MapMenu = (props) => {

    return(
        <article className="mapMenu">

            <section className="mapMenu__left">
                <header className="mapMenu__header">
                    <h2>{props.route.naam.toLowerCase().split('-')[0]}</h2>
                </header>

                <section className="mapMenu__progressBar">
                    <ProgressBar totalPoints={props.route.aantal} completedPoints={0} />
                </section>
            </section>

            <section className="mapMenu__right">
                <section className="mapMenu__progressCard">
                    <p className="mapMenu__progressCard-score"> {0} / {props.route.aantal} </p>
                </section>
            </section>


        </article>
    );
}

export default MapMenu;