import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="nav container">
                <ul className=" nav-list ">
                    <li className="nav-Navlink hide-small">
                        <NavLink to="/" activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-Navlink hide-small">
                        <NavLink to="/inventory" activeClassName="active">
                            All Pets
                        </NavLink>
                    </li>
                    <li className="nav-Navlink hide-small">
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-Navlink hide-small">
                        <NavLink to="/contact" activeClassName="active">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
                <h1 className="nav-logo">
                    <NavLink to="/" activeClassName="active">
                        <img
                            src="images/home/paw-small.png"
                            alt="paw logo"
                            className="logo"
                        />{" "}
                        Love <span className="accent"></span> Paws Pet Shop{" "}
                        <span className="accent">React</span> :)
                    </NavLink>
                </h1>
            </nav>
            <nav className="container hide-big">
                <ul className="nav-list">
                    <li className="nav-Navlink ">
                        <NavLink to="/" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-Navlink">
                        <NavLink to="/inventory" activeClassName="active">
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <nav className="container hide-big">
                <ul className="nav-list">
                    <li className="nav-Navlink">
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-Navlink">
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
