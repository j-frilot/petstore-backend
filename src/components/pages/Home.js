// import Slider from "../sections/Slider";
import Stats from "../sections/Stats";
import homeInventory from "../utilities/homeInventory";
import PetCard from "../sections/PetCard";
import React from "react";
import { Link } from "react-router-dom";
// import PetInfo from "../utilities/PetInfo";

const Home = () => {
    const homePetComponents = homeInventory.map((pet) => (
        <PetCard
            key={pet.id}
            img={pet.img}
            name={pet.name}
            age={pet.age}
            gender={pet.gender}
            breed={pet.breed}
        />
    ));

    return (
        <main>
            {/*<Slider />*/}
            <Stats />
            {/*<PetInfo />*/}
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

                    <div className="inventory homeInventory">
                        {homePetComponents}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
