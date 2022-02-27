import React from "react";

const ItemInfo = (props) => {
    return (
        <div className="item__info">
            <span className="item__title">{props.type}</span>
            <span className="item__sub">{props.detail}</span>
            <div>
                <span className="material-icons item__icon">star</span>
                <span className="item__num">{props.star}</span>
            </div>
        </div>
    );
};

export default ItemInfo;
