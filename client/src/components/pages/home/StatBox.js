import React from "react";

import Col from "react-bootstrap/Col";

const StatBox = (props) => {
    return (
        <Col md={4}>
            {props.icon}
            <h3 className="fw-bold">
                <span>{props.stats}</span> rescued
            </h3>
            <p className="fs-5">{props.desc}</p>
        </Col>
    );
};

export default StatBox;
