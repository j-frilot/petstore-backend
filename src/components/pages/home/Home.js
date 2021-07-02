// import Slider from "../sections/Slider";
import Stats from "./Stats";
import React from "react";
import { Link } from "react-router-dom";
import PetCard from "../../sections/PetCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <main>
            {/*<Slider />*/}
            <Stats />

            <Container>
                <div className="section-intro p-5">
                    <h3>Ready For A New Home</h3>
                    <h4 className="red">
                        <Link to="/doggies">
                            View All Pals{" "}
                            <i className="fas fa-chevron-right"></i>
                        </Link>
                    </h4>

                    <hr />

                    <Row className="p-2 mx-auto">
                        <Col sm={3}>
                            <PetCard
                                picture="beagle/n02088364_10296"
                                name="ralph"
                                age="5"
                                gender="male"
                                breed="beagle"
                            />
                        </Col>
                        <Col sm={3}>
                            <PetCard
                                picture="beagle/n02088364_10206"
                                name="buster"
                                age="5"
                                gender="male"
                                breed="beagle"
                            />
                        </Col>
                        <Col sm={3}>
                            <PetCard
                                picture="beagle/n02088364_10354"
                                name="lola"
                                age="5"
                                gender="female"
                                breed="beagle"
                            />
                        </Col>
                        <Col sm={3}>
                            <PetCard
                                picture="beagle/n02088364_10206"
                                name="tucker"
                                age="5"
                                gender="male"
                                breed="beagle"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </main>
    );
};

export default Home;
