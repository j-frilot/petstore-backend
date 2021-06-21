import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const PetCard = (props) => {
    return (
        <Card>
            <Card.Img>
                <Image src={props.picture} alt="product-1" fluid />
            </Card.Img>

            <Card.Body>
                <Card.Title>
                    <h1>{props.name}</h1>
                </Card.Title>
                <Card.Text>
                    <Row>
                        <Col>
                            <h3>{props.age}</h3>
                        </Col>
                        <Col>
                            <h3>{props.gender}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>{props.gender}</h3>
                        </Col>
                        <Col>
                            <h3>{props.breed}</h3>
                        </Col>
                    </Row>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href="/contact">
                    <h3>More Info</h3>
                </a>
            </Card.Footer>
        </Card>
    );
};

export default PetCard;
