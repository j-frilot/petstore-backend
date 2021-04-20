import Slider from "../sections/Slider";
import Stats from "../sections/Stats";
import homeInventory from "../utilities/homeInventory";
import Inven from "../sections/Inven";

const Home = () => {
    const homePetComponents = homeInventory.map((pet) => (
        <Inven
            key={pet.id}
            img={pet.img}
            name={pet.name}
            age={pet.age}
            gender={pet.gender}
            breed={pet.breed}
        />
    ));
    return (
        <>
            <main>
                <Slider />
                <Stats />
                <section className="products">
                    <div className="container">
                        <div className="section-intro">
                            <h4>Ready For A New Home</h4>
                            <h5 className="red">
                                <a href="inventory.html">
                                    View All Pals{" "}
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </h5>
                        </div>
                        <hr />

                        <div className="inventory homeInventory">
                            {homePetComponents}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
