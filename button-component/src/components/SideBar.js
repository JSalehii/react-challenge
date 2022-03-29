import React from "react";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">
                Dev<span>challenges.io</span>
            </h3>
            <div className="sidebar__link">
                <a href="#">Colors</a>
                <a href="#">Typography</a>
                <a href="#">Spaces</a>
                <a href="#">Buttons</a>
                <a href="#" className="active">Inputs</a>
                <a href="#">Grid</a>
            </div>
        </div>
    );
};

export default SideBar;
