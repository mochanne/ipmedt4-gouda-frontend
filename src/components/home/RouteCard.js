import React from "react";
import './RouteCard.css';

const RouteCard = (props) => {

    return(
        <section className="routeCard">
            <h3> {props.route.name} </h3>
            <p> {props.route.distance} </p>
        </section>
    );

}

export default RouteCard;