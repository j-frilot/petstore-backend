import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class SearchForm extends React.Component {
    render() {
        return (
            <section className="bg-primary text-center py-5">
                <Container>
                    <Row className=" align-items-center">
                        <Col sm={4} className="">
                            <h2 className="display-6">
                                Are you interested in adoption?
                            </h2>
                            <p className="fs-5">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nulla iure necessitatibus ex
                                quis et aspernatur modi sit aliquam dicta
                                consequuntur.
                            </p>
                        </Col>
                        <Col sm={4}>
                            <Image
                                src="images/home/paw-1.png"
                                alt="paw logo"
                                className="paw-logo-lg"
                                fluid
                            />
                            <h2>Find a pet just for you!</h2>
                        </Col>
                        <Col sm={4}>
                            <form className="search-form">
                                <div className="gender-group">
                                    <h2>Gender</h2>

                                    <input
                                        type="radio"
                                        name="gender"
                                        className="gender"
                                        id="male"
                                        value="male"
                                    />
                                    <label htmlFor="male" className="fs-5 px-1">
                                        Male
                                    </label>

                                    <input
                                        type="radio"
                                        name="gender"
                                        className="gender"
                                        id="female"
                                        value="female"
                                    />
                                    <label
                                        htmlFor="female"
                                        className="fs-5 px-1"
                                    >
                                        Female
                                    </label>
                                </div>

                                <div className="color-group">
                                    <h2>Color</h2>
                                    <input
                                        type="radio"
                                        name="color"
                                        id="black"
                                        value="black"
                                    />
                                    <label
                                        htmlFor="black"
                                        className="fs-5 px-1"
                                    >
                                        Black
                                    </label>

                                    <input
                                        type="radio"
                                        name="color"
                                        id="brown"
                                        value="brown"
                                    />
                                    <label
                                        htmlFor="brown"
                                        className="fs-5 px-1"
                                    >
                                        Brown
                                    </label>

                                    <input
                                        type="radio"
                                        name="color"
                                        id="white"
                                        value="white"
                                    />
                                    <label
                                        htmlFor="white"
                                        className="fs-5 px-1"
                                    >
                                        White
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning m-3 form-submit"
                                >
                                    {" "}
                                    Find{" "}
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default SearchForm;
