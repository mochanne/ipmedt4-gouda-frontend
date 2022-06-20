import React, { useState } from "react";

import './Popup.css';

const Popup = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const content = {
        gedicht: "Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit <br /> aliqua. Ut enim ad minim veniam <br/><br/> Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit <br/> aliqua. Ut enim ad minim veniam<br /> <br /> Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit <br /> aliqua. Ut enim ad minim veniam <br/> <br/>  Lorem ipsum dolor sit amet <br/> consectetur adipiscing elit <br/> aliqua. Ut enim ad minim veniam",
        info: "Mi sit amet mauris commodo. Consequat semper viverra nam libero justo laoreet sit amet cursus. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Cursus vitae congue mauris rhoncus aenean vel. Eros donec ac odio tempor orci dapibus ultrices in."
    };

    

    return(
        <section className="popup__overlay">

            <article className="popup">

                <button className="popup__closeBtn">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>

                <figure className="popup__image">
                    <img src="img/popup_image.jpg" alt="popup image" />
                </figure>

                <header className="popup__header">
                    <h2>Placeholder</h2>
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

            </article>

        </section>
    );
}

export default Popup;