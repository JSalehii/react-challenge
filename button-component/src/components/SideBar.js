import React from "react";

const SideBar = () => {
    return (
        <div className="sidebar">
            <h3 className="sidebar__title">
                Dev<span>challenges.io</span>
            </h3>
            <div className="sidebar__link">
                <a href="#colors">Colors</a>
                <a href="#typeography">Typography</a>
                <a href="#spaces">Spaces</a>
                <a href="#buttons">Buttons</a>
                <a href="#inputs" className="active">Inputs</a>
                <a href="#grid">Grid</a>
            </div>
        </div>
    );
};

export default SideBar;
