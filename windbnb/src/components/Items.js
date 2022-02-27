import React from "react";
import Item from "./Item";

import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";

const Items = () => {
    const info = [
        {
            img: img1,
            id: 1,
            type: "SUPER HOST",
            details: "Entier apartment.2 beds",
            des: "stylist apartment in center of the city",
            star: 4.4,
        },
        {
            img: img2,
            id: 2,
            type: "Private room",
            details: "",
            des: "cozy, peaceful and private room with...",
            star: 4.25,
        },
        {
            img: img3,
            id: 3,
            type: "SUPER HOST",
            details: "Entier apartment.2 beds",
            des: "stylist room in design destrict",
            star: 4.85,
        },
        {
            img: img4,
            id: 4,
            type: "Entire house",
            details: "",
            des: "Modern House in a remote area",
            star: 4.96,
        },
        {
            img: img5,
            id: 5,
            type: "Private room",
            details: "",
            des: "Modern apartment close to nature",
            star: 4.54,
        },
        {
            img: img6,
            id: 6,
            type: "Entire house",
            details: "",
            des: "House in a remote area",
            star: 4.64,
        },
    ];

    const list = info.map((item) => {
        return (
            <Item
                img={item.img}
                type={item.type}
                detail={item.details}
                star={item.star}
                des={item.des}
                key={item.id}
            />
        );
    });

    return <div className="items">{list}</div>;
};

export default Items;
