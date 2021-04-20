const SearchForm = () => {
    return (
        <section class="find">
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
                    class="paw-logo-lg"
                />
                <h2>Find a pet just for you!</h2>
            </div>

            <form class="search-form">
                <div class="gender-group">
                    <h3>Gender</h3>

                    <input
                        type="radio"
                        name="gender"
                        class="gender"
                        id="male"
                        value="male"
                    />
                    <label for="male">Male</label>

                    <input
                        type="radio"
                        name="gender"
                        class="gender"
                        id="female"
                        value="female"
                    />
                    <label for="female">Female</label>
                </div>

                <div class="color-group">
                    <h3>Color</h3>
                    <input type="radio" name="color" id="black" value="black" />
                    <label for="black">Black</label>

                    <input type="radio" name="color" id="brown" value="brown" />
                    <label for="brown">Brown</label>

                    <input type="radio" name="color" id="white" value="white" />
                    <label for="white">White</label>
                </div>

                <button type="submit" class="btn form-submit">
                    {" "}
                    Find{" "}
                </button>
            </form>
        </section>
    );
};

export default SearchForm;
