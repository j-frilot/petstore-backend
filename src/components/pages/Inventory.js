import SearchForm from "../sections/SearchForm";

const Inventory = () => {
    return (
        <>
            <main>
                <SearchForm />
                <section class="products">
                    <div class="container">
                        <div class="section-intro">
                            <h4>All Pals</h4>
                        </div>

                        <div class="inventory full-inventory"></div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Inventory;
