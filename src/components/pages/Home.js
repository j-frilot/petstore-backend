// import Slider from "../sections/Slider";
import Stats from "../sections/Stats";

import PetCard from "../sections/PetCard";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <main>
            {/*<Slider />*/}
            <Stats />

            <section className="products">
                <div className="container">
                    <div className="section-intro">
                        <h4>Ready For A New Home</h4>
                        <h5 className="red">
                            <Link to="/inventory">
                                View All Pals{" "}
                                <i className="fas fa-chevron-right"></i>
                            </Link>
                        </h5>
                    </div>
                    <hr />
                    <PetCard name="bob" />
                    <div className="inventory homeInventory">
                        {/*homePetComponents*/}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
