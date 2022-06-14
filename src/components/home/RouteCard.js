import React from "react";

import './RouteCard.css';

const RouteCard = (props) => {

    var btnText;

    if(props.route.completedPoints > 0){
        btnText = "Ga verder";
    } else {
        btnText = "Start";
    }

    let completed = parseInt((props.route.completedPoints/props.route.totalPoints)*100)

    return(
        <section className="routeCard">

            <figure className="routeCard__image">
                <img src={props.route.imgUrl} alt="" />
            </figure>

            <section className="routeCard__progressCard">
                <p className="routeCard__progressCard-score"> {props.route.completedPoints} / {props.route.totalPoints} </p>
            </section>

            <section className="routeCard__content">
                <h3> {props.route.name} </h3>
                <p> {props.route.distance} </p>

                <button className="routeCard__startBtn">
                    <p className="routeCard__startBtn-text"> {btnText} </p>

                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                </button>


                <section className="routeCard__progressBar">
                    <figure className="routeCard__progressBar-total"></figure>
                    <figure className="routeCard__progressBar-complete" style={{width:completed+'%'}}></figure>
                </section>

            </section>

            

        </section>
    );

}

export default RouteCard;