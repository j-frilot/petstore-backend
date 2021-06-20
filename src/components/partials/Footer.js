import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-info">
            <section className="container danger">
                <div className="content">
                    <h5>Animal In Danger?</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae assumenda libero architecto dignissimos
                        nesciunt!
                    </p>
                </div>

                <Link to="/contact" className="btn btn-warning">
                    Call Now
                </Link>
            </section>
            <hr />
        </footer>
    );
};

export default Footer;
