import React, { useState, useEffect } from "react";
import PetCard from "../../sections/PetCard";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PetSection = (props) => {
    const [dogPic, setDogPic] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/petstore/inventory")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setDogPic(res);
            });
    }, []);

    return (
        <Row lg={5} className="p-5">
            {dogPic.map((dog) => (
                <Col sm={4} key={dog.inventory_id} className="p-3">
                    <PetCard
                        picture={dog.image}
                        name={dog.name}
                        age="5"
                        gender={dog.gender}
                        breed={dog.breed}
                    />
                </Col>
            ))}
        </Row>
    );
};

export default PetSection;
