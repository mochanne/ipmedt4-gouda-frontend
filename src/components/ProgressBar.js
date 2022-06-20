import React from "react";

import './ProgressBar.css';

const ProgressBar = (props) => {

    let completed = parseInt((props.completedPoints/props.totalPoints)*100)

    return(
        <section className="progressBar">
            <figure className="progressBar__total"></figure>
            <figure className="progressBar__complete" style={{width:completed+'%'}}></figure>
        </section>
    );
}

export default ProgressBar;