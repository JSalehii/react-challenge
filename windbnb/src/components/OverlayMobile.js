import React from "react";

const OverlayMobile = (props) => {
    return (
        <div className="overlay">
            <div className="overlay__close">
                <span>Edit your search</span>
                <span className="material-icons" onClick={props.clicked}>close</span>
            </div>
            <form className="overlay__form">
                <div className="border__bottom">
                    <label>LOCATION</label>
                    <input type="text" placeholder="Add location" />
                </div>
                <div>
                    <label>GUESTS</label>
                    <input type="number" placeholder="Add guests" />
                </div>
            </form>
            <div className="button">
                <button type="button">
                    <span className="material-icons">search</span>
                    Search
                </button>
            </div>
        </div>
    );
};

export default OverlayMobile;
