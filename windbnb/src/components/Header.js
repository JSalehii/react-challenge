import React, { useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import OverlayMobile from "./OverlayMobile";

const Header = () => {
    const [flag, setFlag] = useState(false);
    const toggleFlag = () => {
        setFlag(!flag);
    }
    return (
        <div className="header">
            <Logo />
            <Search clicked={toggleFlag}/>
            {flag ? <OverlayMobile clicked={toggleFlag}/> : null}
        </div>
    );
};

export default Header;
