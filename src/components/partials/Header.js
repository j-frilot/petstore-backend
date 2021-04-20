import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="nav container">
                <ul className=" nav-list ">
                    <li className="nav-link hide-small">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link hide-small">
                        <Link to="/inventory">All Pets</Link>
                    </li>
                    <li className="nav-link hide-small">
                        <Link to="about.html">About</Link>
                    </li>
                    <li className="nav-link hide-small">
                        <Link to="contact.html">Contact Us</Link>
                    </li>
                </ul>
                <h1 className="nav-logo">
                    <Link to="index.html">
                        <img
                            src="images/home/paw-small.png"
                            alt="paw logo"
                            className="logo"
                        />{" "}
                        Love <span className="accent"></span> Paws Pet Shop{" "}
                        <span className="accent">React</span>ivated :)
                    </Link>
                </h1>
            </nav>
            <nav className="container hide-big">
                <ul className="nav-list">
                    <li className="nav-link ">
                        <Link to="index.html">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="inventory.html">Products</Link>
                    </li>
                </ul>
            </nav>
            <nav className="container hide-big">
                <ul className="nav-list">
                    <li className="nav-link">
                        <Link to="about.html">About</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="contact.html">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
