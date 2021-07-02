import React from "react";
import Banner from "../../sections/Banner";
import Image from "react-bootstrap/Image";

const About = () => {
    return (
        <main className="about-section">
            <section>
                <Banner heading="About Love Paws" />
                <div className="about-content">
                    <div className="about-content-desc">
                        <h2>Our mission</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate quisquam ex officia dolore, Lorem
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Explicabo, quisquam.
                        </p>
                    </div>
                    <div className="about-content-desc">
                        <h2>Our Volunteers</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate quisquam ex officia dolore,
                            deserunt repellendus! Nobis quisquam reiciendis nam
                            mollitia vitae officiis minima alias laudantium
                            laborum odit dolorem, vero repudiandae ex, est, hic
                            saepe fugiat officia. Nobis accusamus ipsam
                            veritatis aliquid distinctio unde voluptates ut,
                            laboriosam minus, tenetur saepe obcaecati.
                        </p>
                    </div>
                    <div className="about-content-media">
                        <Image
                            src="images/about/about-2.jpg"
                            alt=""
                            className=""
                            fluid
                        />
                        <Image
                            src="images/about/about-2.jpg"
                            alt=""
                            className=""
                            fluid
                        />
                    </div>
                    <div className="about-content-desc">
                        <h2>Education</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cupiditate quisquam ex officia dolore,
                            deserunt repellendus! Nobis quisquam reiciendis nam
                            mollitia vitae officiis minima alias laudantium
                            laborum odit dolorem, vero repudiandae ex, est, hic
                            saepe fugiat officia. Nobis accusamus ipsam
                            veritatis aliquid distinctio unde voluptates ut,
                            laboriosam minus, tenetur saepe obcaecati.
                        </p>
                    </div>
                    <div className="about-content-media">
                        <Image
                            src="images/about/about-2.jpg"
                            alt=""
                            className=""
                            fluid
                        />
                        <Image
                            src="images/about/about-2.jpg"
                            alt=""
                            className=""
                            fluid
                        />
                    </div>
                </div>
                <hr />
            </section>
        </main>
    );
};

export default About;
