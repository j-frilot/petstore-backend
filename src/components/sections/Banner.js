import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Banner = (props) => {
    const bg = {
        height: "500px",
        backgroundImage:
            'url("https://res.cloudinary.com/dsip2gx3i/image/upload/e_grayscale/v1625110226/Love%20Paws/slide-2_jeatdm.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    return (
        <Jumbotron className="text-center" style={bg}>
            <Container className="pt-4">
                <h1 className="display-1 fw-bold text-primary pt-5">
                    {props.heading}
                </h1>
            </Container>
        </Jumbotron>
    );
};

export default Banner;
