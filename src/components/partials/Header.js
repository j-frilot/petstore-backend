import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

class Header extends React.Component {
    render() {
        return (
            <header>
                <Navbar collapseOnSelect expand="md" variant="light" bg="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Brand
                        href="index.html"
                        className="d-md-none d-lg-none d-block fs-2 d-flex align-items-center"
                    >
                        <h1 className="fw-bold">Love Paws</h1>
                        <Image
                            src="images/home/paw-small.png"
                            alt="paw logo"
                            className="logo"
                            fluid
                        />{" "}
                    </Navbar.Brand>

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            as="ul"
                            className="d-flex align-items-center mx-auto"
                        >
                            <Nav.Item as="li">
                                <Link to="/" exact>
                                    Home
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/inventory">All Pets</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/about">About</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link to="/contact">Contact Us</Link>
                            </Nav.Item>
                            <Nav.Item to="/">
                                <Image
                                    src="images/home/paw-small.png"
                                    alt="paw logo"
                                    className="logo"
                                    fluid
                                />{" "}
                                Love Paws
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}
export default Header;
