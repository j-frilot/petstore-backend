import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer className="">
                <section className="container danger">
                    <div className="content">
                        <h5>Animal In Danger?</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repudiandae assumenda libero architecto
                            dignissimos nesciunt!
                        </p>
                    </div>

                    <a href="contact.html" className="btn">
                        Call Now
                    </a>
                </section>
                <hr />
            </footer>
        );
    }
}

export default Footer;
