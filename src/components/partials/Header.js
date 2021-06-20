import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar
                    collapseOnSelect
                    expand="md"
                    bg="dark"
                    variant="dark"
                    className="text-white"
                >
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        className="border border-white"
                    />

                    <Navbar.Brand
                        href="index.html"
                        className="d-md-none d-lg-none d-block fs-2 d-flex align-items-center "
                    >
                        <Image
                            src="images/home/paw-small.png"
                            alt="paw logo"
                            className="pe-3"
                            fluid
                        />
                        <h1 className="fw-bold">Love Paws</h1>
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            as="ul"
                            className="mx-auto fs-5 fw-bolder align-items-center"
                        >
                            <Nav.Item as="li">
                                <Link to="/" exact className="px-3">
                                    Home
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/inventory" className="px-3">
                                    All Pets
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/about" className="px-3">
                                    About
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/contact" className="px-3">
                                    Contact Us
                                </Link>
                            </Nav.Item>
                            <Nav.Item to="/">
                                <Link
                                    tp="/"
                                    className="px-3 d-flex align-items-center"
                                >
                                    <Image
                                        src="images/home/paw-small.png"
                                        alt="paw logo"
                                        className="pe-3"
                                        fluid
                                    />{" "}
                                    <h1 className="fw-bold">Love Paws</h1>
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
export default Header;
