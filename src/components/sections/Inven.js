import React from "react";

const Inven = (props) => {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={props.img}
                    alt="product-1"
                    className="img product-pic"
                />
            </div>

            <div className="card-name">
                <h1>{props.name}</h1>
            </div>

            <div className="info">
                <div className="card-age">
                    <h3>{props.age}</h3>
                </div>

                <div className="card-gender">
                    <h3>{props.gender}</h3>
                </div>

                <div className="card-breed">
                    <h3>{props.breed}</h3>
                </div>

                <a href="contact.html" className="card-dog-link">
                    <h3>More Info</h3>
                </a>
            </div>
        </div>
    );
};

export default Inven;
