import React from "react";

import './Popup.css';

const Popup = () => {
    return(
        <section className="popup__overlay">

            <article className="popup">

                <figure className="popup__image">
                    <img src="img/popup_image.jpg" alt="popup image" />
                </figure>

                <header className="popup__header">
                    <h2>Placeholder</h2>
                </header>

                <section className="popup__content">
                    <p className="popup__content-gedicht">
                        Lorem ipsum dolor sit amet <br/>
                        consectetur adipiscing elit <br/>
                        aliqua. Ut enim ad minim veniam<br/> <br/>
                        Lorem ipsum dolor sit amet <br/>
                        consectetur adipiscing elit <br/>
                        aliqua. Ut enim ad minim veniam<br/> <br/>
                        Lorem ipsum dolor sit amet <br/>
                        consectetur adipiscing elit <br/>
                        aliqua. Ut enim ad minim veniam<br/> <br/>
                        Lorem ipsum dolor sit amet <br/>
                        consectetur adipiscing elit <br/>
                        aliqua. Ut enim ad minim veniam<br/> <br/>
                    </p>
                    <p className="popup__content-dichter">
                        Lorem Ipsum
                    </p>
                </section>

            </article>

        </section>
    );
}

export default Popup;