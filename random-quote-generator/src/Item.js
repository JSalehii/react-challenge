import React from "react";

function Item(props) {
    return (
        <div className="item__container">
            <p>{props.text}</p>
            <div className="item__info" onClick={props.showAllQuotes}>
                <div>
                    <h5>{props.name}</h5>
                    <h6>{props.genre}</h6>
                </div>
                <span className="material-icons arrow__right">arrow_right_alt</span>
            </div>
        </div>
    );
}

export default Item;
