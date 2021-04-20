import Slider from "../sections/Slider";
import Stats from "../sections/Stats";

const Home = () => {
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

                        <div className="inventory homeInventory"></div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
