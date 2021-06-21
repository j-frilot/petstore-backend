import SearchForm from "../sections/SearchForm";
// import petInventory from "../utilities/petInventory";
import PetCard from "../sections/PetCard";

const Inventory = () => {
    return (
        <main>
            <SearchForm />
            <section className="products">
                <div className="container">
                    <div className="section-intro">
                        <h4>All Pals</h4>
                    </div>

                    <div className="inventory full-inventory">
                        <PetCard />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Inventory;
