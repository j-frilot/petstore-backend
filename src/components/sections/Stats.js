const Stats = () => {
    return (
        <>
            <section className="data">
                <div className="container">
                    <h3>Interested In adoption?</h3>

                    <div className="data-section">
                        <div className="data-block">
                            <i className="fas fa-dog"></i>
                            <h3>
                                <span className="rescue-num">0</span> rescued
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.{" "}
                            </p>
                        </div>
                        <div className="data-block">
                            <i className="fas fa-heart"></i>
                            <h3>
                                <span className="adopt-num">0</span> adoptions
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="data-block">
                            <i className="fas fa-hands-helping"></i>
                            <h3>
                                <span className="volunteer-num">0</span>{" "}
                                volunteers
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stats;
