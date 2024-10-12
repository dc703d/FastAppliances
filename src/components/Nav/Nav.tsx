import "./Nav.scss";
import { Link } from "react-router-dom";
import fastlogo from "../../assets/fast-logo.png";
import { useState } from "react";
import menu from "../../assets/menu-icon.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Nav = () => {
    const [showNav, setShowNav] = useState(false);
    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <div className="navigation">
            {showNav && <HamburgerMenu onClose={toggleNav} />}
            <Link className="navigation__heading" to={"/FastAppliances/"}>
                <img src={fastlogo} className="navigation__logo" />
            </Link>
            <ul className="navigation__list">
                <Link
                    className="navigation__list--item"
                    to={"/FastAppliances/"}
                >
                    Home
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/FastAppliances/aboutus"}
                >
                    About Us
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/FastAppliances/services"}
                >
                    Services
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/FastAppliances/help&advice"}
                >
                    Help & Advice
                </Link>
                <Link
                    className="navigation__list--item"
                    to={"/FastAppliances/book-a-repair"}
                >
                    Book a Repair
                </Link>
            </ul>
            <img
                src={menu}
                className="navigation__item"
                alt="menu icon"
                onClick={toggleNav}
            />
        </div>
    );
};

export default Nav;
