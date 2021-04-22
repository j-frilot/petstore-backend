import React from "react";

class SearchForm extends React.Component {
    render() {
        return (
            <section className="find">
                <div>
                    <h3>Are you interested in adoption?</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nulla iure necessitatibus ex quis et aspernatur modi sit
                        aliquam dicta consequuntur.
                    </p>
                </div>

                <div>
                    <img
                        src="images/home/paw-1.png"
                        alt="paw logo"
                        className="paw-logo-lg"
                    />
                    <h2>Find a pet just for you!</h2>
                </div>

                <form className="search-form">
                    <div className="gender-group">
                        <h3>Gender</h3>

                        <input
                            type="radio"
                            name="gender"
                            className="gender"
                            id="male"
                            value="male"
                        />
                        <label htmlFor="male">Male</label>

                        <input
                            type="radio"
                            name="gender"
                            className="gender"
                            id="female"
                            value="female"
                        />
                        <label htmlFor="female">Female</label>
                    </div>

                    <div className="color-group">
                        <h3>Color</h3>
                        <input
                            type="radio"
                            name="color"
                            id="black"
                            value="black"
                        />
                        <label htmlFor="black">Black</label>

                        <input
                            type="radio"
                            name="color"
                            id="brown"
                            value="brown"
                        />
                        <label htmlFor="brown">Brown</label>

                        <input
                            type="radio"
                            name="color"
                            id="white"
                            value="white"
                        />
                        <label htmlFor="white">White</label>
                    </div>

                    <button type="submit" className="btn form-submit">
                        {" "}
                        Find{" "}
                    </button>
                </form>
            </section>
        );
    }
}

export default SearchForm;
