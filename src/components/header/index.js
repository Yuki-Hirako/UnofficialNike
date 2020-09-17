import React from "react";
import MenuBottom from "./menu/MenuBottom";
import MenuTop from "./menu/MenuTop";
import "./header.css";
import Mobile from "./Mobile";
import { Search } from "./menu/MenuBottom/SecondPart";

function Header() {
    return (
        <>
            <header className="header-desktop">
                <MenuTop />
                <MenuBottom />
            </header>
            <header className="header-mobile">
                <Mobile />
                <Search />
            </header>
        </>
    );
}

export default Header;
