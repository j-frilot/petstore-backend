import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
    return (
        <footer class="bg-primary py-3">
            <Container className="d-flex align-items-center justify-content-evenly text-white">
                <div>
                    <h5>Animal In Danger?</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repudiandae assumenda libero architecto dignissimos
                        nesciunt!
                    </p>
                </div>

                <a href="/contact" className="btn btn-warning">
                    Call Now
                </a>
            </Container>
        </footer>
    );
};

export default Footer;
