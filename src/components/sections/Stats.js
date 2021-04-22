import { useState, useEffect } from "react";

const Stats = () => {
    const [stats, setStats] = useState({
        rescue: 0,
        adopt: 0,
        volunteer: 0
    });

    useEffect(() => {
        setInterval(() => {
            setStats((prevStats) => {
                if (prevStats.rescue < 342) {
                    return {
                        ...prevStats,
                        rescue: prevStats.rescue + 1
                    };
                }
                return prevStats;
            });
        }, 3);

        setInterval(() => {
            setStats((prevStats) => {
                if (prevStats.adopt < 155) {
                    return {
                        ...prevStats,
                        adopt: prevStats.adopt + 1
                    };
                }
                return prevStats;
            });
        }, 10);

        setInterval(() => {
            setStats((prevStats) => {
                if (prevStats.volunteer < 50) {
                    return {
                        ...prevStats,
                        volunteer: prevStats.volunteer + 1
                    };
                }
                return prevStats;
            });
        }, 50);
    }, []);

    return (
        <section className="data">
            <div className="container">
                <h3>Interested In adoption?</h3>

                <div className="data-section">
                    <div className="data-block">
                        <i className="fas fa-dog"></i>
                        <h3>
                            <span className="rescue-num">{stats.rescue}</span>{" "}
                            rescued
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.{" "}
                        </p>
                    </div>
                    <div className="data-block">
                        <i className="fas fa-heart"></i>
                        <h3>
                            <span className="adopt-num">{stats.adopt}</span>{" "}
                            adoptions
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="data-block">
                        <i className="fas fa-hands-helping"></i>
                        <h3>
                            <span className="volunteer-num">
                                {stats.volunteer}
                            </span>{" "}
                            volunteers
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
