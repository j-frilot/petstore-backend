import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import { CheckAll, HeartFill, People } from "react-bootstrap-icons";
import StatBox from "./StatBox";

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
        <section className="bg-primary">
            <Container className="py-5 text-center text-white">
                <h3 className="fw-bold">Interested In adoption?</h3>
                <Row>
                    <StatBox
                        icon=<CheckAll className="display-1 text-warning" />
                        stats={stats.rescue}
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit."
                    />
                    <StatBox
                        icon=<HeartFill className="display-1 text-warning" />
                        stats={stats.adopt}
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit."
                    />
                    <StatBox
                        icon=<People className="display-1 text-warning" />
                        stats={stats.volunteer}
                        desc="Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit."
                    />
                </Row>
            </Container>
        </section>
    );
};

export default Stats;
