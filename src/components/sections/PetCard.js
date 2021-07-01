import React from "react";
import Image from "react-bootstrap/Image";

const PetCard = (props) => {
    const cardStyle = {
        width: "200px",
        boxShadow: "-5px 5px 5px rgba(225, 193, 7, 0.7)"
    };
    // https://images.dog.ceo/breeds/beagle/DSC05086.JPG
    // breeds / beagle / DSC05086.JPG;

    /* .products .inventory .card {
    text-align: center;
    margin: 20px;
    max-width: 225px;
    color: #1a6692;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: -5px 5px 5px rgba(225, 149, 5, 0.7);
    padding: 5px;
} */

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

            <div>
                <div>
                    <h3 className="m-0">{props.name}</h3>
                </div>
                <div>
                    <p className="fs-5 m-0">{props.age}</p>
                    <p className="fs-5 m-0">{props.gender}</p>
                    <p className="fs-5 m-0">{props.breed}</p>
                </div>

                <a href="/contact">
                    <p className="fs-5 m-0">More Info</p>
                </a>
            </div>
        </div>
    );
};

export default PetCard;
