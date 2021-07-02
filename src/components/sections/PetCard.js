import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";

const PetCard = (props) => {
    const cardStyle = {
        width: "200px",
        boxShadow: "-5px 5px 5px rgba(225, 193, 7, 0.7)"
    };
    // https://images.dog.ceo/breeds/beagle/DSC05086.JPG
    // breeds / beagle / DSC05086.JPG;

    return (
        <div
            className="text-center text-primary bg-white rounded mx-auto"
            style={cardStyle}
        >
            <Image
                src={`http://images.dog.ceo/breeds/${props.picture}.jpg`}
                alt="product-1"
                width="200px"
                height="200px"
                rounded
            />

            <div style={{ textTransform: "capitalize" }}>
                <div>
                    <h3 className="m-0">{props.name}</h3>
                </div>
                <div>
                    <p className="fs-5 m-0">{props.age}</p>
                    <p className="fs-5 m-0">{props.gender}</p>
                    <p className="fs-5 m-0">{props.breed}</p>
                </div>

                <Link to={`/doggies/${props.name}`}>
                    <p className="fs-5 m-0">More Info</p>
                </Link>
            </div>
        </div>
    );
};

export default PetCard;
