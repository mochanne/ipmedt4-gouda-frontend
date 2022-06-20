import React from "react";

import './RouteCard.css';
import ProgressBar from "../ProgressBar";

const RouteCard = (props) => {

    var btnText;

    if(props.completed > 0){
        btnText = "Ga verder";
    } else {
        btnText = "Start";
    }

    let completed = parseInt((0/props.route.totalPoints)*100)



    return(
        <section className="routeCard">

            <figure className="routeCard__image">
                <img src={props.route.afbeelding} alt="route img" />
            </figure>

            <section className="routeCard__progressCard">
                <p className="routeCard__progressCard-score"> {props.completed} / {props.route.aantal} </p>
            </section>

            <section className="routeCard__content">
                <header className="routeCard__content-header">
                    <h3> {props.route.naam.toLowerCase().split('-')[0]} </h3>
                </header>

                <button className="routeCard__startBtn">
                    <p className="routeCard__startBtn-text"> {btnText} </p>

                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>


                <section className="routeCard__progressBar">
                    <ProgressBar totalPoints={props.route.aantal} completedPoints={props.completed} />
                </section>

            </section>

            

        </section>
    );

}

export default RouteCard;